import type { Metadata } from 'next'
import { RegisterForm } from '@/components/auth/register-form'
export const metadata: Metadata={title:'Crear cuenta'}
export default function RegisterPage(){return <div><main className="mx-auto max-w-lg px-5 py-16"><div className="mb-8 text-center"><span className="text-xs font-extrabold uppercase tracking-[.15em] text-[#bd571a]">Únete a la cocina</span><h1 className="mt-3 text-4xl font-extrabold tracking-tight">Crea tu cuenta</h1><p className="mt-3 text-sm leading-7 text-[#6b5b52]">Crea tu cuenta para guardar tus preferencias y recetas favoritas.</p></div><RegisterForm/></main></div>}
