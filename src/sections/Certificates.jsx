import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { fadeUp, stagger } from "../utils/motion"

// IMPORT PDFs from assets
import udemyPDF from "../assets/web-dev-udemy.pdf"
import reactReduxPDF from "../assets/react-redux.pdf"
import sqlBasicPDF from "../assets/sql-basic.pdf"


export default function Certificates() {
  const certificates = [
    {
      title: "CSS, Bootstrap, JavaScript Web Development Course",
      org: "Udemy",
      date: "March 2025",
      file: udemyPDF,
      color: "msBlue"
    },
    {
      title: "React and Redux Certification",
      org: "KnowledgeGate",
      date: "Aug 2025",
      file: reactReduxPDF,
      color: "msGreen"
    },
    {
      title: "SQL (Basic)",
      org: "HackerRank",
      date: "March 2024",
      file: sqlBasicPDF,
      color: "msRed"
    }
  ]

  const colorMap = {
    msBlue: "bg-msBlue",
    msRed: "bg-msRed",
    msGreen: "bg-msGreen"
  }

  return (
    <section id="certificates" className="py-24 border-t">
      <div className="max-w-6xl mx-auto px-4">

        {/* SECTION HEADING — matches same style as Skills/Education */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Certifications
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              className="
                relative rounded-xl p-8
                bg-cardLight dark:bg-cardDark
                border border-slate-200/60 dark:border-slate-700/60
                shadow-lg hover:shadow-2xl transition-all
              "
            >
              {/* TOP COLOR BAR — same theme as other sections */}
              <div className={`absolute top-0 left-0 h-1 w-full ${colorMap[cert.color]} rounded-t-xl`} />

              <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>

              <p className="text-textMutedLight dark:text-textMutedDark">
                {cert.org}
              </p>

              <p className="text-sm mt-3">
                <span className="font-medium">Issued:</span> {cert.date}
              </p>

              <a
                href={cert.file}
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 text-msBlue font-medium hover:underline"
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}