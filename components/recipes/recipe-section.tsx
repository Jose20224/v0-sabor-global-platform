import { Clock, Star, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Recipe {
  id: number
  title: string
  image: string
  time: string
  difficulty: string
  rating: number
  description: string
}

interface RecipeSectionProps {
  title: string
  subtitle: string
  recipes: Recipe[]
  sectionId: string
}

export function RecipeSection({ title, subtitle, recipes, sectionId }: RecipeSectionProps) {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-xs font-medium">{recipe.rating}</span>
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold text-lg text-foreground line-clamp-1">{recipe.title}</h3>

              <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ChefHat className="h-4 w-4" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="bg-primary/5 hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary"
        >
          Mostrar Más Recetas de {title}
        </Button>
      </div>
    </section>
  )
}
