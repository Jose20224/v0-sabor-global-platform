import { Header } from "@/components/header"
import { ProfileForm } from "@/components/profile/profile-form"
import { DietaryPreferences } from "@/components/profile/dietary-preferences"
import { AllergiesIntolerances } from "@/components/profile/allergies-intolerances"
import { NutritionalSettings } from "@/components/profile/nutritional-settings"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Mi Perfil</h1>
            <p className="text-muted-foreground">Personaliza tu experiencia culinaria según tus gustos y necesidades</p>
          </div>

          <div className="grid gap-8">
            {/* Información Personal */}
            <ProfileForm />

            {/* Preferencias Alimentarias */}
            <DietaryPreferences />

            {/* Alergias e Intolerancias */}
            <AllergiesIntolerances />

            {/* Configuración Nutricional */}
            <NutritionalSettings />
          </div>
        </div>
      </main>
    </div>
  )
}
