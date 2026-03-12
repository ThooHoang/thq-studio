import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Mail, MapPin } from "lucide-react"
import { motionConfig, fadeUpSmall, staggerContainer } from "../lib/motion"

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: hook up to real email / CRM
    setSent(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#0a0a0a] light:bg-[#f5f4f1] border-t border-white/10 light:border-black/10 px-8 md:px-16 py-28"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: motionConfig.duration, ease: motionConfig.ease }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 font-mono text-[0.68rem] tracking-[0.15em] uppercase text-white/30 light:text-black/30 mb-6">
          <span className="w-8 h-px bg-white/20 light:bg-black/20 inline-block" />
          Get in touch
        </div>
        <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.03em] text-white light:text-[#0a0a0a]">
          Let's build{" "}
          <span
            className="font-serif font-normal italic bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #AA771C, #FFED94, #AA771C)" }}
          >
            together.
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — info */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10"
        >
          <motion.p variants={fadeUpSmall} className="font-mono text-[0.82rem] leading-[1.9] text-white/40 light:text-black/40 max-w-sm">
            Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you.
          </motion.p>

          <motion.div variants={fadeUpSmall} className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 shrink-0">
                <Mail className="h-3.5 w-3.5 text-white/40 light:text-black/40" />
              </span>
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/25 light:text-black/25 mb-1">Email</p>
                <a
                  href="mailto:hello@thqstudio.com"
                  className="font-display text-[0.95rem] text-white/70 light:text-black/70 hover:text-white light:hover:text-[#0a0a0a] transition-colors duration-200"
                >
                  hello@thqstudio.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 shrink-0">
                <MapPin className="h-3.5 w-3.5 text-white/40 light:text-black/40" />
              </span>
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/25 light:text-black/25 mb-1">Based in</p>
                <p className="font-display text-[0.95rem] text-white/70 light:text-black/70">Aarhus, Denmark</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: motionConfig.duration, delay: 0.15, ease: motionConfig.ease }}
        >
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-12">
              <span
                className="font-mono text-[0.62rem] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5"
                style={{ color: "#FFED94" }}
              >
                Message sent
              </span>
              <p className="font-display text-xl text-white/80 light:text-black/80">
                Thanks — we'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/30 light:text-black/30">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 rounded-xl px-4 py-3 font-display text-[0.9rem] text-white light:text-[#0a0a0a] placeholder:text-white/20 light:placeholder:text-black/20 focus:outline-none focus:border-white/30 light:focus:border-black/30 transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/30 light:text-black/30">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 rounded-xl px-4 py-3 font-display text-[0.9rem] text-white light:text-[#0a0a0a] placeholder:text-white/20 light:placeholder:text-black/20 focus:outline-none focus:border-white/30 light:focus:border-black/30 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-white/30 light:text-black/30">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 rounded-xl px-4 py-3 font-display text-[0.9rem] text-white light:text-[#0a0a0a] placeholder:text-white/20 light:placeholder:text-black/20 focus:outline-none focus:border-white/30 light:focus:border-black/30 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 self-start flex items-center gap-2 font-display font-bold rounded-full border border-white/15 light:border-black/15 text-[#f0ede8] light:text-[#0a0a0a] bg-white/10 light:bg-black/10 px-6 py-3.5 hover:translate-y-0.5 hover:bg-white/20 light:hover:bg-black/20 transition-all duration-200"
              >
                Send message
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
