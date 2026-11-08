const stats = [
  { value: '120+', label: 'Projects' },
  { value: '45', label: 'Clients' },
  { value: '8', label: 'Years' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 text-center">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-slate-300">
          Digital agency for ambitious brands
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">
          We build brands that{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            stand out
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-slate-400">
          Design, development and marketing under one roof. We turn ideas
          into fast, beautiful products that grow your business.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-indigo-500 px-8 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 sm:w-auto"
          >
            Start your project
          </a>
          <a
            href="#work"
            className="w-full rounded-full border border-white/15 px-8 py-3 font-medium text-slate-200 transition hover:bg-white/5 sm:w-auto"
          >
            View our work
          </a>
        </div>
      </div>

      <dl className="relative mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-2xl font-bold text-white sm:text-3xl">{s.value}</dt>
            <dd className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
