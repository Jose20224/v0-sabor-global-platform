import Link from 'next/link'
import { RecoverForm } from '@/components/auth/recover-form'
export default function RecoverPage(){return <div><main className="mx-auto max-w-lg px-5 py-20 text-center"><div className="rounded-[26px] border border-[#ead8cf] bg-white p-8"><h1 className="text-3xl font-extrabold">Recuperar contraseña</h1><p className="mt-4 text-sm text-[#75685f]">Te enviaremos un enlace para crear una nueva contraseña.</p><RecoverForm/><Link href="/login" className="mt-6 inline-block text-sm font-bold text-[#bd571a]">Volver a iniciar sesión</Link></div></main></div>}
