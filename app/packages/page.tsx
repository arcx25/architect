import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategorySidebar } from "@/components/category-sidebar"
import { PackageCard } from "@/components/package-card"
import {
  getPackagesByCategory,
  searchPackages,
  categories,
} from "@/lib/packages"

export default async function PackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>
}) {
  const params = await searchParams
  const categorySlug = params.category || "all"
  const query = params.q || ""

  const categoryInfo = categories.find((c) => c.slug === categorySlug)
  const categoryName = categoryInfo?.name || "All Packages"

  const filteredPackages = query
    ? searchPackages(query)
    : getPackagesByCategory(categorySlug)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              {query ? `Search results for "${query}"` : categoryName}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {query
                ? `${filteredPackages.length} package${filteredPackages.length !== 1 ? "s" : ""} found`
                : categoryInfo?.description || "Browse all available packages"}
            </p>
          </div>

          <div className="mb-6">
            <form action="/packages" method="get">
              {categorySlug !== "all" && (
                <input type="hidden" name="category" value={categorySlug} />
              )}
              <div className="relative max-w-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Search packages..."
                  className="h-10 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <CategorySidebar activeCategory={categorySlug} />
            <div className="flex-1">
              {filteredPackages.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredPackages.map((pkg) => (
                    <PackageCard key={pkg.slug} pkg={pkg} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card px-6 py-16 text-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-10 w-10 text-muted-foreground"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    No packages found
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Try adjusting your search or browse a different category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
