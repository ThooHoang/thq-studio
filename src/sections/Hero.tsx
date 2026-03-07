import Navbar from "../components/layout/Navbar"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
        <div className="hero-dots absolute inset-0 -z-10"></div>
        <div className="hero-glow absolute inset-0 -z-10"></div>
        <div className="flex flex-col items-center gap-y-16">

        <div className="flex flex-col gap-40 w-full">
            <Navbar />
            <div className="flex flex-col gap-4 justify-center items-center">
                <Badge 
                    name="LEADING WEB DESIGN AGENCY IN DENMARK"
                />
                <h1 className="text-4xl font-display font-normal text-white/50 md:text-5xl text-center">Award-Winning Agency</h1>
                <h2 className="text-5xl font-serif md:text-6xl  font-bold italic text-center">For Digital-First Brands</h2>
            </div>
            <div className="flex w-fit items-center justify-center self-center gap-4 flex-wrap md:flex-nowrap">
              <Button variant="primary">Get a free strategy call</Button>
              <Button variant="secondary">See our work</Button>
            </div>
        </div>

        </div>
    </section>
  )
}