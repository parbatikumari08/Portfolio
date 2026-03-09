import { motion } from "framer-motion"
import profile from "../assets/profile.JPG"
import resumePDF from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 lg:pt-28">
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
                ? 'radial-gradient(circle, rgba(0,120,212,0.08), transparent 70%)' // Microsoft Blue
                : 'radial-gradient(circle, rgba(16,124,16,0.08), transparent 70%)', // Microsoft Green
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

      {/* Soft light streaks with Microsoft colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#0078D4]/5 to-transparent"
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
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#107C10]/5 to-transparent"
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

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - Optimized for all screen sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE — TEXT - Order 1 on mobile, stays left on desktop */}
          <div className="order-1 text-center lg:text-left">
           {/* HEADING */}
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-4 md:mb-6"
>
  {/* Name - Large and bold */}
  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
    <span className="text-[#0078D4]">Parbati Kumari</span>
  </div>
  
  {/* Title - Smaller than name with proper spacing */}
  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300 mt-2 sm:mt-3">
    Full-Stack Web Developer
  </div>
</motion.h1>
            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-lg mx-auto lg:mx-0 text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8"
            >
              I build modern, scalable, and interactive web applications using
              React, Node.js, and modern web technologies.
            </motion.p>

            {/* AVAILABILITY - Responsive badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8 justify-center lg:justify-start"
            >
              <span className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-[#E6F2E6] text-[#107C10] dark:bg-[#107C10]/20 dark:text-[#6BBF6B] font-medium">
                Open to Relocate
              </span>

              <span className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-[#E6F0FA] text-[#0078D4] dark:bg-[#0078D4]/20 dark:text-[#6CB4F5] font-medium">
                Immediate Joiner
              </span>

              <span className="px-3 py-1.5 text-xs sm:text-sm rounded-full bg-[#FFF4E5] text-[#FF8C00] dark:bg-[#FF8C00]/20 dark:text-[#FFB347] font-medium">
                Remote Ready
              </span>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="
                  px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl
                  bg-[#0078D4] text-white font-medium text-sm sm:text-base
                  shadow-lg hover:shadow-xl
                  hover:scale-105 transition-all duration-300
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
                rel="noopener noreferrer"
                className="
                  px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl
                  bg-[#D83B01] text-white font-medium text-sm sm:text-base
                  shadow-lg hover:shadow-xl
                  hover:scale-105 transition-all duration-300
                  border border-[#D83B01]/20
                "
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE — PROFILE IMAGE - Order 2 on mobile, stays right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-2 flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="relative group">
              {/* Animated gradient rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0078D4] via-[#107C10] to-[#FF8C00] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Secondary ring for depth */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#0078D4]/30 via-[#107C10]/30 to-[#FF8C00]/30 blur-2xl group-hover:blur-3xl transition-all duration-500" />

              {/* Image container with responsive sizing */}
              <div className="relative">
                <img
                  src={profile}
                  alt="Parbati Kumari"
                  className="
                    relative
                    w-48 h-48          /* Mobile */
                    sm:w-56 sm:h-56    /* Small tablets */
                    md:w-72 md:h-72    /* Medium screens */
                    lg:w-80 lg:h-80    /* Large screens */
                    xl:w-96 xl:h-96    /* Extra large screens */
                    rounded-full 
                    object-cover
                    border-4 border-white dark:border-gray-800
                    shadow-2xl
                    ring-4 ring-[#0078D4]/20
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
                
                {/* Microsoft-inspired corner accents */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#0078D4] to-[#107C10] rounded-full opacity-20 blur-md" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#FF8C00] to-[#D83B01] rounded-full opacity-20 blur-md" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Microsoft-style bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0078D4] via-[#107C10] to-[#FF8C00] opacity-40" />
    </section>
  )
}