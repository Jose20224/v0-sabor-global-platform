"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, X, Save } from "lucide-react"

const popularCuisines = [
  "Mediterránea",
  "Asiática",
  "Mexicana",
  "Italiana",
  "Francesa",
  "India",
  "Japonesa",
  "Tailandesa",
  "Árabe",
  "Peruana",
]

const cookingStyles = [
  "Casera",
  "Gourmet",
  "Rápida",
  "Saludable",
  "Vegetariana",
  "Vegana",
  "Sin Gluten",
  "Baja en Carbohidratos",
  "Keto",
  "Paleo",
]

export function DietaryPreferences() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(["Mediterránea", "Asiática"])
  const [selectedStyles, setSelectedStyles] = useState<string[]>(["Saludable", "Vegetariana"])
  const [customPreference, setCustomPreference] = useState("")
  const [customPreferences, setCustomPreferences] = useState<string[]>(["Comida picante"])

  const toggleSelection = (item: string, list: string[], setList: (items: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item))
    } else {
      setList([...list, item])
    }
  }

  const addCustomPreference = () => {
    if (customPreference.trim() && !customPreferences.includes(customPreference.trim())) {
      setCustomPreferences([...customPreferences, customPreference.trim()])
      setCustomPreference("")
    }
  }

  const removeCustomPreference = (item: string) => {
    setCustomPreferences(customPreferences.filter((p) => p !== item))
  }

  const handleSave = () => {
    console.log("[v0] Saving dietary preferences:", {
      cuisines: selectedCuisines,
      styles: selectedStyles,
      custom: customPreferences,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferencias Alimentarias</CardTitle>
        <CardDescription>
          Selecciona tus cocinas y estilos de cocina favoritos para recibir recomendaciones personalizadas
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Cocinas Favoritas */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Cocinas Favoritas</Label>
          <div className="flex flex-wrap gap-2">
            {popularCuisines.map((cuisine) => (
              <Badge
                key={cuisine}
                variant={selectedCuisines.includes(cuisine) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => toggleSelection(cuisine, selectedCuisines, setSelectedCuisines)}
              >
                {cuisine}
              </Badge>
            ))}
          </div>
        </div>

        {/* Estilos de Cocina */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Estilos de Cocina</Label>
          <div className="flex flex-wrap gap-2">
            {cookingStyles.map((style) => (
              <Badge
                key={style}
                variant={selectedStyles.includes(style) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => toggleSelection(style, selectedStyles, setSelectedStyles)}
              >
                {style}
              </Badge>
            ))}
          </div>
        </div>

        {/* Preferencias Personalizadas */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Preferencias Adicionales</Label>
          <div className="flex gap-2">
            <Input
              value={customPreference}
              onChange={(e) => setCustomPreference(e.target.value)}
              placeholder="Agregar preferencia personalizada..."
              onKeyPress={(e) => e.key === "Enter" && addCustomPreference()}
            />
            <Button onClick={addCustomPreference} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {customPreferences.map((pref) => (
              <Badge key={pref} variant="secondary" className="gap-1">
                {pref}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-destructive"
                  onClick={() => removeCustomPreference(pref)}
                />
              </Badge>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="w-full md:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Guardar Preferencias
        </Button>
      </CardContent>
    </Card>
  )
}
