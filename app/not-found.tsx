import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-20">
      <div className="text-center">
        <p className="font-mono text-6xl font-bold text-primary neon-glow">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          Listing not found
        </h1>
        <p className="mt-2 text-muted-foreground">
          This page does not exist or has been removed.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
          >
            Home
          </Link>
          <Link
            href="/browse"
            className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary neon-border-subtle hover:bg-primary/20"
          >
            Browse Market
          </Link>
        </div>
      </div>
    </div>
  )
}
