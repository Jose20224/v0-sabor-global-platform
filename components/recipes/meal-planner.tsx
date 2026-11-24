'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CalendarDays, Trash2 } from 'lucide-react'
import { recipes } from '@/lib/recipes'
import { useUser } from '@/lib/use-user'
import { supabase } from '@/lib/supabase'
const KEY='sabor-global:planner:v1'
const days=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
type Plan=Record<string,string>
export function MealPlanner() {
 const {user,ready}=useUser()
 const [plan,setPlan]=useState<Plan>({})
 const [status,setStatus]=useState('')
 const [busy,setBusy]=useState(false)
 useEffect(()=>{if(!ready)return;let active=true;setPlan({});setStatus('');async function load(){if(user&&supabase){const {data,error}=await supabase.from('sg_planner').select('plan').eq('user_id',user.id).maybeSingle();if(active&&data)setPlan(data.plan as Plan);if(active&&error)setStatus('No se pudo cargar el plan.')}else{try{const stored=JSON.parse(localStorage.getItem(KEY)||'{}');if(active&&stored&&typeof stored==='object'&&!Array.isArray(stored))setPlan(stored)}catch{}}}load();return()=>{active=false}},[user?.id,ready])
 async function update(day:string,value:string){if(!ready||busy)return;setBusy(true);const next={...plan,[day]:value};setPlan(next);if(user&&supabase){const {error}=await supabase.from('sg_planner').upsert({user_id:user.id,plan:next,updated_at:new Date().toISOString()});setStatus(error?'No se pudo guardar el plan.':'Plan guardado en tu cuenta.')}else{try{localStorage.setItem(KEY,JSON.stringify(next));setStatus('Plan guardado en este navegador.')}catch{setStatus('No se pudo guardar el plan.')}}setBusy(false)}
 return <div><div className="mb-7 flex items-start gap-3 rounded-2xl border border-[#ead8cf] bg-white p-5"><CalendarDays className="mt-0.5 shrink-0 text-[#e4742a]"/><div><h2 className="font-extrabold">Organiza una semana a tu ritmo</h2><p className="mt-1 text-sm leading-7 text-[#75685f]">Selecciona una receta por día. Esta versión no calcula nutrientes ni genera compras automáticamente.</p></div></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{days.map(day=><div key={day} className="rounded-[24px] border border-[#ead8cf] bg-white p-5"><div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-extrabold">{day}</h3><button type="button" disabled={!ready||busy} onClick={()=>update(day,'')} className="rounded-lg p-2 text-[#8a776b] hover:bg-[#fff0e6] hover:text-[#b65316]" title={'Quitar receta de ' + day} aria-label={'Quitar receta de ' + day}><Trash2 size={17}/></button></div><label className="block text-xs font-bold text-[#75685f]">Receta del día<select disabled={!ready||busy} className="mt-2 w-full rounded-xl border border-[#ead8cf] bg-[#fffaf7] px-3 py-3 text-sm font-semibold text-[#241913]" value={plan[day]||''} onChange={e=>update(day,e.target.value)}><option value="">Sin seleccionar</option>{recipes.map(r=><option key={r.slug} value={r.slug}>{r.title}</option>)}</select></label>{plan[day] && <Link href={'/recipes/'+plan[day]} className="mt-4 block text-sm font-bold text-[#b65316] hover:underline">Ver preparación</Link>}</div>)}</div><p role="status" className="mt-5 text-sm font-semibold text-[#96603d]">{status}</p></div>
}
