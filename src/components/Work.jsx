import { useState } from 'react'

const filters = ['All', 'Branding', 'Web', 'Marketing']

// To use your own image: put it in public/images/ and set
// image: '/images/lumen.jpg'
const projects = [
  {
    title: 'Lumen Coffee',
    category: 'Branding',
    text: 'Full visual identity for a specialty coffee roaster.',
    bg: 'from-amber-500 to-rose-600',
    image: 'https://picsum.photos/seed/lumen-coffee/800/500',
  },
  {
    title: 'Orbit Finance',
    category: 'Web',
    text: 'Dashboard and marketing site for a fintech startup.',
    bg: 'from-indigo-500 to-cyan-500',
    image: 'https://picsum.photos/seed/orbit-finance/800/500',
  },
  {
    title: 'Bloom Studio',
    category: 'Marketing',
    text: 'Social campaign that tripled engagement in two months.',
    bg: 'from-fuchsia-500 to-purple-700',
    image: 'https://picsum.photos/seed/bloom-studio/800/500',
  },
  {
    title: 'Atlas Travel',
    category: 'Web',
    text: 'Booking platform with a fast, mobile-first experience.',
    bg: 'from-emerald-500 to-teal-700',
    image: 'https://picsum.photos/seed/atlas-travel/800/500',
  },
  {
    title: 'Pulse Fitness',
    category: 'Branding',
    text: 'Rebrand and packaging for a growing fitness label.',
    bg: 'from-orange-500 to-red-600',
    image: 'https://picsum.photos/seed/pulse-fitness/800/500',
  },
  {
    title: 'Nimbus Cloud',
    category: 'Marketing',
    text: 'Launch campaign and landing pages for a SaaS product.',
    bg: 'from-sky-500 to-blue-700',
    image: 'https://picsum.photos/seed/nimbus-cloud/800/500',
  },
]

export default function Work() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Our work
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Projects we are proud of
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={
                'rounded-full px-5 py-2 text-sm font-medium transition ' +
                (active === f
                  ? 'bg-indigo-500 text-white'
                  : 'border border-white/15 text-slate-300 hover:bg-white/5')
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-indigo-400/40"
            >
              <div
                className={
                  'relative h-48 overflow-hidden bg-gradient-to-br ' + p.bg
                }
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
