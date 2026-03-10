import { useState, useEffect } from "react"
import {client} from "../lib/sanityClient"
import { urlFor } from "../lib/image"

type Testimonial = {
  _id: string
  quote: string
  name: string
  role: string
  avatar?: any
}
const query = `*[_type == "testimonial"] | order(order asc, _createdAt asc)`

 
export default function Testimonials() {

  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const [testimonials,setTestimonials] = useState<Testimonial[]>([])
  
  useEffect(()=> {
    client
      .fetch<Testimonial[]>(query)
      .then((res) => {
        setTestimonials(res)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Failed to fetch testimonials from Sanity:", err)
      })
  },[])

  // Keep `current` index in range whenever the testimonials array changes
  useEffect(() => {
    if (testimonials.length === 0) {
      setCurrent(0)
      return
    }
    setCurrent((c) => Math.min(c, testimonials.length - 1))
  }, [testimonials.length])

  const goTo = (index: number) => {
    if (testimonials.length === 0) return
    setVisible(false)
    setTimeout(() => {
      setCurrent((index + testimonials.length) % testimonials.length)
      setVisible(true)
    }, 500)
  }

  if (testimonials.length===0){
    return null
  }

  const t = testimonials[current]
  if (!t) {
    return null
  }

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
        <p
          className="font-light italic text-[clamp(1.5rem,2.8vw,2.1rem)] leading-[1.65] text-white/70 mb-12 tracking-[0.01em]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t.quote}
        </p>

        <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full pl-2 pr-5 py-2">
            <img
              src={
                t.avatar
                  ? urlFor(t.avatar).width(80).height(80).fit("crop").url()
                  : "https://via.placeholder.com/80" // optional fallback
              }
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

      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full border border-white/10 bg-transparent text-white/35 flex items-center justify-center cursor-none hover:border-white/30 hover:text-white transition-all duration-250 z-10"
      >
        ←
      </button>

      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full border border-white/10 bg-transparent text-white/35 flex items-center justify-center cursor-none hover:border-white/30 hover:text-white transition-all duration-250 z-10"
      >
        →
      </button>

      <div className="flex items-center gap-2 mt-14 z-10">
        {testimonials.map((_, i) => (
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
