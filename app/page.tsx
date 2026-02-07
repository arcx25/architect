import Link from "next/link"
import { getFeaturedListings, categories, listings } from "@/lib/data"
import { ListingCard } from "@/components/listing-card"

function Hero() {
  const totalListings = listings.length
  const totalSales = listings.reduce((acc, l) => acc + l.sales, 0)

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(338_100%_59%/0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 neon-border-subtle">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              XMR Escrow Protected
            </span>
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="gradient-text">Anonymous</span> Python
            Marketplace
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Buy and sell Python scripts, tools, bots, and packages with Monero
            escrow. No accounts. No traces. Just code.
          </p>
          <div className="mt-8">
            <form action="/browse" method="get">
              <div className="mx-auto flex max-w-xl items-center gap-2">
                <div className="relative flex-1">
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
                    placeholder="Search listings..."
                    className="h-12 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 rounded-lg border border-primary/40 bg-primary/10 px-6 text-sm font-medium text-primary neon-border-subtle hover:bg-primary/20"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground">Popular:</span>
            {["scrapers", "bots", "osint", "automation"].map((cat) => (
              <Link
                key={cat}
                href={`/browse?category=${cat}`}
                className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 hover:text-primary"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  const totalSales = listings.reduce((acc, l) => acc + l.sales, 0)
  const stats = [
    { label: "Listings", value: String(listings.length) },
    { label: "Categories", value: String(categories.length) },
    { label: "Total Sales", value: totalSales.toLocaleString() },
    { label: "Escrow Type", value: "XMR 2/3" },
  ]

  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary neon-glow">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedListings() {
  const featured = getFeaturedListings()

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Featured Listings
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Top-rated tools hand-picked by the community
          </p>
        </div>
        <Link
          href="/browse"
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          View all
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  )
}

const categoryIcons: Record<string, string> = {
  scrapers:
    "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  bots:
    "M12 2a10 10 0 110 20 10 10 0 010-20zm0 6a4 4 0 100 8 4 4 0 000-8z",
  exploits:
    "M13 10V3L4 14h7v7l9-11h-7z",
  automation:
    "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z",
  "ai-ml":
    "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  networking:
    "M22 12h-4l-3 9L9 3l-3 9H2",
  crypto:
    "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  osint:
    "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z",
}

function CategoryGrid() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Browse by Category
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Find tools organized by purpose
            </p>
          </div>
          <Link
            href="/browse"
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/browse?category=${category.slug}`}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 card-hover"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/5">
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
                  {category.count} listings
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function EscrowBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center neon-border md:p-12">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="mx-auto h-10 w-10 text-primary"
          aria-hidden="true"
        >
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-foreground">
          XMR Multisig Escrow
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Every transaction is protected by 2-of-3 Monero multisig escrow.
          Funds are held securely until the buyer confirms delivery. Disputes
          are mediated by platform arbitrators.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-semibold text-primary">1. Fund Escrow</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Buyer sends XMR to the multisig escrow address
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-semibold text-primary">2. Deliver Code</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Vendor delivers the Python package to buyer
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-semibold text-primary">3. Release Funds</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Buyer confirms and funds are released to vendor
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedListings />
      <EscrowBanner />
      <CategoryGrid />
    </>
  )
}
