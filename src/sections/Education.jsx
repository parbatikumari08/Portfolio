import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Education() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Microsoft colors
  const msRed = "#F25022"
  const msGreen = "#7FBA00"
  const msBlue = "#00A4EF"
  const msYellow = "#FFB900"

  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Bengal College of Engineering and Technology, Durgapur",
      score: "CGPA: 7.6 / 10",
      period: "Aug 2021 – June 2025",
      color: msYellow,
      delay: 0.2
    },
    {
      degree: "Intermediate (Class 12)",
      institution: "Jawahar Navodaya Vidyalaya, Durgapur",
      score: "Percentage: 84%",
      period: "May 2019 – June 2021",
      color: msBlue,
      delay: 0.4
    },
    {
      degree: "Matriculation (Class 10)",
      institution: "Jawahar Navodaya Vidyalaya, Durgapur",
      score: "Percentage: 86.47%",
      period: "May 2018 – June 2019",
      color: msGreen,
      delay: 0.6
    }
  ]

  return (
    <motion.section 
      id="education" 
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
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: edu.delay }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative"
            >
              {/* Card with animated border */}
              <div 
                className="relative rounded-xl p-8 bg-cardLight dark:bg-cardDark border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top colored bar with animation */}
                <motion.div 
                  className="absolute top-0 left-0 h-1 rounded-t-xl"
                  style={{ 
                    backgroundColor: edu.color,
                    boxShadow: `0 0 10px ${edu.color}` 
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: edu.delay + 0.2 }}
                />

                {/* Background gradient on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${edu.color}10, transparent 50%)`
                  }}
                />

                {/* Content */}
                <div className="relative">
                  <motion.h3 
                    className="text-xl font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {edu.degree}
                  </motion.h3>

                  <p className="text-textMutedLight dark:text-textMutedDark mt-1">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <motion.span 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        backgroundColor: `${edu.color}15`,
                        color: edu.color 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: edu.color }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {edu.score}
                    </motion.span>
                    
                    <span className="text-sm text-textMutedLight dark:text-textMutedDark flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </span>
                  </div>

                  {/* Decorative corner line */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 rounded-br-lg"
                    style={{ borderColor: `${edu.color}30` }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: edu.delay + 0.6 }}
                  />
                </div>
              </div>

              {/* Connecting line between cards */}
              {index < educationData.length - 1 && (
                <motion.div 
                  className="absolute -bottom-3 left-8 w-0.5 h-6"
                  style={{ background: `linear-gradient(to bottom, ${edu.color}, ${educationData[index + 1].color})` }}
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.5, delay: edu.delay + 0.8 }}
                />
              )}
            </motion.div>
          ))}
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