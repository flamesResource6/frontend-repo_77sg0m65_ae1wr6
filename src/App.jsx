import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NowPlaying from './components/NowPlaying'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Admin from './components/Admin'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-4">
          <NowPlaying />
        </div>
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Admin />
      </main>
      <footer className="border-t border-white/10 bg-black/80 text-zinc-400 text-sm">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Abdulrahman Adegeye (Adewale) — sneeakydev</p>
          <a href="/api/projects" target="_blank" rel="noreferrer" className="hover:text-white">API: /api/projects</a>
        </div>
      </footer>
    </div>
  )
}

export default App
