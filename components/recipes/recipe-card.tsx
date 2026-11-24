'use client'
import Link from 'next/link'
import { ArrowUpRight, Clock3, Heart, UsersRound } from 'lucide-react'
import { useFavorites } from '@/lib/favorites'
import type { Recipe } from '@/lib/recipes'

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { favorites, toggle } = useFavorites()
  const saved = favorites.includes(recipe.slug)
  return <article className="group overflow-hidden rounded-[24px] border border-[#eaded7] bg-white shadow-[0_8px_24px_rgba(36,25,19,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(36,25,19,.11)]">
    <div className="relative aspect-[4/3] overflow-hidden bg-[#fff0e6]">
      <Link href={'/recipes/' + recipe.slug} aria-label={'Ver receta ' + recipe.title} className="block h-full w-full"><img src={recipe.image} alt={recipe.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.065]"/></Link>
      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#a74708] shadow-sm">{recipe.country}</span>
      <button type="button" onClick={() => toggle(recipe.slug)} aria-pressed={saved} aria-label={saved ? 'Quitar de favoritos' : 'Guardar en favoritos'} className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105 hover:text-[#ef6f1f]" title={saved ? 'Quitar de favoritos' : 'Guardar en favoritos'}><Heart size={19} className={saved ? 'fill-[#f47b25] text-[#f47b25]' : 'text-[#6f625b]'}/></button>
    </div>
    <div className="p-5">
      <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#c25712]">{recipe.category} · {recipe.difficulty}</p>
      <Link href={'/recipes/' + recipe.slug} className="flex items-start justify-between gap-3 text-xl font-extrabold tracking-tight text-[#241913] hover:text-[#c25712]"><span>{recipe.title}</span><ArrowUpRight size={19} className="mt-1 shrink-0 text-[#d46b25]"/></Link>
      <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-6 text-[#75685f]">{recipe.description}</p>
      <div className="mt-5 flex items-center gap-5 border-t border-[#f1e5de] pt-4 text-xs font-semibold text-[#75685f]"><span className="flex items-center gap-1.5"><Clock3 size={16}/>{recipe.minutes} min</span><span className="flex items-center gap-1.5"><UsersRound size={16}/>{recipe.servings} porciones</span></div>
    </div>
  </article>
}
