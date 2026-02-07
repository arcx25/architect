import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-foreground">
                ARCHITECT
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Anonymous Python marketplace with Monero escrow. All transactions
              secured via XMR multisig.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Marketplace</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/browse"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  All Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=scrapers"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Scrapers
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=bots"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Bots
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=ai-ml"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  AI / ML
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Categories</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/browse?category=automation"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=networking"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Networking
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=crypto"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Crypto
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?category=osint"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  OSINT
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Escrow</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  XMR Multisig 2/3
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Dispute Resolution
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  PGP Verified Vendors
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Canary Warrant
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            ARCHITECT. All transactions via Monero escrow. No logs. No traces.
          </p>
        </div>
      </div>
    </footer>
  )
}
