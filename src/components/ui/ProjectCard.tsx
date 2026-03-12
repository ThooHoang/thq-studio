// ProjectCard.tsx
type Project = {
  num: string
  title: string
  tags: string[]
  year: string
  image: string
  href?: string
}


export default function ProjectCard({ num, title, tags, year, image, href }: Project) {
  const content = (
    <div className="group relative h-full min-h-0 bg-[#0f0f0f] light:bg-[#e8e7e4] border border-white/8 light:border-black/8 rounded-2xl p-7 flex flex-col justify-between cursor-none overflow-hidden hover:border-white/20 light:hover:border-black/20 transition-all duration-300">

        {/* Image — reveals from bottom on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-full z-0 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <div className="project-card-overlay absolute inset-x-0 top-0 h-[55%] bg-linear-to-b from-[#0f0f0f] to-transparent z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center rounded-b-2xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">

          {/* Top */}
          <div className="flex justify-between items-start">
            <span className="font-mono text-[0.65rem] tracking-widest text-white/20 light:text-black/20 group-hover:text-white/50 light:group-hover:text-black/50 transition-colors duration-300">
              {num}
            </span>
            <span className="text-white/25 light:text-black/25 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white light:group-hover:text-[#0a0a0a]">
              ↗
            </span>
          </div>

          {/* Bottom */}
          <div>
            <div className="flex gap-2 mb-2 flex-wrap">
              {(tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.58rem] tracking-widest uppercase text-white/25 light:text-black/25 border border-white/10 light:border-black/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-display font-extrabold text-[1.35rem] leading-tight tracking-[-0.02em] text-white light:text-[#0a0a0a]">
              {title}
            </h3>
            <p className="font-mono text-[0.65rem] text-white/20 light:text-black/20 mt-1">{year}</p>
          </div>

        </div>
      </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}
