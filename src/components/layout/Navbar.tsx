import { useState } from "react"
import { motion } from "framer-motion"
// interface NavbarProps {
//   themeToggle: () => void
//   theme: "dark" | "light"
// }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-white/[0.06]"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
        <div className="flex items-center justify-between">

            {/* Logo */}
            <h1 className="font-sans text-xl">
              <span className="font-display font-bold text-white light:text-[#0a0a0a]">THQ.</span>
            </h1>

            {/* Hamburger Menu */}
            <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 light:border-black/15 bg-white/5 light:bg-black/5 text-white light:text-[#0a0a0a] backdrop-blur"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
            >
                <span className="relative block h-5 w-5">
                    <span
                    className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-white light:bg-[#0a0a0a] transition-transform duration-200 ${
                        isOpen ? "translate-y-1.5 rotate-45" : ""
                    }`}
                    />
                    <span
                    className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-white light:bg-[#0a0a0a] transition-opacity duration-200 ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                    />
                    <span
                    className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-white light:bg-[#0a0a0a] transition-transform duration-200 ${
                        isOpen ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                    />
                </span>
            </button>

            {/* Navbar Pill - Desktop  */}
            <nav className="hidden md:flex items-center justify-center bg-[#1a1a1a]/50 light:bg-white/70 light:backdrop-blur border border-white/10 light:border-black/10 rounded-full p-1.5" aria-label="Navbar">
                <ul className="flex items-center justify-between gap-2">
                    <li>
                        <a href="#works" className="font-display font-medium text-[#f0ede8] light:text-[#0a0a0a] inline-flex items-center justify-center hover:bg-white/10 light:hover:bg-black/8 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="font-display font-medium inline-flex items-center justify-center text-[#f0ede8] light:text-[#0a0a0a] hover:bg-white/10 light:hover:bg-black/8 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="font-display font-medium inline-flex items-center justify-center text-[#f0ede8] light:text-[#0a0a0a] hover:bg-white/10 light:hover:bg-black/8 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="font-display font-medium inline-flex items-center justify-center text-[#f0ede8] light:text-[#0a0a0a] hover:bg-white/10 light:hover:bg-black/8 rounded-full px-4 py-2 transition-colors duration-400 ease-in-out">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="hidden md:flex items-center gap-3">
                {/* Hire us button */}
                <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 font-display font-bold rounded-full text-[#0a0a0a] bg-white light:bg-[#0a0a0a] light:text-white px-5 py-[0.58rem] hover:opacity-90 transition-opacity duration-200"
                >
                    <span className="h-3 w-3 rounded-full bg-amber-300"/>
                    Hire Us
                </a>
            </div>
        </div>


        {/* Hamburger Menu Opened */}

        {isOpen && (
            <div
                className="fixed inset-0 z-40 bg-black/50 md:hidden"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />)}
        <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            aria-hidden={!isOpen}
            className={`fixed right-0 top-0 z-50 flex h-full w-[min(18rem,85vw)] max-w-72 flex-col gap-0 border-l border-white/10 light:border-black/10 bg-[#0a0a0a] light:bg-[#f5f4f1] pl-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } ${!isOpen ? "pointer-events-none" : ""}`}
            style={{ paddingRight: "max(1.5rem, env(safe-area-inset-right))" }}
            >

            <div className="flex flex-1 flex-col justify-center gap-0 p-6">
                <a
                    href="#works"
                    className="block rounded-xl px-4 py-4 font-display text-lg text-white/80 light:text-[#0a0a0a]/80 transition-colors hover:bg-white/5 light:hover:bg-black/5 hover:text-white light:hover:text-[#0a0a0a]"
                    onClick={() => setIsOpen(false)}
                >
                    Work
                </a>
                <a
                    href="#services"
                    className="block rounded-xl px-4 py-4 font-display text-lg text-white/80 light:text-[#0a0a0a]/80 transition-colors hover:bg-white/5 light:hover:bg-black/5 hover:text-white light:hover:text-[#0a0a0a]"
                    onClick={() => setIsOpen(false)}
                >
                    Services
                </a>
                <a
                    href="#about"
                    className="block rounded-xl px-4 py-4 font-display text-lg text-white/80 light:text-[#0a0a0a]/80 transition-colors hover:bg-white/5 light:hover:bg-black/5 hover:text-white light:hover:text-[#0a0a0a]"
                    onClick={() => setIsOpen(false)}
                >
                    About
                </a>
                <a
                    href="#contact"
                    className="block rounded-xl px-4 py-4 font-display text-lg text-white/80 light:text-[#0a0a0a]/80 transition-colors hover:bg-white/5 light:hover:bg-black/5 hover:text-white light:hover:text-[#0a0a0a]"
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </a>

            </div>
        </nav>

    </motion.header>
    )
}
