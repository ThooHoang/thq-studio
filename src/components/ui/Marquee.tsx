export default function Marquee() {
    return ( 
        <div className="w-full mt-10 flex flex-col gap-3">
          <p className="mb-4 text-center font-mono font-light text-white/50">THEY TRUSTED US</p>
          <div className="hero-marquee-wrap">
            {/* dimmed sides */}
            <div className="hidden md:pointer-event-none absolute top-0 left-0 z-10 h-full w-24 bg-linear-to-r from-[#0a0a0a] to-transparent" aria-hidden/>
            <div className="hidden md:pointer-event-none absolute top-0 right-0 z-10 h-full w-24 bg-linear-to-l from-[#0a0a0a] to-transparent" aria-hidden/>
            {/* dimmed sides */}
            <div className="flex w-full flex-nowrap gap-12 py-2">
              <div className="hero-marquee-track flex flex-nowrap items-center tracking-wide  gap-12 text-white/70">
                {["SOLEIL", "KOOKI", "GRAND UTILAJE", "OPTIMO", "RECRUITERONE", "SKOOLVERS", "VIGNET"].map(company=>(
                  <span key={company} className="shrink-0 font-mono text-sm font-medium ">
                    {company}
                  </span>
                ))}
              </div>
              <div className="hero-marquee-track flex flex-nowrap items-center tracking-wide  gap-12 text-white/70">
                {["SOLEIL", "KOOKI", `GRAND UTILAJE`, "OPTIMO", "RECRUITERONE", "SKOOLVERS", "VIGNET"].map(company=>(
                  <span key={`${company}-2`} className="shrink-0 font-mono text-sm font-medium ">
                    {company}
                  </span>
                ))}
              </div>
              <div className="hero-marquee-track flex flex-nowrap items-center tracking-wide  gap-12 text-white/70">
                {["SOLEIL", "KOOKI", `GRAND UTILAJE`, "OPTIMO", "RECRUITERONE", "SKOOLVERS", "VIGNET"].map(company=>(
                  <span key={`${company}-2`} className="shrink-0 font-mono text-sm font-medium ">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      
     
    )
}