import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll to top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Microsoft colors
  const msRed = "#F25022"
  const msGreen = "#7FBA00"
  const msBlue = "#00A4EF"
  const msYellow = "#FFB900"

  const quickLinks = [
    { href: "#projects", label: "Projects", color: msBlue },
    { href: "#skills", label: "Skills", color: msGreen },
    { href: "#education", label: "Education", color: msYellow },
    { href: "#experience", label: "Experience", color: msRed },
    { href: "#contact", label: "Contact", color: msBlue },
  ]

  const connectLinks = [
    { 
      href: "mailto:shawparo08@gmail.com", 
      label: "Email", 
      icon: Mail,
      color: msRed
    },
    { 
      href: "https://github.com/parbatikumari08", 
      label: "GitHub", 
      icon: Github,
      color: msBlue
    },
    { 
      href: "https://www.linkedin.com/in/parbati-kumari-298b0431a/", 
      label: "LinkedIn", 
      icon: Linkedin,
      color: msGreen
    },
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-16 sm:mt-20 py-8 sm:py-10 border-t bg-cardLight dark:bg-cardDark overflow-hidden"
    >
      {/* Decorative colored orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full opacity-5"
          style={{ background: `radial-gradient(circle, ${msBlue}, transparent 70%)` }}
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full opacity-5"
          style={{ background: `radial-gradient(circle, ${msGreen}, transparent 70%)` }}
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 22, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 text-sm">
          
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h3 className="text-xl sm:text-lg font-semibold mb-3 bg-gradient-to-r from-msBlue to-msGreen bg-clip-text text-transparent">
              Parbati Kumari
            </h3>
            <p className="text-sm text-textMutedLight dark:text-textMutedDark leading-relaxed max-w-sm mx-auto sm:mx-0">
              Full-Stack Web Developer specializing in React, Node.js and
              modern web technologies. Building scalable and responsive web applications.
            </p>
            
            {/* Decorative line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-msBlue to-msGreen mx-auto sm:mx-0 mt-4" />
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h4 className="font-semibold text-base mb-3 text-msBlue">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="inline-block text-textMutedLight dark:text-textMutedDark hover:text-msBlue transition-colors duration-300"
                    style={{ hover: { color: link.color } }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center sm:text-left"
          >
            <h4 className="font-semibold text-base mb-3 text-msGreen">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-textMutedLight dark:text-textMutedDark hover:opacity-80 transition-all duration-300 group"
                  >
                    <link.icon 
                      size={16} 
                      className="group-hover:scale-110 transition-transform" 
                      style={{ color: link.color }}
                    />
                    <span className="group-hover:text-msBlue transition-colors">
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Social Icons Row for Mobile */}
            <div className="flex justify-center sm:justify-start gap-4 mt-4 md:hidden">
              {connectLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
                  style={{ color: link.color }}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar with Copyright and Scroll Top */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 pt-6 border-t border-slate-200/60 dark:border-slate-700/60"
        >
          <div className="text-xs text-textMutedLight dark:text-textMutedDark order-2 sm:order-1">
            © {new Date().getFullYear()} Parbati Kumari — All Rights Reserved
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={scrollToTop}
              className="
                order-1 sm:order-2
                p-3 rounded-full
                bg-gradient-to-r from-msBlue to-msGreen
                text-white shadow-lg
                hover:shadow-xl hover:scale-110
                transition-all duration-300
                flex items-center gap-2
                group
              "
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} className="group-hover:animate-bounce" />
              <span className="text-xs hidden sm:inline">Back to Top</span>
            </motion.button>
          )}
        </motion.div>

        {/* Decorative Microsoft colored dots */}
        <div className="absolute bottom-4 left-4 flex gap-1 opacity-30">
          <div className="w-1 h-1 rounded-full bg-msRed" />
          <div className="w-1 h-1 rounded-full bg-msGreen" />
          <div className="w-1 h-1 rounded-full bg-msBlue" />
          <div className="w-1 h-1 rounded-full bg-msYellow" />
        </div>
      </div>
    </motion.footer>
  )
}