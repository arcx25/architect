import Link from "next/link"
import {
  getListingsByCategory,
  searchListings,
  categories,
  listings,
  type Category,
} from "@/lib/data"
import { ListingCard } from "@/components/listing-card"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Browse Listings - ARCHITECT",
  description: "Browse Python scripts, tools, bots, and packages on the ARCHITECT marketplace.",
}

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string; sort?: string }>
}) {
  const params = await searchParams
  const categorySlug = params.category || ""
  const query = params.q || ""
  const sort = params.sort || "featured"

  const categoryInfo = categories.find((c) => c.slug === categorySlug)
  const categoryName = categoryInfo?.name || "All Listings"

  let filteredListings = query
    ? searchListings(query)
    : categorySlug
      ? getListingsByCategory(categorySlug as Category)
      : [...listings]

  if (sort === "price-low") {
    filteredListings = [...filteredListings].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    )
  } else if (sort === "price-high") {
    filteredListings = [...filteredListings].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    )
  } else if (sort === "rating") {
    filteredListings = [...filteredListings].sort(
      (a, b) => b.rating - a.rating
    )
  } else if (sort === "sales") {
    filteredListings = [...filteredListings].sort(
      (a, b) => b.sales - a.sales
    )
  } else {
    filteredListings = [...filteredListings].sort(
      (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          {query ? `Results for "${query}"` : categoryName}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {query
            ? `${filteredListings.length} listing${filteredListings.length !== 1 ? "s" : ""} found`
            : categoryInfo?.description || "Browse all available Python tools and scripts"}
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <form action="/browse" method="get">
          {categorySlug && (
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
              placeholder="Search listings..."
              className="h-10 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar */}
        <nav className="w-full shrink-0 lg:w-56" aria-label="Categories">
          <h2 className="mb-3 text-sm font-semibold text-foreground">
            Categories
          </h2>
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link
                href="/browse"
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                  !categorySlug
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <span>All</span>
                <span className="text-xs text-muted-foreground">
                  {categories.reduce((acc, c) => acc + c.count, 0)}
                </span>
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/browse?category=${category.slug}`}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                    categorySlug === category.slug
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Sort */}
          <h2 className="mb-3 mt-6 text-sm font-semibold text-foreground">
            Sort By
          </h2>
          <ul className="flex flex-col gap-0.5">
            {[
              { value: "featured", label: "Featured" },
              { value: "rating", label: "Top Rated" },
              { value: "sales", label: "Most Sales" },
              { value: "price-low", label: "Price: Low" },
              { value: "price-high", label: "Price: High" },
            ].map((option) => (
              <li key={option.value}>
                <Link
                  href={`/browse?${categorySlug ? `category=${categorySlug}&` : ""}${query ? `q=${query}&` : ""}sort=${option.value}`}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm",
                    sort === option.value
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Listings grid */}
        <div className="flex-1">
          {filteredListings.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
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
                No listings found
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or browse a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
