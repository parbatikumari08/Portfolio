import { motion } from "framer-motion"
import { stagger } from "../utils/motion"

import ProjectCard from "../components/ProjectCard"
import projects from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-10">
          Projects
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
