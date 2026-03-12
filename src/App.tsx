import Cursor from "./components/Cursor"
import Navbar from "./components/layout/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Works from "./sections/Works"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <Cursor/>
      <Navbar themeToggle={() => {}} theme="dark" />
      <Hero />
      <About/>
      <Works/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
