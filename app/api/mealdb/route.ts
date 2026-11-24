import { NextResponse } from 'next/server'
import { getMeal } from '@/lib/mealdb'
import { mealSummary } from '@/lib/meal-summary'
export async function GET(request:Request){const id=new URL(request.url).searchParams.get('id')||'';if(!/^\d{1,12}$/.test(id))return NextResponse.json({error:'invalid id'},{status:400});try{const meal=await getMeal(id);return meal?NextResponse.json(mealSummary(meal)):NextResponse.json({error:'not found'},{status:404})}catch{return NextResponse.json({error:'unavailable'},{status:503})}}
