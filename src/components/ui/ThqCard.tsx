

export default function ThqCard() {
    return (
      <div
        className="row-span-2 border border-white/[0.08] rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: "#0f0f0f",
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(170,119,28,0.12) 0%, transparent 70%)" }}
        />
  
        {/* Content */}
        <div className="relative z-10 text-center">
          <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-white/20 mb-6">
            Our Studio
          </p>
          <h2
            className="font-display font-extrabold text-[4.5rem] leading-none tracking-[-0.04em] bg-clip-text text-transparent mb-1"
            style={{ backgroundImage: "linear-gradient(135deg, #AA771C, #FFED94, #C9A87C)" }}
          >
            THQ
          </h2>
          <p className="font-display text-[0.85rem] tracking-[0.25em] uppercase text-white/30">
            STUDIO
          </p>
  
          <div className="w-px h-8 bg-white/10 mx-auto my-6" />
  
          <p className="font-mono text-[0.65rem] leading-[1.8] text-white/25 max-w-[160px] mx-auto">
            Web & Tech Agency<br />Based in Denmark
          </p>
  
          <div className="flex justify-center items-center gap-6 mt-6">
            <div className="text-center">
              <p className="font-mono font-extrabold text-[1.4rem] text-white leading-none">
                20<span className="text-white/25">+</span>
              </p>
              <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-white/20 mt-1">Projects</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <p className="font-mono font-extrabold text-[1.4rem] text-white leading-none">
                15<span className="text-white/25">+</span>
              </p>
              <p className="font-mono text-[0.55rem] tracking-[0.1em] uppercase text-white/20 mt-1">Clients</p>
            </div>
          </div>
        </div>
      </div>
    )
  }