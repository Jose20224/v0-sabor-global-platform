import type { Metadata } from 'next'
import { ProfileDashboard } from '@/components/profile/profile-dashboard'
export const metadata: Metadata = {title:'Mi perfil'}
export default function ProfilePage() {return <div><main className="mx-auto max-w-7xl px-5 py-12 sm:px-7 lg:px-10"><span className="text-xs font-extrabold uppercase tracking-[.15em] text-[#bd571a]">Personaliza tu experiencia</span><h1 className="mt-3 text-4xl font-extrabold tracking-tight">Mi perfil</h1><p className="mb-10 mt-3 max-w-2xl text-sm leading-7 text-[#6b5b52]">Configura tus gustos. Si inicias sesión se guardarán en tu cuenta; de lo contrario, en este navegador.</p><ProfileDashboard/></main></div>}
