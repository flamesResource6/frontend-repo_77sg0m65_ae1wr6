import { useEffect, useState } from 'react'
import { Github } from 'lucide-react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        // fallback static
        setProjects([
          { _id: '1', name: 'Sarepay', description: 'Multi-tenant payment processing system for merchants.', stack: ['Laravel','MySQL','Redis','Docker','AWS'], github: 'https://github.com/devwaleh/sarepay' },
          { _id: '2', name: 'Piper Backoffice', description: 'Admin dashboard for transaction monitoring and settlements.', stack: ['Laravel','MySQL','Redis'], github: 'https://github.com/devwaleh/piper-backoffice' },
          { _id: '3', name: 'Gridman', description: 'Distributed microservice for real-time wallet transactions.', stack: ['Node.js','Express','MongoDB'], github: 'https://github.com/devwaleh/gridman' },
          { _id: '4', name: 'Monitraka', description: 'AI-powered transaction anomaly detector.', stack: ['Python','FastAPI','Redis'], github: 'https://github.com/devwaleh/monitraka' }
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="bg-black text-white py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="text-zinc-400 mt-2">Selected work with real-world impact.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-zinc-400">Loading projects...</p>
          ) : (
            projects.map((p) => (
              <article key={p._id} className="group rounded-lg border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 hover:border-white/20 transition">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white"><Github size={18}/></a>
                  )}
                </div>
                <p className="mt-2 text-sm text-zinc-400 leading-6">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.stack || []).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-white/10">{tag}</span>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
