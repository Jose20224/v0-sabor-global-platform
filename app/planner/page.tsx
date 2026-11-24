import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MealPlanner } from '@/components/recipes/meal-planner'
export const metadata: Metadata = {title:'Planificador semanal'}
export default function PlannerPage() {return <div><Header/><main className="mx-auto max-w-7xl px-5 py-14 sm:px-7 lg:px-10"><span className="text-xs font-extrabold uppercase tracking-[.15em] text-[#bd571a]">Organízate</span><h1 className="mt-3 text-4xl font-extrabold tracking-tight">Planificador de comidas</h1><p className="mb-9 mt-3 text-sm text-[#6b5b52]">Una forma sencilla de organizar tus ideas para cocinar durante la semana.</p><MealPlanner/></main><Footer/></div>}
