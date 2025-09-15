import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Entrantes",
    icon: "🥗",
    count: 450,
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Platos Principales",
    icon: "🍖",
    count: 1200,
    color: "bg-red-100 text-red-800",
  },
  {
    name: "Postres",
    icon: "🍰",
    count: 800,
    color: "bg-pink-100 text-pink-800",
  },
  {
    name: "Bebidas",
    icon: "🍹",
    count: 300,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Vegetariano",
    icon: "🥬",
    count: 650,
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Mariscos",
    icon: "🦐",
    count: 400,
    color: "bg-cyan-100 text-cyan-800",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explora por <span className="text-primary">Categorías</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas navegando por nuestras categorías organizadas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                  {category.count} recetas
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
