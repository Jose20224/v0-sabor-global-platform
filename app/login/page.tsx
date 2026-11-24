import type { Metadata } from 'next'
import { LoginForm } from '@/components/auth/login-form'
export const metadata: Metadata={title:'Iniciar sesión'}
export default function LoginPage(){return <div><main className="mx-auto max-w-lg px-5 py-16"><div className="mb-8 text-center"><span className="text-xs font-extrabold uppercase tracking-[.15em] text-[#bd571a]">Bienvenido de nuevo</span><h1 className="mt-3 text-4xl font-extrabold tracking-tight">Inicia sesión</h1><p className="mt-3 text-sm leading-7 text-[#6b5b52]">Accede a tu espacio culinario y a tus recetas guardadas.</p></div><LoginForm/></main></div>}
