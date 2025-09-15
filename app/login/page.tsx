import { LoginForm } from "@/components/auth/login-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Bienvenido de vuelta</h1>
            <p className="text-muted-foreground">Inicia sesión para acceder a tus recetas favoritas</p>
          </div>

          <LoginForm />

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="text-primary hover:underline font-medium">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
