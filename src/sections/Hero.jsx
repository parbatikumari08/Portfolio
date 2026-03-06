import { motion } from "framer-motion"
import profile from "../assets/profile.JPG"
import resumePDF from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-36">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Subtle floating particles - unique to Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              width: i * 8 + 20,
              height: i * 8 + 20,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(0,164,239,0.08), transparent 70%)'
                : 'radial-gradient(circle, rgba(127,186,0,0.08), transparent 70%)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Soft light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-msBlue/5 to-transparent"
          animate={{
            x: [0, 100, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-msGreen/5 to-transparent"
          animate={{
            x: [0, -100, 0],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

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

            {/* AVAILABILITY - Now with Remote Ready */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
            >
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                Open to Relocate
              </span>

              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                Immediate Joiner
              </span>

              <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
                Remote Ready
              </span>
            </motion.div>

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
                  bg-msBlue/90 text-white font-medium
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
    bg-msRed/80 text-white font-medium
    hover:scale-105 transition
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