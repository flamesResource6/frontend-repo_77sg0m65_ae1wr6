import { useEffect, useState } from 'react'

export default function Admin() {
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({ name: '', description: '', stack: '', github: '', live: '', featured: false, order: 0 })
  const [token, setToken] = useState('')

  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    const res = await fetch(`${base}/api/projects`)
    setProjects(await res.json())
  }

  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault()
    const payload = { ...form, stack: form.stack.split(',').map(s => s.trim()).filter(Boolean) }
    await fetch(`${base}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(payload)
    })
    setForm({ name: '', description: '', stack: '', github: '', live: '', featured: false, order: 0 })
    await load()
  }

  const remove = async (id) => {
    await fetch(`${base}/api/projects/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    await load()
  }

  return (
    <section className="bg-black text-zinc-300 py-20 border-t border-white/10" id="admin">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-white text-2xl font-semibold">Admin</h2>
        <p className="text-sm text-zinc-500 mt-1">Minimal editor for portfolio items. Provide your admin token.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <form onSubmit={submit} className="md:col-span-1 space-y-3">
            <input value={token} onChange={e=>setToken(e.target.value)} placeholder="Admin token" className="w-full px-3 py-2 rounded bg-zinc-950 border border-white/10 text-white" />
            <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Name" className="w-full px-3 py-2 rounded bg-zinc-950 border border-white/10 text-white" />
            <textarea value={form.description} onChange={e=>setForm({...form, description: e.target.value})} placeholder="Description" className="w-full px-3 py-2 rounded bg-zinc-950 border border-white/10 text-white" rows={4} />
            <input value={form.stack} onChange={e=>setForm({...form, stack: e.target.value})} placeholder="Stack (comma separated)" className="w-full px-3 py-2 rounded bg-zinc-950 border border-white/10 text-white" />
            <input value={form.github} onChange={e=>setForm({...form, github: e.target.value})} placeholder="GitHub URL" className="w-full px-3 py-2 rounded bg-zinc-950 border border-white/10 text-white" />
            <input value={form.live} onChange={e=>setForm({...form, live: e.target.value})} placeholder="Live URL" className="w-full px-3 py-2 rounded bg-zinc-950 border border-white/10 text-white" />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.featured} onChange={e=>setForm({...form, featured: e.target.checked})} /> Featured</label>
              <input type="number" value={form.order} onChange={e=>setForm({...form, order: parseInt(e.target.value||'0')})} placeholder="Order" className="px-3 py-2 rounded bg-zinc-950 border border-white/10 text-white w-24" />
            </div>
            <button className="px-4 py-2 rounded bg-white text-black font-medium">Add Project</button>
          </form>
          <div className="md:col-span-2 grid gap-4">
            {projects.map(p => (
              <div key={p._id} className="flex items-start justify-between border border-white/10 rounded p-4 bg-zinc-950">
                <div>
                  <h3 className="text-white font-medium">{p.name}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{p.description}</p>
                </div>
                <button onClick={()=>remove(p._id)} className="text-red-400 hover:text-red-300">Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
