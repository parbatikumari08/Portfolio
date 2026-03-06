import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { fadeUp } from "../utils/motion"
import internpeCert from "../assets/internpe.jpg"

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Experience
        </h2>

        <div className="relative border-l border-msBlue pl-8 space-y-12">

          {/* A V I E R O N  T E C H — NEW INTERNSHIP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className="
              p-6 rounded-xl relative
              bg-cardLight dark:bg-cardDark
              border shadow-sm transition
            "
          >
            <span className="absolute -left-[9px] top-6 w-4 h-4 bg-msGreen rounded-full" />

            <h3 className="font-semibold text-lg">
              MERN Stack Intern – Avieron Tech Pvt. Ltd.
            </h3>

            <p className="text-sm text-textMutedLight dark:text-textMutedDark mb-3">
              July 2025 – Jan 2026
            </p>

            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Assisting in basic frontend & backend tasks using the MERN stack.</li>
              <li>Working on UI updates, bug fixes, and feature enhancements.</li>
              <li>Following team workflows and improving coding best practices.</li>
            </ul>
          </motion.div>

          {/* I N T E R N P E  INTERNSHIP */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className="
              p-6 rounded-xl relative
              bg-cardLight dark:bg-cardDark
              border shadow-sm transition
            "
          >
            <span className="absolute -left-[9px] top-6 w-4 h-4 bg-msBlue rounded-full" />

            <h3 className="font-semibold text-lg">
              Web Developer Intern – InternPe
            </h3>

            <p className="text-sm text-textMutedLight dark:text-textMutedDark mb-3">
              Aug 2024 – Sep 2024
            </p>

            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Built reusable components using React.js.</li>
              <li>Improved UI consistency and component reusability.</li>
              <li>Applied clean coding practices to enhance maintainability.</li>
            </ul>

            {/* Certificate link */}
            <a
              href={internpeCert}
              target="_blank"
              className="inline-flex items-center gap-2 text-msBlue mt-4 font-medium hover:underline"
            >
              View Certificate <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
