import Link from "next/link"
import { categories } from "@/lib/packages"

const categoryIcons: Record<string, string> = {
  "web-frameworks": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "data-science": "M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3",
  "machine-learning": "M12 2a10 10 0 110 20 10 10 0 010-20zm0 6a4 4 0 100 8 4 4 0 000-8z",
  devops: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z",
  testing: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
  "cli-tools": "M4 17l6-6-6-6M12 19h8",
  database: "M12 2C6.5 2 2 4.2 2 7v10c0 2.8 4.5 5 10 5s10-2.2 10-5V7c0-2.8-4.5-5-10-5z",
}

export function CategoryGrid() {
  const filteredCategories = categories.filter((c) => c.slug !== "all")

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Browse by Category
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore packages organized by use case
          </p>
        </div>
        <Link
          href="/packages"
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          View all
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/packages?category=${category.slug}`}
            className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              >
                <path
                  d={categoryIcons[category.slug] || "M12 2L2 7l10 5 10-5-10-5z"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.count} packages
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
