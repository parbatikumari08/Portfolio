import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { dark, setDark } = useTheme()

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-0 w-full z-50
        bg-cardLight/80 dark:bg-cardDark/80
        backdrop-blur border-b
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="leading-tight">
          <div className="text-lg font-semibold text-msBlue">
            Parbati Kumari
          </div>
          <div className="text-xs text-textMutedLight dark:text-textMutedDark">
            Full-Stack Web Developer
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a
            href="#about"
            className="hover:text-msBlue transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-msGreen transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-msRed transition"
          >
            Projects
          </a>
          <a href="#certificates" className="hover:text-msBlue    transition">Certificates</a>

          <a
            href="#contact"
            className="hover:text-msYellow transition"
          >
            Contact
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="
              ml-2 p-2 rounded-md
              hover:bg-slate-200 dark:hover:bg-slate-800
              transition
            "
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
