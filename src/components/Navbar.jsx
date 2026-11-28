import { useState } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={"fixed inset-x-0 top-0 z-50 border-b border-white/10 " + (open ? "bg-slate-950" : "bg-slate-950/70 backdrop-blur")}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-xl font-bold text-transparent"
        >
          Nova Agency
        </a>

        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 md:block"
        >
          Start a project
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="space-y-4 border-t border-white/10 px-6 py-6 text-slate-300 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-indigo-500 px-5 py-2 text-white"
            >
              Start a project
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
