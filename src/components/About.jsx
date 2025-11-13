import { Github, Linkedin } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative bg-black text-zinc-300 py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-white text-2xl font-semibold">About</h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Backend Engineer passionate about distributed systems, financial APIs, and developer tooling. I design and build reliable services, optimize performance, and deliver secure integrations.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://github.com/devwaleh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-zinc-300"><Github size={18}/> GitHub</a>
            <a href="https://linkedin.com/in/adewaleadegeye" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-zinc-300"><Linkedin size={18}/> LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-medium">Skills</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {['PHP','Laravel','MySQL','Docker','Redis','AWS','Node.js','REST','Microservices'].map(s => (
              <li key={s} className="px-3 py-2 bg-zinc-900 rounded border border-white/10 text-zinc-200">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
