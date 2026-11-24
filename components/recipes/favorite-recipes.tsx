'use client'
import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { RecipeCard } from '@/components/recipes/recipe-card'
import { useFavorites } from '@/lib/favorites'
import { recipes } from '@/lib/recipes'
export function FavoriteRecipes() {
 const {favorites} = useFavorites()
 const selected = recipes.filter(r=>favorites.includes(r.slug))
 return selected.length ? <><p className="mb-8 text-sm text-[#75685f]">Tienes {selected.length} receta{selected.length!==1?'s':''} guardada{selected.length!==1?'s':''}.</p><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{selected.map(recipe=><RecipeCard key={recipe.slug} recipe={recipe}/>)}</div></> : <div className="rounded-[26px] border border-dashed border-[#e7cbb9] bg-white px-6 py-16 text-center"><Heart size={36} className="mx-auto text-[#e4742a]"/><h2 className="mt-5 text-xl font-extrabold">Todavía no has guardado recetas</h2><p className="mt-3 text-sm text-[#75685f]">Explora el catálogo y toca el corazón de las que quieras cocinar.</p><Link href="/recipes" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f47b25] px-6 py-3 text-sm font-extrabold text-white">Explorar recetas <ArrowRight size={17}/></Link></div>
}
