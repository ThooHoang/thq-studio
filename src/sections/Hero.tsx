import Navbar from "../components/layout/Navbar"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import {useState,useEffect} from "react"
import Marquee from "../components/ui/Marquee";
import DottedBg from "../components/layout/DottedBg";

export default function Hero() {
  const phrases= ["Digital-First Brands.", "Innovation-Driven Teams.", "Brands That Scale."];
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(()=>{
      setIndex((i) => (i+1) % phrases.length);
    },4000);
    return ()=>clearInterval(id);
  },[])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Dotted Background */}
        <DottedBg/>
      {/* Container */}
        <div className="flex flex-col items-center gap-y-16">
          {/* Main Content */}
          <div className="flex flex-col gap-30 w-full justify-center">
              <Navbar />
              <div className="text-xl mt-4 flex flex-col gap-4 justify-center items-center">
                  <Badge 
                      name="LEADING WEB DESIGN AGENCY IN DENMARK"
                  />
                  <h1 className="text-4xl font-display font-normal bg-gradient-to-r from-[#AA771C] via-[#FFED94] to-[#AA771C] bg-clip-text text-transparent md:text-5xl text-center">Award-Winning Agency</h1>
                  <div className="h-14 w-full overflow-hidden md:h-20">
                  {phrases.map((phrase, i) => (
                    <div
                      key={`${phrase}-${i}`}
                      className={i === index ? "animate-hero-line-enter" : "hidden"}
                    >
                      <h2 className="text-2xl font-serif font-bold italic text-center md:text-6xl text-white">
                        <span className="text-white">For</span> {phrase}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex w-fit items-center justify-center self-center gap-4 flex-wrap md:flex-nowrap">
                <Button variant="primary">Free strategy call</Button>
                <Button variant="secondary">See our work</Button>
              </div>
          </div>
          {/* They Trusted Us */}
          <Marquee/>
        </div>
    </section>
  )
}