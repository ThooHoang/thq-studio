

import { useState } from "react"

const TESTIMONIALS = [
  {
    quote: "QTH Studio transformed our entire digital presence. From concept to launch, every detail was handled with precision — and the results speak for themselves.",
    name: "Sarah Mitchell",
    role: "CEO, Aether Labs",
    avatar: "https://i.pravatar.cc/40?img=11",
  },
  {
    quote: "Working with QTH was effortless. They understood our vision immediately and delivered something far beyond what we imagined. Truly world-class work.",
    name: "James Eriksen",
    role: "Founder, Noma Digital",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    quote: "The attention to detail is unmatched. Our conversion rate went up 40% after the redesign. QTH Studio is the only agency we trust with our brand.",
    name: "Mia Larsen",
    role: "CMO, Vanta Finance",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  const goTo = (index: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length)
      setVisible(true)
    }, 500)
  }

  const t = TESTIMONIALS[current]

  return (
    <section className="bg-[#0a0a0a] border-t border-white/10 px-6 py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[560px]">

      {/* Background glows */}
      <div
        className="md:absolute top-[40%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(170,119,28,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="md:absolute top-[60%] right-[15%] w-[400px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(170,119,28,0.12) 0%, transparent 70%)" }}
      />

      {/* Section label */}
      <div className="flex items-center gap-4 font-mono text-[0.68rem] tracking-[0.15em] uppercase text-white/30 mb-16 z-10">
        <span className="w-8 h-px bg-white/20 inline-block" />
        What Clients Say
        <span className="w-8 h-px bg-white/20 inline-block" />
      </div>

      {/* Quote block */}
      <div
        className="max-w-3xl w-full text-center px-4 md:px-20 z-10 transition-opacity duration-500 ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >

        {/* Quote text */}
        <p
          className="font-light italic text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.65] text-white/70 mb-12 tracking-[0.01em]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t.quote}
        </p>

        {/* Avatar pill */}
        <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full pl-2 pr-5 py-2">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-9 h-9 rounded-full object-cover"
            style={{ filter: "grayscale(20%)" }}
          />
          <div className="text-left">
            <p className="font-display font-bold text-[0.82rem] text-white leading-snug">
              {t.name}
            </p>
            <p className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-white/30">
              {t.role}
            </p>
          </div>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full border border-white/10 bg-transparent text-white/35 flex items-center justify-center cursor-none hover:border-white/30 hover:text-white transition-all duration-250 z-10"
      >
        ←
      </button>

      {/* Next arrow */}
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full border border-white/10 bg-transparent text-white/35 flex items-center justify-center cursor-none hover:border-white/30 hover:text-white transition-all duration-250 z-10"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-14 z-10">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full cursor-none transition-all duration-350 h-[6px] ${
              i === current
                ? "w-5 bg-white/55"
                : "w-[6px] bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>

    </section>
  )
}
