import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getListingById,
  getListingsByCategory,
  getVendorById,
  categories,
  listings,
} from "@/lib/data"
import { ListingCard } from "@/components/listing-card"
import type { Metadata } from "next"

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const listing = getListingById(id)
  if (!listing) return { title: "Listing Not Found - ARCHITECT" }
  return {
    title: `${listing.title} - ARCHITECT`,
    description: listing.description,
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

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const listing = getListingById(id)
  if (!listing) notFound()

  const vendor = getVendorById(listing.vendorId)
  const categoryInfo = categories.find((c) => c.slug === listing.category)
  const relatedListings = getListingsByCategory(listing.category)
    .filter((l) => l.id !== listing.id)
    .slice(0, 3)

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
        {categoryInfo && (
          <>
            <span className="text-border">/</span>
            <Link
              href={`/browse?category=${categoryInfo.slug}`}
              className="hover:text-primary"
            >
              {categoryInfo.name}
            </Link>
          </>
        )}
        <span className="text-border">/</span>
        <span className="text-foreground">{listing.title}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 font-mono text-lg font-bold text-primary neon-border-subtle">
            {listing.title.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold text-foreground">
                {listing.title}
              </h1>
              {listing.featured && (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Featured
                </span>
              )}
            </div>
            <div className="mt-2 flex items-center gap-4">
              <Link
                href={`/vendor/${listing.vendorId}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                @{listing.vendor}
              </Link>
              <div className="flex items-center gap-2">
                <StarRating rating={listing.rating} />
                <span className="text-sm text-muted-foreground">
                  {listing.rating} ({listing.reviews} reviews)
                </span>
              </div>
            </div>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {listing.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* About */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">About</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {listing.longDescription}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-6 rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">Tags</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {listing.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/browse?q=${tag}`}
                  className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 hover:text-primary"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Escrow flow */}
          <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-6 neon-border">
            <h2 className="text-lg font-semibold text-foreground">
              XMR Escrow Process
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  1
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Initiate Purchase
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Send {listing.xmrPrice} to the generated multisig escrow address. Funds are locked until delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  2
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Vendor Delivers
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Once payment is confirmed (10 blocks), vendor sends the code via encrypted channel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  3
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Confirm & Release
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Review the code, confirm delivery, and funds are released. Dispute within 48h if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Price card */}
          <div className="rounded-lg border border-primary/20 bg-card p-6 neon-border">
            <div className="text-center">
              <p className="text-xs font-medium text-muted-foreground">Price</p>
              <p className="mt-1 font-mono text-3xl font-bold text-primary neon-glow">
                {listing.xmrPrice}
              </p>
            </div>
            <div className="mt-4 rounded-lg border border-border bg-secondary p-3 text-center">
              <p className="text-xs text-muted-foreground">
                Escrow address generated on purchase
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Escrow type</span>
                <span className="font-medium text-foreground">Multisig 2/3</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span className="font-medium text-foreground">Encrypted</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dispute window</span>
                <span className="font-medium text-foreground">48 hours</span>
              </div>
            </div>
          </div>

          {/* Listing stats */}
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="text-sm font-semibold text-foreground">
              Listing Info
            </h3>
            <dl className="mt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-muted-foreground">Category</dt>
                <dd>
                  <Link
                    href={`/browse?category=${listing.category}`}
                    className="text-sm font-medium text-primary hover:text-primary/80"
                  >
                    {categoryInfo?.name}
                  </Link>
                </dd>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <dt className="text-sm text-muted-foreground">Sales</dt>
                <dd className="text-sm font-medium text-foreground">
                  {listing.sales}
                </dd>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <dt className="text-sm text-muted-foreground">Listed</dt>
                <dd className="text-sm font-medium text-foreground">
                  {listing.created}
                </dd>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <dt className="text-sm text-muted-foreground">Rating</dt>
                <dd className="text-sm font-medium text-primary">
                  {listing.rating}/5.0
                </dd>
              </div>
            </dl>
          </div>

          {/* Vendor card */}
          {vendor && (
            <Link
              href={`/vendor/${vendor.id}`}
              className="rounded-lg border border-border bg-card p-5 card-hover"
            >
              <h3 className="text-sm font-semibold text-foreground">Vendor</h3>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 font-mono text-sm font-bold text-primary">
                  {vendor.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    @{vendor.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {vendor.sales} sales | {vendor.rating}/5.0
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {vendor.bio}
              </p>
            </Link>
          )}
        </div>
      </div>

      {/* Related listings */}
      {relatedListings.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-foreground">
            Related Listings
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedListings.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
