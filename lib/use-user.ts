'use client'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
export function useUser(){const [user,setUser]=useState<User|null>(null);const [ready,setReady]=useState(false)
 useEffect(()=>{if(!supabase){setReady(true);return}let active=true;const {data:{subscription}}=supabase.auth.onAuthStateChange((_event,session)=>{if(active){setUser(session?.user??null);setReady(true)}});return()=>{active=false;subscription.unsubscribe()}},[])
 return {user,ready}}
