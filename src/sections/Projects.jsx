import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { stagger } from "../utils/motion"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

import projects from "../data/projects"

export default function Projects() {
  const sectionRef = useRef(null)
  const [expandedId, setExpandedId] = useState(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Microsoft colors
  const msRed = "#F25022"
  const msGreen = "#7FBA00"
  const msBlue = "#00A4EF"
  const msYellow = "#FFB900"

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <motion.section 
      id="projects" 
      className="py-16 sm:py-20 md:py-24 border-t relative overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Premium animated background - responsive sizing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs - smaller on mobile */}
        <motion.div 
          className="absolute -top-40 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-5 sm:opacity-10"
          style={{ 
            background: `radial-gradient(circle, ${msRed}, transparent 70%)`,
            filter: "blur(40px)"
          }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-5 sm:opacity-10"
          style={{ 
            background: `radial-gradient(circle, ${msBlue}, transparent 70%)`,
            filter: "blur(40px)"
          }}
          animate={{ 
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid pattern - hide on very small screens */}
        <div className="hidden sm:block absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section header - responsive */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div 
            className="h-12 w-1.5 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #F25022, #7FBA00, #00A4EF, #FFB900)'
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: 40 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <div>
             <h2 
           className="text-3xl md:text-4xl font-bold tracking-tight"
          >
              Featured Projects
            </h2>
          </div>
        </motion.div>

        {/* Project grid - fully responsive */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            // Assign a color based on project title
            let projectColor = msBlue;
            if (project.title.includes("Travel")) projectColor = msGreen;
            else if (project.title.includes("Movie")) projectColor = msRed;
            else if (project.title.includes("Pastebin")) projectColor = msYellow;
            
            // Project emoji based on title
            let projectEmoji = "💻";
            if (project.title.includes("Travel")) projectEmoji = "✈️";
            else if (project.title.includes("Movie")) projectEmoji = "🎬";
            else if (project.title.includes("Pastebin")) projectEmoji = "📋";

            const isExpanded = expandedId === project.id;
            const description = project.description || "";
            const shouldTruncate = description.length > 80; // Smaller threshold on mobile
            const displayDescription = isExpanded 
              ? description 
              : shouldTruncate 
                ? description.substring(0, 80) + "..."
                : description;
            
            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1
                    }
                  }
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full"
              >
                <div className="relative h-full">
                  {/* Premium card with gradient border */}
                  <div className="absolute -inset-0.5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${projectColor}, transparent)`
                    }}
                  />
                  
                  {/* Main card */}
                  <div className="relative h-full rounded-lg sm:rounded-xl bg-cardLight dark:bg-cardDark border border-slate-200/60 dark:border-slate-700/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    
                    {/* Top colored bar */}
                    <motion.div 
                      className="absolute top-0 left-0 h-1"
                      style={{ backgroundColor: projectColor }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    />

                    {/* Project image area - responsive height */}
                    <div className="relative h-36 sm:h-40 md:h-44 lg:h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                      {/* Abstract representation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl sm:text-6xl md:text-7xl font-bold opacity-20">{projectEmoji}</span>
                      </div>
                      
                      {/* Colored overlay */}
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{ backgroundColor: projectColor }}
                      />
                      
                      {/* Animated pattern - hide on very small screens */}
                      <svg className="absolute inset-0 w-full h-full opacity-30 hidden xs:block">
                        <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill={projectColor} />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${index})`} />
                      </svg>

                      {/* Project icon */}
                      <div className="absolute bottom-2 right-2 text-2xl sm:text-3xl md:text-4xl">
                        {projectEmoji}
                      </div>
                    </div>

                    {/* Content - responsive padding */}
                    <div className="p-4 sm:p-5 md:p-6">
                      {/* Title */}
                      <motion.h3 
                        className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2"
                        whileHover={{ x: 3 }}
                        style={{ color: projectColor }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description with Read More - responsive text */}
                      <div className="mb-3 sm:mb-4">
                        <p className="text-xs sm:text-sm text-textMutedLight dark:text-textMutedDark">
                          {displayDescription}
                        </p>
                        {shouldTruncate && (
                          <motion.button
                            onClick={() => toggleExpand(project.id)}
                            className="flex items-center gap-1 text-xs font-medium mt-1.5 sm:mt-2"
                            style={{ color: projectColor }}
                            whileHover={{ x: 3 }}
                          >
                            {isExpanded ? (
                              <span className="flex items-center gap-1">
                                Read Less <ChevronUp size={12} sm:size={14} />
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                Read More <ChevronDown size={12} sm:size={14} />
                              </span>
                            )}
                          </motion.button>
                        )}
                      </div>

                      {/* Tech stack chips - responsive */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.tech?.slice(0, 4).map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.tech?.length > 4 && (
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action buttons - responsive */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs sm:text-sm font-medium"
                            style={{ color: projectColor }}
                            whileHover={{ x: 3 }}
                          >
                            Live Demo <ExternalLink size={12} sm:size={14} />
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs sm:text-sm text-textMutedLight dark:text-textMutedDark hover:text-msBlue transition-colors"
                            whileHover={{ x: 3 }}
                          >
                            <Github size={12} sm:size={14} /> Code
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Decorative corner - responsive size */}
                    <motion.div 
                      className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-b-2 border-r-2 rounded-br opacity-30"
                      style={{ borderColor: projectColor }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Decorative elements - responsive sizing */}
        <motion.div 
          className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-20 sm:w-40 h-20 sm:h-40 border rounded-full"
          style={{ borderColor: `${msBlue}10` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-20 sm:w-40 h-20 sm:h-40 border rounded-full"
          style={{ borderColor: `${msYellow}10` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Add custom breakpoint for extra small devices */}
      <style jsx>{`
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }
      `}</style>
    </motion.section>
  )
}