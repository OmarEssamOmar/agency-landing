const links = ['Services', 'Work', 'Testimonials', 'Contact']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a
          href="#"
          className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-lg font-bold text-transparent"
        >
          Nova Agency
        </a>

        <ul className="flex gap-6 text-sm text-slate-400">
          {links.map((l) => (
            <li key={l}>
              <a
                href={'#' + l.toLowerCase()}
                className="transition hover:text-white"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Nova Agency. Demo project. All names and testimonials are sample content.
        </p>
      </div>
    </footer>
  )
}
