export default function Experience() {
  return (
    <section id="experience" className="bg-black text-zinc-300 py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-white text-2xl font-semibold">Experience</h2>
        <div className="mt-8 grid gap-6">
          <div className="rounded-lg border border-white/10 p-5 bg-zinc-950">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium">Backend Engineer — Chrisborough Solutions</h3>
              <span className="text-sm text-zinc-400">2024–Present</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2">Built fintech microservices and payment engines integrated with banks like Zenith, Ramp, and Monnify.</p>
          </div>
          <div className="rounded-lg border border-white/10 p-5 bg-zinc-950">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium">Backend Engineer — Uniswitch Technologies</h3>
              <span className="text-sm text-zinc-400">2023–2024</span>
            </div>
            <p className="text-sm text-zinc-400 mt-2">Built fintech microservices and payment engines integrated with banks like Zenith, Ramp, and Monnify.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
