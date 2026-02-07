import Link from "next/link"
import { getFeaturedPackages } from "@/lib/packages"
import { PackageCard } from "@/components/package-card"

export function FeaturedPackages() {
  const featured = getFeaturedPackages()

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Featured Packages
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Curated selection of popular and impactful Python packages
          </p>
        </div>
        <Link
          href="/packages"
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          View all
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </section>
  )
}
