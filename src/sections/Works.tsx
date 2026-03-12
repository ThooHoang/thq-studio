import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "../components/ui/ProjectCard"
import ThqCard from "../components/ui/ThqCard"
import { projects } from "../project"
import {
  motionConfig,
  fadeUpSmall,
  scaleUp,
  staggerContainer,
} from "../lib/motion"

export default function Works() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.70 })

  return (
    <section id="works" ref={ref} className="bg-[#0a0a0a] light:bg-[#f5f4f1] border-t border-white/10 light:border-black/10 px-8 md:px-16 py-28">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: motionConfig.duration, ease: motionConfig.ease }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
      >
        <div>
          <div className="flex items-center gap-4 font-mono text-[0.68rem] tracking-[0.15em] uppercase text-white/30 light:text-black/30 mb-6">
            <span className="w-8 h-px bg-white/20 light:bg-black/20 inline-block" />
            Selected Work
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.03em] text-white light:text-[#0a0a0a]">
            Our <span
              className="font-serif font-normal italic bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #AA771C, #FFED94, #AA771C)" }}
            >
              projects.
            </span>
          </h2>
        </div>
        <p className="font-mono text-[0.8rem] leading-[1.9] text-white/25 light:text-black/25 max-w-xs md:text-right">
          Hover a card to preview the project. Click to explore.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        variants={staggerContainer(0.08, 0.12)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        style={{ gridTemplateRows: "300px 300px" }}
      >

        {projects.slice(0, 1).map((project) => (
          <motion.div
            key={project.title}
            variants={fadeUpSmall}
            className="h-full min-h-0"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

        {/* Center THQ card */}
        <motion.div variants={scaleUp} className="h-full min-h-0 md:row-span-2">
          <ThqCard />
        </motion.div>

        {/* Remaining projects to the right / bottom */}
        {projects.slice(1).map((project) => (
          <motion.div
            key={project.title}
            variants={fadeUpSmall}
            className="h-full min-h-0"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="flex justify-between items-center mt-8 flex-wrap gap-6">
        <p className="font-mono text-[0.7rem] uppercase text-white/20 light:text-black/20">
          4 projects shown — more on request
        </p>
        <button className="font-mono text-[0.72rem] uppercase text-white/40 light:text-black/40 border border-white/10 light:border-black/10 rounded-full px-6 py-3 flex items-center gap-3 cursor-none hover:border-white/30 light:hover:border-black/30 hover:text-white/70 light:hover:text-black/70 transition-all duration-300">
          View All Work <span>→</span>
        </button>
      </div>
    </section>
  )
}
