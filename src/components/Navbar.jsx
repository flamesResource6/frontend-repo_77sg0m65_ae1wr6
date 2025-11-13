import { Menu, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-white font-semibold tracking-tight">sneeakydev</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="https://github.com/devwaleh" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2"><Github size={16}/>GitHub</a>
          <a href="https://linkedin.com/in/adewaleadegeye" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2"><Linkedin size={16}/>LinkedIn</a>
        </nav>
        <button className="sm:hidden text-white/80 hover:text-white" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}
