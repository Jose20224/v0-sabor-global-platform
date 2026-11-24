import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FavoriteRecipes } from '@/components/recipes/favorite-recipes'
export const metadata: Metadata = {title:'Mis recetas guardadas'}
export default function MyRecipesPage() {return <div><main className="mx-auto max-w-7xl px-5 py-14 sm:px-7 lg:px-10"><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><span className="text-xs font-extrabold uppercase tracking-[.15em] text-[#bd571a]">Tu colección</span><h1 className="mt-3 text-4xl font-extrabold tracking-tight">Mis recetas</h1><p className="mt-3 text-sm text-[#6b5b52]">Guarda tus favoritas en tu cuenta o en este navegador.</p></div><Link href="/recipes" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#b65316]">Descubrir nuevas recetas <ArrowRight size={17}/></Link></div><FavoriteRecipes/></main></div>}
