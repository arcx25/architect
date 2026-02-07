import Link from "next/link"
import { categories } from "@/lib/packages"
import { cn } from "@/lib/utils"

export function CategorySidebar({
  activeCategory,
}: {
  activeCategory: string
}) {
  return (
    <nav className="w-full lg:w-56 shrink-0" aria-label="Package categories">
      <h2 className="mb-3 text-sm font-semibold text-foreground">
        Filter Templates
      </h2>
      <ul className="flex flex-col gap-0.5">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={
                category.slug === "all"
                  ? "/packages"
                  : `/packages?category=${category.slug}`
              }
              className={cn(
                "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                activeCategory === category.slug
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
    </nav>
  )
}
