import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { useState, useEffect } from "react"

export default function Navbar() {
  const { dark, setDark } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "#about", label: "About", color: "hover:text-msBlue" },
    { href: "#skills", label: "Skills", color: "hover:text-msGreen" },
    { href: "#projects", label: "Projects", color: "hover:text-msRed" },
    { href: "#certificates", label: "Certificates", color: "hover:text-msBlue" },
    { href: "#contact", label: "Contact", color: "hover:text-msYellow" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          fixed top-0 w-full z-50
          bg-cardLight/80 dark:bg-cardDark/80
          backdrop-blur border-b
          transition-shadow duration-300
          ${scrolled ? "shadow-md" : ""}
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Brand */}
          <a href="#hero" className="leading-tight hover:opacity-80 transition">
            <div className="text-base sm:text-lg font-semibold text-msBlue">
              Parbati Kumari
            </div>
            <div className="text-[10px] sm:text-xs text-textMutedLight dark:text-textMutedDark">
              Full-Stack Web Developer
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${link.color} transition hover:scale-105`}
              >
                {link.label}
              </a>
            ))}

            {/* Dark mode toggle - Desktop */}
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

          {/* Mobile Right Section */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Dark mode toggle - Mobile */}
            <button
              onClick={() => setDark(!dark)}
              className="
                p-2 rounded-md
                hover:bg-slate-200 dark:hover:bg-slate-800
                transition
              "
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2 rounded-md
                hover:bg-slate-200 dark:hover:bg-slate-800
                transition
                relative z-[60]
              "
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Popup Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 z-[51] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="
                fixed top-0 right-0 h-full w-[280px] sm:w-[320px]
                bg-white dark:bg-slate-900
                shadow-2xl
                z-[52]
                md:hidden
                overflow-y-auto
              "
            >
              <div className="flex flex-col pt-20 px-6 pb-8">
                {/* Close button inside menu */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <X size={20} className="text-slate-600 dark:text-slate-300" />
                </button>

                {/* Menu Header */}
                <div className="mb-8 pb-4 border-b border-slate-200 dark:border-slate-700">
                  <div className="text-lg font-semibold text-msBlue">
                    Parbati Kumari
                  </div>
                  <div className="text-xs text-textMutedLight dark:text-textMutedDark mt-1">
                    Full-Stack Web Developer
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`
                        py-4 px-4 rounded-lg text-base font-medium
                        text-slate-700 dark:text-slate-200
                        ${link.color} 
                        transition-all
                        hover:bg-slate-50 dark:hover:bg-slate-800
                        border border-transparent hover:border-slate-200 dark:hover:border-slate-700
                      `}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="mt-auto pt-8">
                  <div className="text-xs text-center text-textMutedLight dark:text-textMutedDark">
                    © 2024 Parbati Kumari
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}