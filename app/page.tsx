import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedRecipes } from "@/components/featured-recipes"
import { CategoriesSection } from "@/components/categories-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedRecipes />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  )
}
