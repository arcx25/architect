import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { FeaturedPackages } from "@/components/featured-packages"
import { CategoryGrid } from "@/components/category-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <FeaturedPackages />
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  )
}
