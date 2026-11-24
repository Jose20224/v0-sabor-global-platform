'use client'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useUser } from '@/lib/use-user'
const KEY='sabor-global:favorites:v1'
type FavoritesContextValue={favorites:string[];toggle:(slug:string)=>Promise<void>}
const FavoritesContext=createContext<FavoritesContextValue|null>(null)
export function FavoritesProvider({children}:{children:React.ReactNode}){const {user,ready}=useUser();const [favorites,setFavorites]=useState<string[]>([]);const pending=useRef(new Set<string>())
 useEffect(()=>{if(!ready)return;let active=true;async function sync(){if(user&&supabase){const {data,error}=await supabase.from('sg_favorites').select('recipe_slug').eq('user_id',user.id);if(active&&!error)setFavorites((data||[]).map(x=>x.recipe_slug))}else{try{const saved=JSON.parse(localStorage.getItem(KEY)||'[]');if(active)setFavorites(Array.isArray(saved)?saved.filter((x):x is string=>typeof x==='string'):[])}catch{if(active)setFavorites([])}}}setFavorites([]);sync();window.addEventListener('sg:favorites',sync);window.addEventListener('storage',sync);return()=>{active=false;window.removeEventListener('sg:favorites',sync);window.removeEventListener('storage',sync)}},[user?.id,ready])
 async function toggle(slug:string){if(!ready||pending.current.has(slug))return;pending.current.add(slug);try{if(user&&supabase){const exists=favorites.includes(slug);const result=exists?await supabase.from('sg_favorites').delete().eq('user_id',user.id).eq('recipe_slug',slug):await supabase.from('sg_favorites').upsert({user_id:user.id,recipe_slug:slug});if(result.error)throw result.error}else{const raw=JSON.parse(localStorage.getItem(KEY)||'[]');const current:string[]=Array.isArray(raw)?raw.filter(x=>typeof x==='string'):[];localStorage.setItem(KEY,JSON.stringify(current.includes(slug)?current.filter(x=>x!==slug):[...current,slug]))}window.dispatchEvent(new Event('sg:favorites'))}catch{alert('No se pudo guardar el cambio. Inténtalo nuevamente.')}finally{pending.current.delete(slug)}}
 return <FavoritesContext.Provider value={{favorites,toggle}}>{children}</FavoritesContext.Provider>}
export function useFavorites(){const value=useContext(FavoritesContext);if(!value)throw new Error('FavoritesProvider missing');return value}
