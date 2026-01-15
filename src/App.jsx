import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Education from "./sections/Education"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Certificates from "./sections/Certificates"


export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        min-h-screen
        bg-pageLight text-slate-900
        dark:bg-pageDark dark:text-slate-100
        transition-colors duration-300
      "
    >
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  )
}
