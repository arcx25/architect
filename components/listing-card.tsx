import Link from "next/link"
import type { Listing } from "@/lib/data"

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${
            i < full
              ? "text-primary"
              : i === full && hasHalf
                ? "text-primary/50"
                : "text-muted"
          }`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listing/${listing.id}`}
      className="group flex flex-col rounded-lg border border-border bg-card p-5 card-hover"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-primary/20 bg-primary/5 font-mono text-sm font-bold text-primary">
            {listing.title.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
              {listing.title}
            </h3>
            <Link
              href={`/vendor/${listing.vendorId}`}
              className="text-xs text-muted-foreground hover:text-primary"
            >
              @{listing.vendor}
            </Link>
          </div>
        </div>
        {listing.featured && (
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            Featured
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {listing.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {listing.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <div className="flex items-center gap-2">
          <StarRating rating={listing.rating} />
          <span className="text-xs text-muted-foreground">
            ({listing.reviews})
          </span>
        </div>
        <span className="font-mono text-sm font-bold text-primary">
          {listing.xmrPrice}
        </span>
      </div>
    </Link>
  )
}
