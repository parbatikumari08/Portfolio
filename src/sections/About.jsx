import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section 
      id="about" 
      className="py-24 border-t relative overflow-hidden"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Microsoft logo colors in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#F25022' }} // MS Red
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: '#7FBA00' }} // MS Green
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: '#00A4EF' }} // MS Blue
          animate={{ 
            scale: [1, 1.2, 1],
            x: ['-50%', '-40%', '-50%'],
            y: ['-50%', '-60%', '-50%'],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 rounded-full opacity-10"
          style={{ backgroundColor: '#FFB900' }} // MS Yellow
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          {/* Multi-colored bar */}
          <motion.div 
            className="h-10 w-1.5 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, #F25022, #7FBA00, #00A4EF, #FFB900)'
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: 40 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <h2 
           className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            About
          </h2>
        </motion.div>

        {/* Profile card with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="
            relative rounded-xl p-8
            bg-cardLight dark:bg-cardDark
            border shadow-sm hover:shadow-xl
            transition-all duration-300
            overflow-hidden group
          "
        >
          {/* Animated accent bar with Microsoft 4-color gradient */}
          <motion.div 
            className="absolute top-0 left-0 h-full w-1 rounded-l-xl"
            style={{
              background: 'linear-gradient(to bottom, #F25022, #7FBA00, #00A4EF, #FFB900)'
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Background pattern with all 4 colors */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(242,80,34,0.05), transparent 30%), radial-gradient(circle at 80% 30%, rgba(127,186,0,0.05), transparent 30%), radial-gradient(circle at 40% 70%, rgba(0,164,239,0.05), transparent 30%), radial-gradient(circle at 70% 80%, rgba(255,185,0,0.05), transparent 30%)'
              }}
            />
          </div>

          {/* Content with animated reveal */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <p className="max-w-3xl text-textMutedLight dark:text-textMutedDark leading-relaxed">
              I am a B.Tech Computer Science and Engineering student with
              strong hands-on experience in building responsive and scalable
              web applications. My work focuses on full-stack development
              using React.js, Node.js, Express.js, and MongoDB, with practical
              experience in RESTful API development, JWT-based authentication,
              and database design. I have also worked with third-party APIs,
              application deployment, and modern UI practices. I am actively
              seeking entry-level full-stack or frontend developer roles where
              I can contribute to real-world products and continue to grow as
              a software engineer.
            </p>
          </motion.div>

          {/* Bottom gradient line with all 4 colors */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-[1px]"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div 
              className="w-full h-full"
              style={{
                background: 'linear-gradient(to right, transparent, #F25022, #7FBA00, #00A4EF, #FFB900, transparent)'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}