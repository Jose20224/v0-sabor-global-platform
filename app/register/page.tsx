import { RegisterForm } from "@/components/auth/register-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Únete a Sabor Global</h1>
            <p className="text-muted-foreground">Crea tu cuenta y descubre recetas de todo el mundo</p>
          </div>

          <RegisterForm />

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
