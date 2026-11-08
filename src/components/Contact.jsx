import { useState } from 'react'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [data, setData] = useState(initial)
  const [sent, setSent] = useState(false)

  const onChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to a real service (Formspree, Netlify Forms, your API)
    console.log('Form data:', data)
    setSent(true)
    setData(initial)
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-400'

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let’s build something great together
          </h2>
          <p className="mt-4 max-w-md text-slate-400">
            Tell us about your project and we will get back to you within one
            business day.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-300">
            <li>📧 hello@novaagency.com</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>📍 123 Creative Street, Your City</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
        >
          <input
            name="name"
            value={data.name}
            onChange={onChange}
            required
            placeholder="Your name"
            className={field}
          />
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={onChange}
            required
            placeholder="Email address"
            className={field}
          />
          <textarea
            name="message"
            value={data.message}
            onChange={onChange}
            required
            rows={5}
            placeholder="Tell us about your project"
            className={field}
          />
          <button
            type="submit"
            className="w-full rounded-full bg-indigo-500 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
          >
            Send message
          </button>

          {sent && (
            <p className="rounded-xl bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-300">
              Thanks! Your message has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
