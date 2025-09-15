"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Save, BarChart3 } from "lucide-react"

export function NutritionalSettings() {
  const [showNutrition, setShowNutrition] = useState(true)
  const [nutritionDetail, setNutritionDetail] = useState("detailed")
  const [calorieRange, setCalorieRange] = useState([400, 800])
  const [showCaloriesOnly, setShowCaloriesOnly] = useState(false)
  const [highlightHealthy, setHighlightHealthy] = useState(true)
  const [hideUnhealthy, setHideUnhealthy] = useState(false)

  const handleSave = () => {
    console.log("[v0] Saving nutritional settings:", {
      showNutrition,
      nutritionDetail,
      calorieRange,
      showCaloriesOnly,
      highlightHealthy,
      hideUnhealthy,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Configuración Nutricional
        </CardTitle>
        <CardDescription>Personaliza cómo quieres ver la información nutricional en las recetas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Mostrar Información Nutricional */}
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div className="space-y-1">
            <Label className="text-base font-medium">Mostrar Información Nutricional</Label>
            <p className="text-sm text-muted-foreground">Incluir datos nutricionales en todas las recetas</p>
          </div>
          <Switch checked={showNutrition} onCheckedChange={setShowNutrition} />
        </div>

        {showNutrition && (
          <>
            {/* Nivel de Detalle */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Nivel de Detalle Nutricional</Label>
              <Select value={nutritionDetail} onValueChange={setNutritionDetail}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Básico (Calorías, Proteínas, Carbohidratos, Grasas)</SelectItem>
                  <SelectItem value="detailed">Detallado (Incluye vitaminas y minerales)</SelectItem>
                  <SelectItem value="complete">Completo (Análisis nutricional completo)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Solo Calorías */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="text-base font-medium">Solo Mostrar Calorías</Label>
                <p className="text-sm text-muted-foreground">Mostrar únicamente el conteo de calorías</p>
              </div>
              <Switch checked={showCaloriesOnly} onCheckedChange={setShowCaloriesOnly} />
            </div>

            {/* Rango de Calorías Preferido */}
            <div className="space-y-4">
              <Label className="text-base font-medium">
                Rango de Calorías Preferido por Porción: {calorieRange[0]} - {calorieRange[1]} cal
              </Label>
              <Slider
                value={calorieRange}
                onValueChange={setCalorieRange}
                max={1500}
                min={100}
                step={50}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>100 cal</span>
                <span>1500 cal</span>
              </div>
            </div>
          </>
        )}

        {/* Destacar Recetas Saludables */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-base font-medium">Destacar Recetas Saludables</Label>
            <p className="text-sm text-muted-foreground">Resaltar recetas con alto valor nutricional</p>
          </div>
          <Switch checked={highlightHealthy} onCheckedChange={setHighlightHealthy} />
        </div>

        {/* Ocultar Recetas Poco Saludables */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label className="text-base font-medium">Ocultar Recetas Poco Saludables</Label>
            <p className="text-sm text-muted-foreground">
              No mostrar recetas con alto contenido de azúcar, sal o grasas saturadas
            </p>
          </div>
          <Switch checked={hideUnhealthy} onCheckedChange={setHideUnhealthy} />
        </div>

        <Button onClick={handleSave} className="w-full md:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Guardar Configuración
        </Button>
      </CardContent>
    </Card>
  )
}
