import type { Meal } from '@/lib/mealdb'
export function mealSummary(m:Meal){return {id:m.idMeal,title:m.strMeal,image:m.strMealThumb,category:m.strCategory||'',area:m.strArea||''}}
