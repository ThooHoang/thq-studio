import { ArrowDownRight } from "lucide-react"

export default function About() {
  return (
    <section className="border-t border-white/10 px-8 md:px-16 py-28">

      {/* Section label */}
      <div className="flex items-center gap-4 font-mono text-xs uppercase text-white/30 mb-20">
        <span className="w-8 h-px bg-white/20 inline-block" />
        Who We Are
      </div>

      {/* Top row — arrow + headline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
        <div className="flex items-center gap-6">
          <div className="border border-white/20 rounded-full w-16 h-16 flex items-center justify-center shrink-0 hover:border-rose-400/50 transition-colors duration-300">
            <ArrowDownRight size={24} color="pink" className="hover:translate-x-1 transition-all duration-200 ease-in " />
          </div>
          <p className="font-mono text-xs text-white/40 max-w-xs">
            A creative agency based in Denmark — building digital products that actually perform.
          </p>
        </div>

        <h2 className="font-display font-extrabold text-7xl text-white md:text-right">
          What makes us<br />
          <span className="font-serif font-normal italic bg-gradient-to-r from-rose-300 via-pink-200 to-rose-400 bg-clip-text text-transparent">special.</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-24" />

      {/* 3 column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 mb-24">

        <div className="flex flex-col gap-6 md:pr-12">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-white/25">01 — What</span>
          <h3 className="font-display font-normal text-xl text-white tracking-[-0.02em]">
            Our <span className="font-serif italic font-bold  bg-rose-400/60 text-white px-1">purpose</span>
          </h3>
          <p className="font-mono text-[0.8rem] leading-[1.9] text-white/40">
            To deliver a tangible impact on our clients' businesses. We exist as a partner, crafting strategies that are aligned with your goals — not ours.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:border-l md:border-white/10 md:px-12">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-white/25">02 — How</span>
          <h3 className="font-display font-normal text-xl text-white tracking-[-0.02em]">
            Our <span className="font-serif italic font-normal text-white bg-rose-400/60 px-1">approach</span>
          </h3>
          <p className="font-mono text-[0.8rem] leading-[1.9] text-white/40">
            Every campaign and project has clear results and clear measures. We are transparent throughout — no surprises, no fluff. Just work that moves the needle.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:border-l md:border-white/10 md:pl-12">
          <span className="font-mono text-xs tracking-[0.12em] uppercase text-white/25">03 — Why</span>
          <h3 className="font-display font-normal text-xl text-white tracking-[-0.02em]">
            Our <span className="font-serif italic font-normal text-white bg-rose-400/60 px-1">belief</span>
          </h3>
          <p className="font-mono text-[0.8rem] leading-[1.9] text-white/40">
            Every company performs best online when strategy meets craft. We help businesses find the most effective path to get there — and stay there.
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-24" />

   

    </section>
  )
}