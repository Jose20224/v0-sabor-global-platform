'use client'
import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react'
import { RecipeCard } from './recipe-card'
import { categoryOptions, recipes } from '@/lib/recipes'

export function RecipeExplorer({ initialSearch = '', initialCategory = 'Todas' }: { initialSearch?: string; initialCategory?: string }) {
  const [search, setSearch] = useState(initialSearch)
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory as typeof categoryOptions[number]) ? initialCategory : 'Todas')
  const [country, setCountry] = useState('Todos')
  const [time, setTime] = useState('Cualquiera')
  const [difficulty, setDifficulty] = useState('Todas')
  const countries = [...new Set(recipes.map(r => r.country))].sort()
  const visible = useMemo(() => recipes.filter(r => {
    const text = [r.title, r.description, r.country, r.category, ...r.ingredients].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    const query = search.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    return text.includes(query) && (category === 'Todas' || r.category === category) && (country === 'Todos' || r.country === country) && (time === 'Cualquiera' || r.minutes <= Number(time)) && (difficulty === 'Todas' || r.difficulty === difficulty)
  }), [search, category, country, time, difficulty])
  const selectClass = 'w-full rounded-xl border border-[#ead8cf] bg-white px-4 py-3 text-sm font-semibold text-[#33251e] outline-none focus:border-[#f47b25] focus:ring-2 focus:ring-[#f47b25]/10'
  return <div>
    <div className="rounded-[26px] border border-[#ead8cf] bg-white p-4 shadow-[0_12px_30px_rgba(36,25,19,.06)] sm:p-6">
      <label htmlFor="recipe-search" className="mb-2 block text-sm font-bold">¿Qué te gustaría cocinar?</label>
      <div className="relative"><Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9b887d]"/><input id="recipe-search" type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar recetas o ingredientes..." className="w-full rounded-2xl border border-[#ead8cf] bg-[#fffaf7] py-4 pl-12 pr-5 outline-none focus:border-[#f47b25]"/></div>
      <div className="mt-5 flex flex-wrap items-center gap-2"><SlidersHorizontal size={17} className="mr-1 text-[#bd571a]"/>{categoryOptions.map(item => <button type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={'rounded-full border px-4 py-2 text-xs font-bold transition ' + (category === item ? 'border-[#f47b25] bg-[#f47b25] text-white' : 'border-[#ead8cf] bg-white text-[#75685f] hover:border-[#f47b25]')}>{item}</button>)}</div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="block text-xs font-bold text-[#75685f]">Origen<select className={'mt-2 ' + selectClass} value={country} onChange={e => setCountry(e.target.value)}><option>Todos</option>{countries.map(c => <option key={c}>{c}</option>)}</select></label>
        <label className="block text-xs font-bold text-[#75685f]">Tiempo máximo<select className={'mt-2 ' + selectClass} value={time} onChange={e => setTime(e.target.value)}><option value="Cualquiera">Cualquiera</option><option value="20">20 minutos</option><option value="30">30 minutos</option><option value="60">60 minutos</option></select></label>
        <label className="block text-xs font-bold text-[#75685f]">Dificultad<select className={'mt-2 ' + selectClass} value={difficulty} onChange={e => setDifficulty(e.target.value)}><option>Todas</option><option>Fácil</option><option>Intermedio</option><option>Avanzado</option></select></label>
      </div>
    </div>
    <div className="my-9 flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Explora recetas <span className="ml-2 align-middle text-sm font-bold text-[#a95725]">{visible.length} resultados</span></h2><p className="mt-1 text-sm text-[#75685f]">Recetas de demostración para descubrir tu próximo plato.</p></div><button type="button" onClick={() => {setSearch('');setCategory('Todas');setCountry('Todos');setTime('Cualquiera');setDifficulty('Todas')}} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#b65316] hover:bg-[#fff0e6]"><RotateCcw size={15}/> Limpiar filtros</button></div>
    {visible.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map(recipe => <RecipeCard key={recipe.slug} recipe={recipe}/>)}</div> : <div className="rounded-3xl border border-dashed border-[#e7cbb9] bg-white px-6 py-16 text-center"><Search className="mx-auto mb-4 text-[#c76e31]" size={32}/><h3 className="text-xl font-bold">No encontramos coincidencias</h3><p className="mt-2 text-[#75685f]">Prueba otro término o elimina algún filtro.</p></div>}
  </div>
}
