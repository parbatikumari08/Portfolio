import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { fadeUp } from "../utils/motion"

import TechModal from "./TechModal"
import techInfo from "../data/techInfo"

const colorBarMap = {
  msBlue: "bg-msBlue",
  msRed: "bg-msRed",
  msYellow: "bg-msYellow",
  msGreen: "bg-msGreen",
}

export default function ProjectCard({ project }) {
  const [activeTech, setActiveTech] = useState(null)

  return (
    <>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="
          group rounded-xl overflow-hidden
          bg-cardLight dark:bg-cardDark
          border hover:shadow-2xl transition
        "
      >
        {/* Color bar */}
        <div className={`h-1 ${colorBarMap[project.color]}`} />

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-textMutedLight dark:text-textMutedDark mb-4">
            {project.description}
          </p>

          {/* Tech tags (CLICKABLE) */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTech(techInfo[t])}
                className="
                  text-xs px-2 py-1 rounded
                  bg-slate-100 dark:bg-slate-800
                  hover:bg-msRed hover:text-white
                  transition
                "
              >
                {t}
              </button>
            ))}
          </div>

          {/* Live demo button */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-msBlue font-medium
              hover:underline
            "
          >
            Open Live Project
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>

      {/* Tech modal */}
      <TechModal
        tech={activeTech}
        onClose={() => setActiveTech(null)}
      />
    </>
  )
}
