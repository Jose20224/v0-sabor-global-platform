import { Header } from "@/components/header"
import { RecipeSection } from "@/components/recipes/recipe-section"

const dessertRecipes = [
  {
    id: 1,
    title: "Tiramisú Clásico Italiano",
    image: "/tiramisu-classic-italian-dessert.jpg",
    time: "4 horas",
    difficulty: "Intermedio",
    rating: 4.8,
    description: "El postre italiano más famoso con café, mascarpone y cacao",
  },
  {
    id: 2,
    title: "Cheesecake de Frutos Rojos",
    image: "/cheesecake-with-mixed-berries.jpg",
    time: "6 horas",
    difficulty: "Intermedio",
    rating: 4.7,
    description: "Cremoso cheesecake coronado con frutos rojos frescos",
  },
  {
    id: 3,
    title: "Crème Brûlée Francesa",
    image: "/creme-brulee-french-dessert.jpg",
    time: "3 horas",
    difficulty: "Avanzado",
    rating: 4.9,
    description: "Elegante postre francés con crema y azúcar caramelizada",
  },
]

const familyRecipes = [
  {
    id: 4,
    title: "Paella Valenciana Tradicional",
    image: "/paella-valenciana-with-saffron-rice-and-seafood.jpg",
    time: "1 hora",
    difficulty: "Intermedio",
    rating: 4.8,
    description: "Auténtica paella española para 6-8 personas con azafrán",
  },
  {
    id: 5,
    title: "Lasaña Boloñesa Familiar",
    image: "/lasagna-bolognese-family-size.jpg",
    time: "2 horas",
    difficulty: "Intermedio",
    rating: 4.6,
    description: "Lasaña italiana tradicional perfecta para toda la familia",
  },
  {
    id: 6,
    title: "Pollo al Curry para 8 Personas",
    image: "/chicken-curry-for-large-family.jpg",
    time: "45 min",
    difficulty: "Fácil",
    rating: 4.7,
    description: "Aromático curry de pollo con especias y leche de coco",
  },
]

const singleRecipes = [
  {
    id: 7,
    title: "Pasta Carbonara Individual",
    image: "/pasta-carbonara-single-serving.jpg",
    time: "15 min",
    difficulty: "Fácil",
    rating: 4.5,
    description: "Clásica carbonara italiana perfecta para una persona",
  },
  {
    id: 8,
    title: "Ensalada César Personal",
    image: "/caesar-salad-single-portion.jpg",
    time: "10 min",
    difficulty: "Fácil",
    rating: 4.4,
    description: "Fresca ensalada césar con pollo y crutones caseros",
  },
  {
    id: 9,
    title: "Salmón a la Plancha Individual",
    image: "/grilled-salmon-single-serving.jpg",
    time: "20 min",
    difficulty: "Fácil",
    rating: 4.6,
    description: "Salmón jugoso con vegetales al vapor para una persona",
  },
]

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Nuestras Recetas</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre una selección cuidadosa de recetas organizadas por categorías. Desde postres irresistibles hasta
            comidas familiares y platos individuales.
          </p>
        </div>

        {/* Recipe Sections */}
        <div className="space-y-16">
          <RecipeSection
            title="Postres Deliciosos"
            subtitle="Endulza tu día con estos postres irresistibles"
            recipes={dessertRecipes}
            sectionId="desserts"
          />

          <RecipeSection
            title="Comidas para Compartir"
            subtitle="Recetas perfectas para reuniones familiares y con amigos"
            recipes={familyRecipes}
            sectionId="family"
          />

          <RecipeSection
            title="Comida Sencilla Individual"
            subtitle="Platos rápidos y deliciosos para una persona"
            recipes={singleRecipes}
            sectionId="single"
          />
        </div>
      </main>
    </div>
  )
}
