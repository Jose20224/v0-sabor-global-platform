"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Save } from "lucide-react"

export function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "María González",
    email: "maria@example.com",
    bio: "Amante de la cocina internacional y exploradora de nuevos sabores.",
    location: "Madrid, España",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log("[v0] Saving profile data:", formData)
    // Aquí iría la lógica para guardar los datos
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información Personal</CardTitle>
        <CardDescription>Actualiza tu información básica y foto de perfil</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar Section */}
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/profile-woman-cooking.jpg" />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm">
            <Camera className="h-4 w-4 mr-2" />
            Cambiar Foto
          </Button>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Ubicación</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            placeholder="Ciudad, País"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Biografía</Label>
          <Textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            placeholder="Cuéntanos sobre tus gustos culinarios..."
            rows={3}
          />
        </div>

        <Button onClick={handleSave} className="w-full md:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Guardar Cambios
        </Button>
      </CardContent>
    </Card>
  )
}
