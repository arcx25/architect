import { notFound } from "next/navigation"
import Link from "next/link"
import { getVendorById, getVendorListings, vendors } from "@/lib/data"
import { ListingCard } from "@/components/listing-card"
import type { Metadata } from "next"

export function generateStaticParams() {
  return vendors.map((v) => ({ id: v.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const vendor = getVendorById(id)
  if (!vendor) return { title: "Vendor Not Found - ARCHITECT" }
  return {
    title: `@${vendor.name} - ARCHITECT`,
    description: vendor.bio,
  }
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${
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

export default async function VendorPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const vendor = getVendorById(id)
  if (!vendor) notFound()

  const vendorListings = getVendorListings(vendor.id)

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Breadcrumbs */}
      <nav
        className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span className="text-border">/</span>
        <Link href="/browse" className="hover:text-primary">
          Browse
        </Link>
        <span className="text-border">/</span>
        <span className="text-foreground">@{vendor.name}</span>
      </nav>

      {/* Vendor header */}
      <div className="rounded-lg border border-border bg-card p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 font-mono text-2xl font-bold text-primary neon-border-subtle">
            {vendor.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-3xl font-bold text-foreground">
                @{vendor.name}
              </h1>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                PGP Verified
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {vendor.bio}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <StarRating rating={vendor.rating} />
                <span>
                  {vendor.rating} ({vendor.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{vendor.sales} sales</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>Joined {vendor.joined}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PGP Key */}
      <div className="mt-6 rounded-lg border border-border bg-card p-6">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-foreground hover:text-primary">
            PGP Public Key
          </summary>
          <pre className="mt-3 overflow-x-auto rounded-md bg-secondary p-4 font-mono text-xs text-muted-foreground">
            {vendor.pgpKey}
          </pre>
        </details>
      </div>

      {/* Vendor listings */}
      <section className="mt-10">
        <h2 className="mb-6 text-xl font-bold text-foreground">
          Listings by @{vendor.name}
          <span className="ml-2 text-base font-normal text-muted-foreground">
            ({vendorListings.length})
          </span>
        </h2>
        {vendorListings.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vendorListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-card px-6 py-12 text-center">
            <p className="text-muted-foreground">
              No listings from this vendor yet.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
