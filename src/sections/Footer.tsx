import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { LINKS } from "../project"
import { motionConfig, fadeIn, staggerContainer } from "../lib/motion"

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.70 })

  return (
    <footer ref={ref} className="bg-[#0a0a0a] light:bg-[#f5f4f1] border-t border-white/[0.08] light:border-black/[0.08] overflow-hidden">

      {/* Top content */}
      <div className="px-8 md:px-16 pt-20 pb-16 grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 items-start">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
          <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-white/20 light:text-black/20 border border-white/10 light:border-black/10 px-3 py-1.5 rounded-full w-fit">
            Web Design Agency
          </span>
          <p className="font-mono text-[0.78rem] leading-[1.9] text-white/30 light:text-black/30 max-w-[240px] mt-2">
            Transform ideas into impactful digital experiences that captivate your audience and fuel business growth.
          </p>
          <p className="font-mono text-[0.62rem] text-white/[0.18] light:text-black/[0.18] mt-6">
            © {new Date().getFullYear()} THQ Studio. All rights reserved.
          </p>
        </div>

        {/* Link columns */}
        <motion.div
          style={{ display: "contents" }}
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(LINKS).map(([title, links]) => (
            <motion.div key={title} variants={fadeIn}>
              <span className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/[0.18] light:text-black/[0.18] mb-5 block">
                {title}
              </span>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-display text-[0.95rem] text-white/40 light:text-black/40 mb-2.5 no-underline cursor-none hover:text-white light:hover:text-[#0a0a0a] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Big text — slides in from left */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: motionConfig.durationLong, delay: 0.15, ease: motionConfig.ease }}
        className="px-12 pt-6 overflow-hidden"
      >
        <p
          className="font-display font-extrabold whitespace-nowrap select-none pointer-events-none leading-[0.9] tracking-[-0.03em] text-white/[0.07] light:text-black/[0.07]"
          style={{
            fontSize: "clamp(5rem, 17vw, 17rem)",
            WebkitMaskImage: "linear-gradient(to right, black 15%, transparent 70%)",
            maskImage: "linear-gradient(to right, black 15%, transparent 70%)",
          }}
        >
          THQ STUDIO.
        </p>
      </motion.div>
    </footer>
  )
}
