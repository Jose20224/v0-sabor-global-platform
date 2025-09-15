import { Search, Globe, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">Sabor Global</h1>
        </Link>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/recipes" className="text-foreground hover:text-primary transition-colors">
            Recetas
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Categorías
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Comunidad
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar recetas..." className="pl-10 bg-muted border-0" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/profile">
              <User className="h-4 w-4 mr-2" />
              Mi Perfil
            </Link>
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/register">Registrarse</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
