import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-bold text-muted-foreground">404</p>
          <h1 className="mt-4 text-2xl font-bold text-foreground">
            Page not found
          </h1>
          <p className="mt-2 text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
