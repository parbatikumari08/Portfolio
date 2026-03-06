import { motion, useInView } from "framer-motion"
import { ExternalLink, Calendar, MapPin } from "lucide-react"
import { useRef } from "react"
import { fadeUp } from "../utils/motion"
import internpe from "../assets/internpe.jpg"
import avieron from "../assets/avieron.pdf"

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Microsoft colors
  const msRed = "#F25022"
  const msGreen = "#7FBA00"
  const msBlue = "#00A4EF"
  const msYellow = "#FFB900"

  const experiences = [
    {
      title: "MERN Stack Intern – Avieron Tech Pvt. Ltd.",
      period: "July 2025 – Jan 2026",
      color: msGreen,
      dotColor: "bg-msGreen",
      points: [
        "Assisted in basic frontend & backend tasks using the MERN stack.",
        "Worked on UI updates, bug fixes, and feature enhancements.",
        "Following team workflows and improving coding best practices."
      ],
      certificate: avieron,
      delay: 0.2
    },
    {
      title: "Web Developer Intern – InternPe",
      period: "Aug 2024 – Sep 2024",
      color: msBlue,
      dotColor: "bg-msBlue",
      points: [
        "Built reusable components using React.js.",
        "Improved UI consistency and component reusability.",
        "Applied clean coding practices to enhance maintainability."
      ],
      certificate: internpe,
      delay: 0.5
    }
  ]

  return (
    <motion.section 
      id="experience" 
      className="py-24 border-t relative overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-5"
          style={{ backgroundColor: msRed }}
          animate={{ 
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-5"
          style={{ backgroundColor: msGreen }}
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: msBlue }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <motion.div 
            className="h-10 w-1.5 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${msRed}, ${msGreen}, ${msBlue}, ${msYellow})`
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: 40 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
            style={{
              background: `linear-gradient(to bottom, ${msGreen}, ${msBlue}, ${msYellow})`
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          <div className="relative space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={exp.delay}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                {/* Animated timeline dot */}
                <motion.span 
                  className={`absolute -left-[13px] top-6 w-5 h-5 rounded-full border-4 border-white dark:border-cardDark ${exp.dotColor} shadow-lg z-10`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    delay: exp.delay + 0.3 
                  }}
                  whileHover={{ scale: 1.3 }}
                >
                  {/* Pulse effect */}
                  <motion.span 
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: exp.color }}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>

                {/* Experience card */}
                <motion.div
                  className="
                    relative ml-8 md:ml-12 p-6 rounded-xl
                    bg-cardLight dark:bg-cardDark
                    border shadow-sm hover:shadow-xl
                    transition-all duration-300
                    overflow-hidden group/card
                  "
                  whileHover={{ y: -4 }}
                >
                  {/* Animated top border with exp color */}
                  <motion.div 
                    className="absolute top-0 left-0 h-1"
                    style={{ backgroundColor: exp.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: exp.delay + 0.4 }}
                  />

                  {/* Background gradient on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 0% 0%, ${exp.color}15, transparent 70%)`
                    }}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Title with icon */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <motion.h3 
                          className="font-semibold text-lg"
                          style={{ color: exp.color }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {exp.title}
                        </motion.h3>
                        
                        {/* Period with icon */}
                        <div className="flex items-center gap-2 text-sm text-textMutedLight dark:text-textMutedDark mb-3">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Company icon placeholder */}
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-opacity-20 flex items-center justify-center"
                        style={{ backgroundColor: `${exp.color}20` }}
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        <span className="text-sm font-bold" style={{ color: exp.color }}>
                          {index === 0 ? 'AT' : 'IP'}
                        </span>
                      </motion.div>
                    </div>

                    {/* Responsibilities list */}
                    <ul className="space-y-2 text-sm">
                      {exp.points.map((point, pointIndex) => (
                        <motion.li 
                          key={pointIndex}
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: exp.delay + 0.5 + pointIndex * 0.1 }}
                        >
                          <span className="mt-1.5">
                            <span 
                              className="block w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: exp.color }}
                            />
                          </span>
                          <span className="text-textMutedLight dark:text-textMutedDark">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Certificate link */}
                    <motion.a
                      href={exp.certificate}
                      target="_blank"
                      className="inline-flex items-center gap-2 mt-4 font-medium group/link"
                      style={{ color: exp.color }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="relative">
                        View Certificate
                        <motion.span 
                          className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover/link:w-full transition-all duration-300"
                          style={{ backgroundColor: exp.color }}
                        />
                      </span>
                      <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Decorative corner accent */}
                  <motion.div 
                    className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 rounded-br-lg"
                    style={{ borderColor: `${exp.color}30` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: exp.delay + 0.8 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 rounded-br-2xl"
          style={{ borderColor: `${msBlue}20` }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 rounded-tl-2xl"
          style={{ borderColor: `${msYellow}20` }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        />
      </div>
    </motion.section>
  )
}