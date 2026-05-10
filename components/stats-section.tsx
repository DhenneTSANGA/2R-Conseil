const stats = [
  { value: "15+", label: "Années d'expérience", description: "Au service des entreprises" },
  { value: "200+", label: "Clients accompagnés", description: "PME, ETI et grands groupes" },
  { value: "98%", label: "Taux de satisfaction", description: "Mesuré chaque trimestre" },
  { value: "12", label: "Experts certifiés", description: "Comptables, auditeurs, juristes" },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="font-serif text-4xl lg:text-5xl font-semibold text-brand-green tracking-tight">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
