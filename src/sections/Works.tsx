import ProjectCard from "../components/ui/ProjectCard"
import ThqCard from "../components/ui/ThqCard"
import projects from "../project"




export default function Works() {
  return (
    <section className="bg-[#0a0a0a] border-t border-white/10 px-8 md:px-16 py-28">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <div>
          <div className="flex items-center gap-4 font-mono text-[0.68rem] tracking-[0.15em] uppercase text-white/30 mb-6">
            <span className="w-8 h-px bg-white/20 inline-block" />
            Selected Work
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.03em] text-white">
            Our <span
              className="font-serif font-normal italic bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #AA771C, #FFED94, #AA771C)" }}
            >
              projects.
            </span>
          </h2>
        </div>
        <p className="font-mono text-[0.8rem] leading-[1.9] text-white/25 max-w-xs md:text-right">
          Hover a card to preview the project. Click to explore.
        </p>
      </div>

      {/* Bento Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        style={{ gridTemplateRows: "300px 300px" }}
      >
        <ProjectCard {...projects[0]} />
        <ThqCard />
        <ProjectCard {...projects[1]} />
        <ProjectCard {...projects[2]} />
        <ProjectCard {...projects[3]} />
      </div>

      {/* CTA */}
      <div className="flex justify-between items-center mt-8 flex-wrap gap-6">
        <p className="font-mono text-[0.7rem]  uppercase text-white/20">
          4 projects shown — more on request
        </p>
        <button className="font-mono text-[0.72rem]  uppercase text-white/40 border border-white/10 rounded-full px-6 py-3 flex items-center gap-3 cursor-none hover:border-white/30 hover:text-white/70 transition-all duration-300">
          View All Work <span>→</span>
        </button>
      </div>

    </section>
  )
}
