import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 neon-border-subtle">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground neon-glow">
            ARCHITECT
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/browse"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Browse
          </Link>
          <Link
            href="/vendors"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Vendors
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="/create"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Sell
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/browse"
            className="hidden rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary neon-border-subtle hover:bg-primary/20 sm:inline-flex"
          >
            Enter Market
          </Link>
          {/* CSS-only mobile menu */}
          <details className="relative md:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-border bg-card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-foreground"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Menu</span>
            </summary>
            <nav className="absolute right-0 top-full z-50 mt-2 w-52 rounded-lg border border-border bg-card p-2 neon-border-subtle">
              <Link
                href="/"
                className="flex rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/browse"
                className="flex rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                Browse
              </Link>
              <Link
                href="/vendors"
                className="flex rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                Vendors
              </Link>
              <Link
                href="/faq"
                className="flex rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="/create"
                className="flex rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                Create Listing
              </Link>
              <div className="my-1 h-px bg-border" />
              <Link
                href="/browse"
                className="flex rounded-md px-3 py-2.5 text-sm font-medium text-primary hover:bg-primary/10"
              >
                Enter Market
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
