import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        setStatus('Message sent! I will get back to you shortly.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (e) {
      setStatus('Unable to reach server. Please email me directly at adewale@devwaleh.me')
    }
  }

  return (
    <section id="contact" className="bg-black text-zinc-300 py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-white text-2xl font-semibold">Let’s build something together.</h2>
        <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded bg-zinc-950 border border-white/10 text-white" />
          <input name="email" type="email" required placeholder="Your email" className="px-4 py-3 rounded bg-zinc-950 border border-white/10 text-white" />
          <textarea name="message" required placeholder="Tell me about your project" rows={5} className="md:col-span-2 px-4 py-3 rounded bg-zinc-950 border border-white/10 text-white" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition">Send</button>
            <a href="mailto:adewale@devwaleh.me" className="text-white hover:text-zinc-300">adewale@devwaleh.me</a>
          </div>
          {status && <p className="md:col-span-2 text-sm text-zinc-400">{status}</p>}
        </form>
      </div>
    </section>
  )
}
