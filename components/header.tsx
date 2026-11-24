'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useUser } from '@/lib/use-user'
import { supabase } from '@/lib/supabase'
import { ArrowRight, ChefHat, Heart, Menu, Search, UserRound, X } from 'lucide-react'

const links = [{href:'/',label:'Inicio'},{href:'/recipes',label:'Recetas'},{href:'/community',label:'Comunidad'},{href:'/my-recipes',label:'Mis recetas'}]

export function Header() {
  const {user,ready}=useUser()
  const pathname = usePathname()
  const router = useRouter()
  const [mobile, setMobile] = useState(false)
  const [search, setSearch] = useState('')
  function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); router.push('/recipes?q=' + encodeURIComponent(search.trim())); setMobile(false) }
  return <header className="sticky top-0 z-50 border-b border-[#ead8cf]/80 bg-[#fff8f6]/95 backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-7 lg:px-10">
      <Link href="/" className="inline-flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-[-.04em] sm:text-2xl"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f47b25] text-white"><ChefHat size={23}/></span><span className="text-[#d75e15]">Sabor <span className="text-[#241913]">Global</span></span></Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={'rounded-full px-4 py-2.5 text-sm font-bold transition ' + ((pathname === link.href || (link.href === '/recipes' && pathname.startsWith('/recipes/'))) ? 'bg-[#fff0e6] text-[#a7480c]' : 'text-[#6b5b52] hover:bg-[#fff0e6] hover:text-[#b14c10]')}>{link.label}</Link>)}</nav>
      <form onSubmit={submit} role="search" className="hidden max-w-[220px] flex-1 xl:block"><label className="relative block"><span className="sr-only">Buscar recetas</span><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#89766b]"/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar recetas..." className="w-full rounded-full border border-[#ead8cf] bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#f47b25]"/></label></form>
      <div className="hidden items-center gap-2 sm:flex"><Link href="/my-recipes" title="Mis favoritos" aria-label="Mis favoritos" className="flex h-10 w-10 items-center justify-center rounded-full text-[#b85b22] hover:bg-[#fff0e6]"><Heart size={19}/></Link><Link href="/profile" className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold text-[#48352b] hover:bg-[#fff0e6]"><UserRound size={18}/><span className="hidden md:inline">Perfil</span></Link>{ready && (user ? <button type="button" onClick={async()=>{await supabase?.auth.signOut();router.push('/');router.refresh()}} className="rounded-full bg-[#f47b25] px-4 py-2.5 text-sm font-extrabold text-white">Cerrar sesión</button> : <Link href="/register" className="inline-flex items-center gap-1 rounded-full bg-[#f47b25] px-4 py-2.5 text-sm font-extrabold text-white">Crear cuenta <ArrowRight size={16}/></Link>)}</div>
      <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ead8cf] bg-white lg:hidden" aria-label={mobile ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? <X/> : <Menu/>}</button>
    </div>
    {mobile && <div className="border-t border-[#ead8cf] bg-white px-5 pb-5 pt-4 lg:hidden"><form onSubmit={submit} className="mb-4 flex gap-2"><input className="min-w-0 flex-1 rounded-xl border border-[#ead8cf] px-4 py-3 text-sm" placeholder="Buscar recetas" value={search} onChange={e => setSearch(e.target.value)}/><button type="submit" className="rounded-xl bg-[#f47b25] px-4 text-white" aria-label="Buscar"><Search size={19}/></button></form><nav className="grid gap-1" aria-label="Navegación móvil">{[...links,{href:'/profile',label:'Mi perfil'},{href:'/planner',label:'Planificador'},...(!user?[{href:'/login',label:'Iniciar sesión'},{href:'/register',label:'Crear cuenta'}]:[])].map(link => <Link key={link.href} href={link.href} onClick={() => setMobile(false)} className="rounded-xl px-4 py-3 font-semibold text-[#48352b] hover:bg-[#fff0e6]">{link.label}</Link>)}</nav>{user&&<button type="button" onClick={async()=>{await supabase?.auth.signOut();setMobile(false);router.push('/');router.refresh()}} className="mt-2 rounded-xl px-4 py-3 font-bold text-[#b14c10]">Cerrar sesión</button>}</div>}
  </header>
}
