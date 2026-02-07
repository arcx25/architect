import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-primary-foreground"
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
                PyMarket
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The modern marketplace for discovering and exploring Python
              packages.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Browse</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/packages"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  All Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=web-frameworks"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Web Frameworks
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=data-science"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=machine-learning"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Machine Learning
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Categories
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/packages?category=devops"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  DevOps
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=testing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Testing
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=cli-tools"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  CLI Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=database"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Database
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Resources
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <span className="text-sm text-muted-foreground">
                  Documentation
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  API Reference
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Community
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            PyMarket. Built for the Python community.
          </p>
        </div>
      </div>
    </footer>
  )
}
