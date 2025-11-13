import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
        >
          Hi, I’m Adewale — Backend Engineer building scalable systems that power real impact.
        </motion.h1>
        <TypingLine />
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition">View Projects</a>
          <a href="/Adewale_Resume.pdf" className="px-5 py-2.5 rounded-md bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

function TypingLine() {
  const words = ['Distributed systems', 'Financial APIs', 'Developer tooling']
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-6 text-zinc-300 text-lg sm:text-xl"
    >
      <span className="text-zinc-400">Focus areas: </span>
      <span className="inline-flex overflow-hidden align-bottom">
        <Typing words={words} />
      </span>
    </motion.p>
  )
}

function Typing({ words }) {
  // simple CSS typing effect by cycling words
  return (
    <span className="relative">
      <span className="animate-[typing_3s_steps(14)_infinite,blink_1s_step-end_infinite] whitespace-nowrap border-r-2 border-zinc-400 pr-1">
        {words[0]}
      </span>
      <style>
        {`@keyframes typing { 0%{ width: 0 } 50%{ width: 100% } 100%{ width: 0 } }
          @keyframes blink { 50% { border-color: transparent } }`}
      </style>
    </span>
  )
}
