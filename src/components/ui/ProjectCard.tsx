
type Project = {
    num:string,
    title:string,
    tags:string[],
    year:string,
    image:string
  
  }


export default function ProjectCard({ num, title, tags, year, image }: Project) {
    return (
      <div className="group relative bg-[#0f0f0f] border border-white/8 rounded-2xl p-7 flex flex-col justify-between cursor-none overflow-hidden hover:border-white/20 transition-all duration-300">
  
        {/* Image — reveals from bottom on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-full z-0 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <div className="absolute inset-x-0 top-0 h-[55%] bg-linear-to-b from-[#0f0f0f] to-transparent z-10" />
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
            <span className="font-mono text-[0.65rem] tracking-widest text-white/20 group-hover:text-white/50 transition-colors duration-300">
              {num}
            </span>
            <span className="text-white/25 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
              ↗
            </span>
          </div>
  
          {/* Bottom */}
          <div>
            <div className="flex gap-2 mb-2 flex-wrap">
              {tags.map((tag) => (
                <span key={tag} className="font-mono text-[0.58rem] tracking-widest uppercase text-white/25 border border-white/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-display font-extrabold text-[1.35rem] leading-tight tracking-[-0.02em] text-white">
              {title}
            </h3>
            <p className="font-mono text-[0.65rem] text-white/20 mt-1">{year}</p>
          </div>
  
        </div>
      </div>
    )
  }