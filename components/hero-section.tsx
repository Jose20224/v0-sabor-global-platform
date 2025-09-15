import { Button } from "@/components/ui/button"
import { ChefHat, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Descubre los <span className="text-primary">Sabores del Mundo</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Explora recetas auténticas de cada rincón del planeta. Desde la cocina italiana hasta los sabores asiáticos,
            encuentra tu próxima comida favorita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <ChefHat className="mr-2 h-5 w-5" />
              Explorar Recetas
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Users className="mr-2 h-5 w-5" />
              Unirse a la Comunidad
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Recetas Únicas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Países Representados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Cocineros Activos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
