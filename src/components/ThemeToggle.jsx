import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className={`relative p-3 rounded-xl ${
        isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'
      } transition-colors`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-purple-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
