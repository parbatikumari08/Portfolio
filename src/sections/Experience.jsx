import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { fadeUp } from "../utils/motion"


import internpeCert from "../assets/internpe.jpg"

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-10">Experience</h2>

        <div className="relative border-l border-msBlue pl-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className="
              mb-10 p-6 rounded-xl
              bg-cardLight dark:bg-cardDark
              border transition
            "
          >
            <span className="absolute -left-[9px] top-6 w-4 h-4 bg-msBlue rounded-full" />

            <h3 className="font-semibold">
              Web Developer Intern – InternPe
            </h3>

            <p className="text-sm text-textMutedLight dark:text-textMutedDark mb-3">
              Aug 2024 – Sep 2024
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 mb-4">
              <li>Built reusable components using React.js</li>
              <li>Improved UI consistency and component reusability</li>
              <li>Applied clean coding practices to enhance maintainability</li>
            </ul>

            {/* CERTIFICATE LINK (IMAGE IMPORTED FROM src/assets) */}
            <a
              href={internpeCert}
              target="_blank"
              className="text-msBlue font-medium hover:underline flex items-center gap-2"
            >
              View Completion Certificate
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
