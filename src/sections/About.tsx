import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import {
  motionConfig,
  fadeInLeftSmall,
  staggerContainer,
} from "../lib/motion"

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.70 })

  return (
    <section id="about" ref={ref} className="border-t border-white/10 light:border-black/10 px-8 md:px-16 pt-28">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: motionConfig.duration, ease: motionConfig.ease }}
        className="flex items-center gap-4 font-mono text-xs uppercase text-white/30 light:text-black/30 mb-20"
      >
        <span className="w-8 h-px bg-white/20 light:bg-black/20 inline-block" />
        Who We Are
      </motion.div>

      {/* Top row — arrow + headline */}
      <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: motionConfig.duration, ease: motionConfig.ease }} className="flex items-center gap-6">
          <div className="border border-white/20 light:border-black/20 rounded-full w-16 h-16 flex items-center justify-center shrink-0 hover:border-yellow-100 transition-colors duration-300">
            <ArrowDownRight size={24} className="text-white light:text-[#0a0a0a] hover:translate-x-1 transition-all duration-200 ease-in" />
          </div>
          <p className="font-mono text-xs text-white/40 light:text-black/40 max-w-xs">
            A creative agency based in Denmark — building digital products that actually perform.
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: motionConfig.duration, ease: motionConfig.ease }}
          className="font-display font-extrabold text-7xl text-white light:text-[#0a0a0a] md:text-right"
        >
          What makes us<br />
          <span className="font-serif font-normal italic bg-gradient-to-r from-[#AA771C] via-[#FFED94] to-[#AA771C] bg-clip-text text-transparent">special.</span>
        </motion.h2>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 light:bg-black/10 mb-24" />

      {/* 3 column grid */}
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 mb-24"
      >
        <motion.div variants={fadeInLeftSmall} className="flex flex-col gap-6 md:pr-12">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-white/25 light:text-black/25">01 — What</span>
          <h3 className="font-display font-normal text-xl text-white light:text-[#0a0a0a] tracking-[-0.02em]">
            Our <span className="font-serif italic font-bold bg-[#AA771C] text-white px-1">purpose</span>
          </h3>
          <p className="font-mono text-[0.8rem] leading-[1.9] text-white/40 light:text-black/40">
            To deliver a tangible impact on our clients' businesses. We exist as a partner, crafting strategies that are aligned with your goals — not ours.
          </p>
        </motion.div>

        <motion.div variants={fadeInLeftSmall} className="flex flex-col gap-6 md:border-l md:border-white/10 light:md:border-black/10 md:px-12">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-white/25 light:text-black/25">02 — How</span>
          <h3 className="font-display font-normal text-xl text-white light:text-[#0a0a0a] tracking-[-0.02em]">
            Our <span className="font-serif italic font-normal text-white bg-[#AA771C] px-1">approach</span>
          </h3>
          <p className="font-mono text-[0.8rem] leading-[1.9] text-white/40 light:text-black/40">
            Every campaign and project has clear results and clear measures. We are transparent throughout — no surprises, no fluff. Just work that moves the needle.
          </p>
        </motion.div>

        <motion.div variants={fadeInLeftSmall} className="flex flex-col gap-6 md:border-l md:border-white/10 light:md:border-black/10 md:pl-12">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-white/25 light:text-black/25">03 — Why</span>
          <h3 className="font-display font-normal text-xl text-white light:text-[#0a0a0a] tracking-[-0.02em]">
            Our <span className="font-serif italic font-normal text-white bg-[#AA771C] px-1">belief</span>
          </h3>
          <p className="font-mono text-[0.8rem] leading-[1.9] text-white/40 light:text-black/40">
            Every company performs best online when strategy meets craft. We help businesses find the most effective path to get there — and stay there.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
