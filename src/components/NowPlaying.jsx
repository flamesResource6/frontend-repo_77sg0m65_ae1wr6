import { useEffect, useState } from 'react'

export default function NowPlaying() {
  const [song, setSong] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/now-playing`)
        const data = await res.json()
        setSong(data)
      } catch (e) {
        setSong({ isPlaying: false })
      }
    }
    load()
    const id = setInterval(load, 30000)
    return () => clearInterval(id)
  }, [])

  if (!song) return null

  return (
    <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-950/70 px-4 py-2 text-sm text-zinc-300">
      <span className="relative h-2 w-2 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-green-400/60 before:animate-ping rounded-full bg-green-500" />
      {song.isPlaying ? (
        <span>Now Playing: <strong className="text-white">{song.title}</strong> — {song.artist}</span>
      ) : (
        <span>Not playing on Spotify</span>
      )}
    </div>
  )
}
