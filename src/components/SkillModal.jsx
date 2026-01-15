import { motion, AnimatePresence } from "framer-motion"

export default function SkillModal({ skill, onClose }) {
  return (
    <AnimatePresence>
      {skill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-lg w-full mx-4
              rounded-2xl p-6
              bg-cardLight dark:bg-cardDark
              shadow-2xl
            "
          >
            <h3 className="text-xl font-semibold mb-3 text-msBlue">
              {skill.title}
            </h3>

            <p className="text-sm text-textMutedLight dark:text-textMutedDark mb-4">
              {skill.description}
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Why it matters:</strong>{" "}
                {skill.importance}
              </p>
              <p>
                <strong>How I used it:</strong>{" "}
                {skill.usage}
              </p>
            </div>

            <button
              onClick={onClose}
              className="
                mt-6 px-5 py-2 rounded-lg
                bg-msBlue text-white
                hover:opacity-90 transition
              "
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
