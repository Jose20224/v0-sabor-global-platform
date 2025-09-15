"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Plus, X, Save, AlertTriangle } from "lucide-react"

const commonAllergies = [
  "Gluten",
  "Lácteos",
  "Huevos",
  "Frutos secos",
  "Maní",
  "Soja",
  "Pescado",
  "Mariscos",
  "Sésamo",
  "Mostaza",
]

const dietaryRestrictions = [
  "Vegetariano",
  "Vegano",
  "Kosher",
  "Halal",
  "Sin azúcar",
  "Bajo en sodio",
  "Sin alcohol",
  "Crudo",
  "Orgánico",
]

export function AllergiesIntolerances() {
  const [allergies, setAllergies] = useState<string[]>(["Frutos secos"])
  const [restrictions, setRestrictions] = useState<string[]>(["Vegetariano"])
  const [customAllergy, setCustomAllergy] = useState("")
  const [customRestriction, setCustomRestriction] = useState("")
  const [prohibitedFoods, setProhibitedFoods] = useState("Carne de cerdo, alcohol")
  const [strictMode, setStrictMode] = useState(true)

  const toggleSelection = (item: string, list: string[], setList: (items: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item))
    } else {
      setList([...list, item])
    }
  }

  const addCustomItem = (
    value: string,
    list: string[],
    setList: (items: string[]) => void,
    setValue: (value: string) => void,
  ) => {
    if (value.trim() && !list.includes(value.trim())) {
      setList([...list, value.trim()])
      setValue("")
    }
  }

  const removeItem = (item: string, list: string[], setList: (items: string[]) => void) => {
    setList(list.filter((i) => i !== item))
  }

  const handleSave = () => {
    console.log("[v0] Saving allergies and restrictions:", {
      allergies,
      restrictions,
      prohibitedFoods,
      strictMode,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Alergias e Intolerancias
        </CardTitle>
        <CardDescription>
          Configura tus restricciones alimentarias para filtrar recetas que no sean seguras para ti
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Modo Estricto */}
        <div className="flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <div className="space-y-1">
            <Label className="text-base font-medium">Modo Estricto</Label>
            <p className="text-sm text-muted-foreground">Ocultar completamente recetas con ingredientes prohibidos</p>
          </div>
          <Switch checked={strictMode} onCheckedChange={setStrictMode} />
        </div>

        {/* Alergias */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Alergias Alimentarias</Label>
          <div className="flex flex-wrap gap-2">
            {commonAllergies.map((allergy) => (
              <Badge
                key={allergy}
                variant={allergies.includes(allergy) ? "destructive" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleSelection(allergy, allergies, setAllergies)}
              >
                {allergy}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={customAllergy}
              onChange={(e) => setCustomAllergy(e.target.value)}
              placeholder="Agregar alergia personalizada..."
              onKeyPress={(e) =>
                e.key === "Enter" && addCustomItem(customAllergy, allergies, setAllergies, setCustomAllergy)
              }
            />
            <Button
              onClick={() => addCustomItem(customAllergy, allergies, setAllergies, setCustomAllergy)}
              size="sm"
              variant="outline"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {allergies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {allergies
                .filter((a) => !commonAllergies.includes(a))
                .map((allergy) => (
                  <Badge key={allergy} variant="destructive" className="gap-1">
                    {allergy}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeItem(allergy, allergies, setAllergies)}
                    />
                  </Badge>
                ))}
            </div>
          )}
        </div>

        {/* Restricciones Dietéticas */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Restricciones Dietéticas</Label>
          <div className="flex flex-wrap gap-2">
            {dietaryRestrictions.map((restriction) => (
              <Badge
                key={restriction}
                variant={restrictions.includes(restriction) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => toggleSelection(restriction, restrictions, setRestrictions)}
              >
                {restriction}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={customRestriction}
              onChange={(e) => setCustomRestriction(e.target.value)}
              placeholder="Agregar restricción personalizada..."
              onKeyPress={(e) =>
                e.key === "Enter" &&
                addCustomItem(customRestriction, restrictions, setRestrictions, setCustomRestriction)
              }
            />
            <Button
              onClick={() => addCustomItem(customRestriction, restrictions, setRestrictions, setCustomRestriction)}
              size="sm"
              variant="outline"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Alimentos Prohibidos */}
        <div className="space-y-2">
          <Label htmlFor="prohibited">Alimentos Específicos Prohibidos</Label>
          <Textarea
            id="prohibited"
            value={prohibitedFoods}
            onChange={(e) => setProhibitedFoods(e.target.value)}
            placeholder="Lista alimentos específicos que no puedes consumir..."
            rows={3}
          />
          <p className="text-xs text-muted-foreground">
            Separa los alimentos con comas. Ejemplo: carne de cerdo, alcohol, chocolate
          </p>
        </div>

        <Button onClick={handleSave} className="w-full md:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Guardar Restricciones
        </Button>
      </CardContent>
    </Card>
  )
}
