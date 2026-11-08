const services = [
  {
    icon: '🎨',
    title: 'Brand Identity',
    text: 'Logos, color systems and guidelines that make your brand instantly recognizable.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    text: 'Fast, responsive websites and web apps built with modern tools.',
  },
  {
    icon: '📱',
    title: 'UI/UX Design',
    text: 'Clean interfaces and smooth user flows that people enjoy using.',
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    text: 'Campaigns and content that bring the right audience to your door.',
  },
  {
    icon: '🔍',
    title: 'SEO',
    text: 'Technical and content optimization to rank higher and get found.',
  },
  {
    icon: '🛠️',
    title: 'Maintenance',
    text: 'Ongoing updates, monitoring and support so everything keeps running.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything your brand needs
          </h2>
          <p className="mt-4 text-slate-400">
            From the first sketch to the final launch, we cover the full journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
