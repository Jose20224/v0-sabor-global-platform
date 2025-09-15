import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"

const featuredRecipes = [
  {
    id: 1,
    title: "Paella Valenciana Auténtica",
    country: "España",
    image: "/paella-valenciana-with-saffron-rice-and-seafood.jpg",
    cookTime: "45 min",
    servings: 6,
    rating: 4.8,
    difficulty: "Intermedio",
  },
  {
    id: 2,
    title: "Ramen Tonkotsu Casero",
    country: "Japón",
    image: "/tonkotsu-ramen-with-pork-broth-and-noodles.jpg",
    cookTime: "3 horas",
    servings: 4,
    rating: 4.9,
    difficulty: "Avanzado",
  },
  {
    id: 3,
    title: "Tacos al Pastor",
    country: "México",
    image: "/tacos-al-pastor-with-pineapple-and-cilantro.jpg",
    cookTime: "30 min",
    servings: 4,
    rating: 4.7,
    difficulty: "Fácil",
  },
  {
    id: 4,
    title: "Butter Chicken",
    country: "India",
    image: "/butter-chicken-curry-with-rice-and-naan.jpg",
    cookTime: "40 min",
    servings: 4,
    rating: 4.6,
    difficulty: "Intermedio",
  },
]

export function FeaturedRecipes() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recetas <span className="text-primary">Destacadas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las recetas más populares de nuestra comunidad global de cocineros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-secondary">{recipe.country}</Badge>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {recipe.rating}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{recipe.title}</h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {recipe.cookTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {recipe.servings} personas
                    </div>
                  </div>

                  <Badge variant="outline" className="text-xs">
                    {recipe.difficulty}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
