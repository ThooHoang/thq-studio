import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import { useState, useEffect } from "react"
// import Marquee from "../components/ui/Marquee"
import DottedBg from "../components/layout/DottedBg"
import { motion, AnimatePresence } from "framer-motion"
import { motionConfig } from "../lib/motion"

const PHRASE_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }

export default function Hero() {
  const phrases = [
    "Brands That Convert.",
    "Teams That Demand More.",
    "Startups Ready to Scale.",
    "Businesses Built to Win.",
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(id)
  }, [phrases.length])

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24">

      <DottedBg />
      <div className="flex flex-col items-center gap-y-16">
        <div className="flex flex-col gap-30 w-full justify-center">
          <div className="text-xl mt-4 flex flex-col gap-4 justify-center items-center">
            <Badge name="WEB DESIGN AGENCY IN DENMARK" />
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: motionConfig.duration, delay: 0.25 }}
              className="text-4xl font-display font-normal bg-gradient-to-r from-[#AA771C] via-[#FFED94] to-[#AA771C] bg-clip-text text-transparent md:text-5xl text-center"
            >
              Danish Web Design Studio
            </motion.h1>
            <div className="h-14 w-full overflow-hidden md:h-20 flex items-center justify-center">
              <h2 className="text-2xl font-serif font-bold italic text-center md:text-6xl text-white light:text-[#0a0a0a] flex items-center justify-center gap-3">

                {/* Only this part animates */}
                <span className="overflow-hidden inline-flex justify-center items-center" style={{ height: "1.2em" }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={PHRASE_TRANSITION}
                      className="inline-block "
                    >
                      For {phrases[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>

              </h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: motionConfig.duration, delay: 0.7 }}
            className="mt-3 flex w-fit items-center justify-center self-center gap-4 flex-wrap md:flex-nowrap"
          >
            <Button variant="primary" href="#contact">Free strategy call</Button>
            <Button variant="secondary" href="#works">See our work</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: motionConfig.durationLong, delay: 1 }}
        >
          {/* <Marquee /> */}
        </motion.div>
      </div>
    </section>
  )
}
