import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  getPackageBySlug,
  getPackagesByCategory,
  packages,
  categories,
} from "@/lib/packages"
import { PackageCard } from "@/components/package-card"
import type { Metadata } from "next"

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)
  if (!pkg) return { title: "Package Not Found" }
  return {
    title: `${pkg.name} - PyMarket`,
    description: pkg.description,
  }
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)
  if (!pkg) notFound()

  const categoryInfo = categories.find((c) => c.slug === pkg.category)
  const relatedPackages = getPackagesByCategory(pkg.category)
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-foreground">
              Packages
            </Link>
            {categoryInfo && (
              <>
                <span>/</span>
                <Link
                  href={`/packages?category=${categoryInfo.slug}`}
                  className="hover:text-foreground"
                >
                  {categoryInfo.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-foreground">{pkg.name}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-muted text-lg font-bold text-foreground">
                {pkg.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-bold text-foreground">
                    {pkg.name}
                  </h1>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    v{pkg.version}
                  </span>
                  {pkg.featured && (
                    <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-medium text-secondary">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
              </div>
            </div>
          </div>

          {/* Install command */}
          <div className="mt-8 rounded-lg border border-border bg-card p-4">
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Install
            </p>
            <div className="flex items-center gap-3 rounded-md bg-muted px-4 py-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              >
                <path
                  d="M4 17l6-6-6-6M12 19h8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <code className="font-mono text-sm text-foreground">
                {pkg.installCommand}
              </code>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  About
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {pkg.longDescription}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  Tags
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dependencies */}
              {pkg.dependencies.length > 0 && (
                <div className="mt-6 rounded-lg border border-border bg-card p-6">
                  <h2 className="text-lg font-semibold text-foreground">
                    Dependencies
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pkg.dependencies.map((dep) => (
                      <span
                        key={dep}
                        className="rounded-md border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {dep}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  Package Info
                </h3>
                <dl className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-muted-foreground">Author</dt>
                    <dd className="text-sm font-medium text-foreground">
                      {pkg.author}
                    </dd>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-muted-foreground">License</dt>
                    <dd className="text-sm font-medium text-foreground">
                      {pkg.license}
                    </dd>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-muted-foreground">Downloads</dt>
                    <dd className="text-sm font-medium text-foreground">
                      {pkg.downloads}/mo
                    </dd>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-muted-foreground">Updated</dt>
                    <dd className="text-sm font-medium text-foreground">
                      {pkg.lastUpdated}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  Python Versions
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {pkg.pythonVersions.map((version) => (
                    <span
                      key={version}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {version}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">
                  Links
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  <li>
                    <a
                      href={pkg.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Repository
                    </a>
                  </li>
                  <li>
                    <a
                      href={pkg.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related packages */}
          {relatedPackages.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-6 text-xl font-bold text-foreground">
                Related Packages
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPackages.map((relPkg) => (
                  <PackageCard key={relPkg.slug} pkg={relPkg} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
