export function StatsSection() {
  const stats = [
    { label: "Packages", value: "24" },
    { label: "Categories", value: "7" },
    { label: "Downloads/mo", value: "700M+" },
    { label: "Contributors", value: "10K+" },
  ]

  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
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
