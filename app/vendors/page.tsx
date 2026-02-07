import Link from "next/link"
import { vendors, getVendorListings } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vendors - ARCHITECT",
  description: "Browse verified vendors on the ARCHITECT XMR marketplace.",
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${i < full ? "text-primary" : "text-muted"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

export default function VendorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Vendors</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          PGP-verified vendors on the ARCHITECT marketplace
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((vendor) => {
          const listingCount = getVendorListings(vendor.id).length
          return (
            <Link
              key={vendor.id}
              href={`/vendor/${vendor.id}`}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 card-hover"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 font-mono text-sm font-bold text-primary">
                  {vendor.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground group-hover:text-primary">
                    @{vendor.name}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Joined {vendor.joined}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {vendor.bio}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-2">
                  <StarRating rating={vendor.rating} />
                  <span className="text-xs text-muted-foreground">
                    ({vendor.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{vendor.sales} sales</span>
                  <span>{listingCount} listing{listingCount !== 1 ? "s" : ""}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
