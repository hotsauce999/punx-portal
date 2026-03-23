import { motion } from 'framer-motion'

export default function Hero({ isDark }) {
  return (
    <motion.div
      className="text-center space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >




      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="pt-8"
      >

      </motion.div>
    </motion.div>
  )
}
