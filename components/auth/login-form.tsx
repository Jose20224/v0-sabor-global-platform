'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
export function LoginForm() {
 const [notice,setNotice]=useState(''); const [busy,setBusy]=useState(false); const router=useRouter()
 async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();if(!supabase){setNotice('La conexión no está configurada.');return} const f=new FormData(e.currentTarget);setBusy(true);const {error}=await supabase.auth.signInWithPassword({email:String(f.get('email')).trim(),password:String(f.get('password'))});setBusy(false);if(error){setNotice('No se pudo iniciar sesión. Revisa tus datos y confirma tu correo.');return}router.push('/profile');router.refresh()}
 const input='mt-2 w-full rounded-xl border border-[#ead8cf] bg-[#fffaf7] px-4 py-3.5 outline-none focus:border-[#f47b25]'
 return <form onSubmit={submit} className="space-y-5 rounded-[26px] border border-[#ead8cf] bg-white p-6 shadow-sm sm:p-8"><label className="block text-sm font-bold">Correo electrónico<input className={input} name="email" type="email" required autoComplete="email"/></label><label className="block text-sm font-bold">Contraseña<input className={input} name="password" type="password" required autoComplete="current-password"/></label><div className="text-right"><Link href="/recover" className="text-xs font-extrabold text-[#bd571a]">¿Olvidaste tu contraseña?</Link></div><button disabled={busy} className="w-full rounded-full bg-[#f47b25] px-6 py-3.5 font-bold text-white disabled:opacity-50">{busy?'Entrando…':'Iniciar sesión'}</button>{notice&&<p role="alert" className="text-sm text-[#a94b11]">{notice}</p>}<p className="text-center text-sm">¿No tienes cuenta? <Link href="/register" className="font-bold text-[#bd571a]">Regístrate</Link></p></form>
}
