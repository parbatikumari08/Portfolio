import { useState } from "react"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "../utils/motion"

import SkillModal from "../components/SkillModal"
import skillsInfo from "../data/skillsInfo"

const colorMap = {
  msBlue: "text-msBlue",
  msRed: "text-msRed",
  msYellow: "text-msYellow",
  msGreen: "text-msGreen",
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

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Technical Skills
        </h2>

        <motion.div
  variants={stagger}
  initial="hidden"
  animate="visible"
  className="grid md:grid-cols-2 gap-8"
>

          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="
                rounded-xl p-6
                bg-cardLight dark:bg-cardDark
                border border-slate-200/60 dark:border-slate-700/60
                shadow-lg hover:shadow-2xl
                transition
              "
            >
              <h3
                className={`font-semibold mb-4 text-lg ${colorMap[group.color]}`}
              >
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setActiveSkill(skillsInfo[skill])}
                    className="
                      text-sm px-3 py-1 rounded-full
                      bg-slate-100 dark:bg-slate-800
                      text-slate-700 dark:text-slate-200
                      hover:bg-msBlue hover:text-white
                      transition
                      shadow-sm
                    "
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skill Modal */}
      <SkillModal
        skill={activeSkill}
        onClose={() => setActiveSkill(null)}
      />
    </section>
  )
}
