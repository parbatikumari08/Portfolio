import { motion } from "framer-motion"
import profile from "../assets/profile.JPG"
import resumePDF from "../assets/resume.pdf";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-36">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* WRAPPER: TEXT LEFT – IMAGE RIGHT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE — TEXT */}
          <div className="text-center md:text-left">
            {/* HEADING */}
            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-6xl font-bold leading-tight mb-6"
>
  <span className="whitespace-nowrap">
    Hi, I’m <span className="text-msBlue">Parbati Kumari</span>
  </span>

  <br />

  <span className="text-black dark:text-white whitespace-nowrap">
    Full-Stack Web Developer
  </span>
</motion.h1>
            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg text-lg text-textMutedLight dark:text-textMutedDark mb-8"
            >
              I build modern, scalable, and interactive web applications using
              React, Node.js, and modern web technologies.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className="
                  px-6 py-3 rounded-xl
                  bg-msBlue text-white font-medium
                  shadow-lg
                  hover:scale-105 transition
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-white/20
                  before:translate-x-[-100%] hover:before:translate-x-[100%]
                  before:transition before:duration-700
                "
              >
                View Projects
              </a>

              <a
  href={resumePDF}
  target="_blank"
  className="
    px-6 py-3 rounded-xl border
    bg-cardLight dark:bg-cardDark
    hover:border-msBlue hover:scale-105 transition
  "
>
  Download Resume
</a>

            </motion.div>
          </div>

          {/* RIGHT SIDE — PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center md:justify-end mt-6 md:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-msBlue via-msGreen to-msYellow blur-md opacity-70" />

              <img
                src={profile}
                alt="Parbati Kumari"
                className="
                  relative w-52 h-52 md:w-64 md:h-64
                  rounded-full object-cover
                  border-4 border-cardLight dark:border-cardDark
                  shadow-2xl
                "
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
