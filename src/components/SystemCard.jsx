import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function SystemCard({ system, isDark }) {
  const Icon = system.icon

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative cursor-pointer"
      onClick={() => window.open(system.link, '_blank')}
    >
      <div className={`relative p-6 rounded-2xl ${isDark
        ? 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-purple-500/30'
        : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
        } transition-all duration-300 h-full`}>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${system.color} p-3 mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
            <Icon className="w-full h-full text-white" />
          </div>

          <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
            }`}>
            {system.name}
          </h3>

          <p className={`min-h-[45px] text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            {system.description}
          </p>

          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${isDark
              ? 'bg-purple-500/10 text-purple-400'
              : 'bg-purple-100 text-purple-600'
              }`}>
              {system.stats}
            </span>

            <motion.div
              whileHover={{ x: 5 }}
              className={`flex items-center gap-1 text-sm font-medium text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-purple-400' : 'text-purple-600'
                }`}
            >
              Launch
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
      </div>
    </motion.div>
  )
}
