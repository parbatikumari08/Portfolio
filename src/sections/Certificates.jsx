import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import { fadeUp, stagger } from "../utils/motion"

// IMPORT PDFs from assets
import udemyPDF from "../assets/web-dev-udemy.pdf"
import reactReduxPDF from "../assets/react-redux.pdf"
import sqlBasicPDF from "../assets/sql-basic.pdf"

export default function Certificates() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const certificates = [
    {
      title: "CSS, Bootstrap, JavaScript Web Development Course",
      org: "Udemy",
      date: "March 2025",
      file: udemyPDF,
      color: "msBlue",
      bgColor: "bg-msBlue"
    },
    {
      title: "React and Redux Certification",
      org: "KnowledgeGate",
      date: "Aug 2025",
      file: reactReduxPDF,
      color: "msGreen",
      bgColor: "bg-msGreen"
    },
    {
      title: "SQL (Basic)",
      org: "HackerRank",
      date: "March 2024",
      file: sqlBasicPDF,
      color: "msRed",
      bgColor: "bg-msRed"
    }
  ]

  const colorMap = {
    msBlue: "bg-msBlue",
    msRed: "bg-msRed",
    msGreen: "bg-msGreen"
  }

  // Microsoft colors for background orbs
  const msRed = "#F25022"
  const msGreen = "#7FBA00"
  const msBlue = "#00A4EF"

  return (
    <motion.section 
      id="certificates" 
      className="py-16 sm:py-20 md:py-24 border-t relative overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Background orbs for theme consistency */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-5"
          style={{ backgroundColor: msRed }}
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
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: msBlue }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: ['-50%', '-40%', '-50%'],
            y: ['-50%', '-60%', '-50%'],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* SECTION HEADING — with animated bar like other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div 
            className="h-8 sm:h-10 w-1.5 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #F25022, #7FBA00, #00A4EF, #FFB900)'
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: 32 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -5 }}
              className="
                relative rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8
                bg-cardLight dark:bg-cardDark
                border border-slate-200/60 dark:border-slate-700/60
                shadow-md hover:shadow-xl
                transition-all duration-300
                overflow-hidden group
              "
            >
              {/* TOP COLOR BAR with animation */}
              <motion.div 
                className={`absolute top-0 left-0 h-1 ${colorMap[cert.color]} rounded-t-lg sm:rounded-t-xl`}
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              />

              {/* Background gradient on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${cert.color === 'msBlue' ? msBlue : cert.color === 'msRed' ? msRed : msGreen}15, transparent 70%)`
                }}
              />

              {/* Content */}
              <div className="relative">
                {/* Title with hover effect */}
                <motion.h3 
                  className="font-semibold text-base sm:text-lg mb-2 pr-4"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {cert.title}
                </motion.h3>

                {/* Organization with icon */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs sm:text-sm text-textMutedLight dark:text-textMutedDark">
                    {cert.org}
                  </span>
                  
                  {/* Colored dot */}
                  <motion.span 
                    className={`w-1.5 h-1.5 rounded-full ${colorMap[cert.color]}`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Date */}
                <p className="text-xs sm:text-sm mb-4 text-textMutedLight dark:text-textMutedDark">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Issued:</span> {cert.date}
                </p>

                {/* Certificate Link */}
                <motion.a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 
                    text-sm font-medium
                    transition-all
                    group/link
                  "
                  style={{ color: cert.color === 'msBlue' ? msBlue : cert.color === 'msRed' ? msRed : msGreen }}
                  whileHover={{ x: 5 }}
                >
                  <span className="relative">
                    View Certificate
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover/link:w-full transition-all duration-300"
                      style={{ backgroundColor: cert.color === 'msBlue' ? msBlue : cert.color === 'msRed' ? msRed : msGreen }}
                    />
                  </span>
                  <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
                </motion.a>

                {/* Decorative corner accent */}
                <motion.div 
                  className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 rounded-br opacity-30"
                  style={{ borderColor: cert.color === 'msBlue' ? msBlue : cert.color === 'msRed' ? msRed : msGreen }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-b-2 border-r-2 rounded-br-2xl"
          style={{ borderColor: `${msBlue}20` }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        />
      </div>
    </motion.section>
  )
}