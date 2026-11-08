const reviews = [
  {
    name: 'Sara Collins',
    role: 'Founder, Lumen Coffee',
    initials: 'SC',
    text: 'They understood our vision from day one. The new brand doubled our online orders within weeks.',
  },
  {
    name: 'Daniel Park',
    role: 'CEO, Orbit Finance',
    initials: 'DP',
    text: 'Fast, communicative and detail-obsessed. Our new site loads instantly and converts far better.',
  },
  {
    name: 'Maya Alvarez',
    role: 'Marketing Lead, Bloom Studio',
    initials: 'MA',
    text: 'The campaign exceeded every target we set. A genuinely creative and reliable team.',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What our clients say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-semibold">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
