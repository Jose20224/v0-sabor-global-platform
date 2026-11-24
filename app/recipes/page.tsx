import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RecipeExplorer } from '@/components/recipes/recipe-explorer'

export const metadata: Metadata = { title: 'Explorar recetas', description: 'Busca por ingredientes, origen y tiempo de preparación.' }
export default async function RecipesPage({searchParams}: {searchParams: Promise<{q?: string; category?: string}>}) {
  const query = await searchParams
  return <div className="min-h-screen"><Header/><main><section className="border-b border-[#ead8cf] bg-[#fff0e6]/45"><div className="mx-auto max-w-7xl px-5 py-14 sm:px-7 lg:px-10 lg:py-20"><span className="text-xs font-extrabold uppercase tracking-[.15em] text-[#bd571a]">Gastronomía sin fronteras</span><h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-.04em] sm:text-6xl">Encuentra algo que realmente quieras cocinar.</h1><p className="mt-5 max-w-2xl text-base leading-8 text-[#6b5b52]">Busca por ingredientes, descubre sabores del mundo y encuentra el plato perfecto para tu día.</p></div></section><div className="mx-auto max-w-7xl px-5 py-12 sm:px-7 lg:px-10"><RecipeExplorer initialSearch={query.q || ''} initialCategory={query.category || 'Todas'}/></div></main><Footer/></div>
}
