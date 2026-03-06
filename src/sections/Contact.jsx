import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Microsoft colors
  const msRed = "#F25022"
  const msGreen = "#7FBA00"
  const msBlue = "#00A4EF"
  const msYellow = "#FFB900"

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "shawparo08@gmail.com",
      href: "mailto:shawparo08@gmail.com",
      color: msRed
    },
    {
      icon: Github,
      label: "GitHub",
      value: "parbatikumari08",
      href: "https://github.com/parbatikumari08",
      color: msBlue
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Parbati Kumari",
      href: "https://www.linkedin.com/in/parbati-kumari-298b0431a/",
      color: msGreen
    }
  ]

  return (
    <motion.section 
      id="contact" 
      className="py-16 sm:py-20 md:py-24 border-t relative overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Background orbs - matching other sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: msBlue }}
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: msGreen }}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section header with animated bar - matching other sections */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div 
            className="h-8 sm:h-10 w-1 sm:w-1.5 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${msRed}, ${msGreen}, ${msBlue}, ${msYellow})`
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: 32 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Contact
          </h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="
            relative rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8
            bg-cardLight dark:bg-cardDark
            border shadow-md hover:shadow-xl
            transition-all duration-300
            max-w-3xl mx-auto
            overflow-hidden group
          "
        >
          {/* Animated top bar with Microsoft green */}
          <motion.div 
            className="absolute top-0 left-0 h-1 bg-msGreen"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Background gradient on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 0% 0%, ${msGreen}15, transparent 70%)`
            }}
          />

          {/* Contact Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="relative mb-6 sm:mb-8"
          >
            <p className="text-sm sm:text-base text-textMutedLight dark:text-textMutedDark leading-relaxed text-center sm:text-left">
              I am currently open to entry-level full-stack or frontend developer
              opportunities. If you are hiring or would like to discuss a role,
              project, or collaboration, feel free to get in touch.
            </p>
            
            {/* Decorative quote mark */}
            <span className="absolute -top-2 -left-2 text-4xl opacity-10 text-msGreen">"</span>
          </motion.div>

          {/* Contact Links */}
          <div className="space-y-3 sm:space-y-4 relative">
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group/link"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <span className="flex items-center gap-2 text-xs sm:text-sm font-medium text-textMutedLight dark:text-textMutedDark min-w-[70px]">
                    <link.icon 
                      size={14} 
                      className="sm:w-4 sm:h-4"
                      style={{ color: link.color }}
                    />
                    {link.label}
                  </span>
                  
                  <div className="flex-1">
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-1 sm:gap-2
                        text-xs sm:text-sm
                        break-all sm:break-normal
                        transition-all
                      "
                      style={{ color: link.color }}
                      whileHover={{ x: 3 }}
                    >
                      <span className="hover:underline">
                        {link.value}
                      </span>
                      <ExternalLink 
                        size={10} 
                        className="sm:w-3 sm:h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" 
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <motion.div 
            className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 rounded-br-lg opacity-30"
            style={{ borderColor: msGreen }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          {/* Availability indicator */}
          <motion.div 
            className="absolute top-3 right-3 flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-msGreen"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[10px] sm:text-xs text-textMutedLight dark:text-textMutedDark">
              Open to work
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative corner accent */}
        <motion.div 
          className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-r-2 rounded-br-2xl"
          style={{ borderColor: `${msGreen}20` }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        />
      </div>
    </motion.section>
  )
}