import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeUp, stagger } from "../utils/motion"

import SkillModal from "../components/SkillModal"
import skillsInfo from "../data/skillsInfo"

const colorMap = {
  msBlue: "text-msBlue",
  msRed: "text-msRed",
  msYellow: "text-msYellow",
  msGreen: "text-msGreen",
}

// Color values for backgrounds
const bgColorMap = {
  msBlue: "rgba(0, 164, 239, 0.1)",
  msRed: "rgba(242, 80, 34, 0.1)",
  msYellow: "rgba(255, 185, 0, 0.1)",
  msGreen: "rgba(127, 186, 0, 0.1)",
}

// FULLY UPDATED SKILL GROUPS
const skillGroups = [
  {
    title: "Frontend Development",
    color: "msBlue",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Responsive Design"
    ],
  },
  {
    title: "Backend Development",
    color: "msRed",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication"
    ],
  },
  {
    title: "Programming Languages",
    color: "msYellow",
    skills: ["Python", "JavaScript", "C++"],
  },
  {
    title: "Databases",
    color: "msGreen",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Concepts",
    color: "msBlue",
    skills: [
      "Git",
      "GitHub",
      "Netlify",
      "Debugging"
    ],
  },
]

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Microsoft colors
  const msRed = "#F25022"
  const msGreen = "#7FBA00"
  const msBlue = "#00A4EF"
  const msYellow = "#FFB900"

  return (
    <motion.section 
      id="skills" 
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
          className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: msBlue }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: ['-50%', '-40%', '-50%'],
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
            Technical Skills
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              custom={groupIndex}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                relative rounded-xl p-6
                bg-cardLight dark:bg-cardDark
                border border-slate-200/60 dark:border-slate-700/60
                shadow-lg hover:shadow-2xl
                transition-all duration-300
                overflow-hidden group/card
              "
            >
              {/* Animated top border */}
              <motion.div 
                className="absolute top-0 left-0 h-1"
                style={{ 
                  backgroundColor: group.color === "msBlue" ? msBlue : 
                                  group.color === "msRed" ? msRed :
                                  group.color === "msYellow" ? msYellow : msGreen
                }}
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.4 + groupIndex * 0.1 }}
              />

              {/* Background gradient on hover */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 0% 0%, ${group.color === "msBlue" ? msBlue : 
                                                                 group.color === "msRed" ? msRed :
                                                                 group.color === "msYellow" ? msYellow : msGreen}15, transparent 70%)`
                }}
              />

              {/* Title with animated dot */}
              <div className="relative flex items-center gap-2 mb-4">
                <motion.span 
                  className={`font-semibold text-lg ${colorMap[group.color]}`}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {group.title}
                </motion.span>
                <motion.span 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ 
                    backgroundColor: group.color === "msBlue" ? msBlue : 
                                    group.color === "msRed" ? msRed :
                                    group.color === "msYellow" ? msYellow : msGreen
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Skills with enhanced buttons */}
              <div className="flex flex-wrap gap-2 relative">
                {group.skills.map((skill, skillIndex) => (
                  <motion.button
                    key={skill}
                    onClick={() => setActiveSkill(skillsInfo[skill])}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.6 + groupIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      relative text-sm px-4 py-1.5 rounded-full
                      bg-slate-100 dark:bg-slate-800
                      text-slate-700 dark:text-slate-200
                      hover:text-white
                      transition-all duration-300
                      shadow-sm hover:shadow-md
                      overflow-hidden group/btn
                    "
                    style={{
                      backgroundColor: `color-mix(in srgb, ${group.color === "msBlue" ? msBlue : 
                                                             group.color === "msRed" ? msRed :
                                                             group.color === "msYellow" ? msYellow : msGreen} 10%, transparent)`,
                    }}
                  >
                    {/* Hover effect background */}
                    <motion.span 
                      className="absolute inset-0"
                      style={{ 
                        background: group.color === "msBlue" ? msBlue : 
                                    group.color === "msRed" ? msRed :
                                    group.color === "msYellow" ? msYellow : msGreen
                      }}
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    {/* Skill text */}
                    <span className="relative z-10 group-hover/btn:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Decorative corner accent */}
              <motion.div 
                className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 rounded-br-lg"
                style={{ 
                  borderColor: group.color === "msBlue" ? `${msBlue}30` : 
                              group.color === "msRed" ? `${msRed}30` :
                              group.color === "msYellow" ? `${msYellow}30` : `${msGreen}30`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + groupIndex * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

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

      {/* Skill Modal */}
      <SkillModal
        skill={activeSkill}
        onClose={() => setActiveSkill(null)}
      />
    </motion.section>
  )
}