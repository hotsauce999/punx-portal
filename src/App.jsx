import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import SystemCard from './components/SystemCard'
import { Lock, Eye, EyeOff, LogOut } from 'lucide-react'
import {
  Clock,
  Receipt,
  Wallet,
  ArrowRightLeft,
  Zap,
  Shield,
  BarChart3,
  FileText,
  CreditCard,
  Dice6
} from 'lucide-react'

const CORRECT_PASSCODE = 'punx@2026!'

const systems = [
  {
    id: 'dtr',
    name: 'DTR Tracker',
    description: 'Daily Time Record tracking and attendance management system',
    icon: Clock,
    link: 'https://punx-dtr-tracker.vercel.app/',
    color: 'from-purple-500 to-violet-600',
    stats: 'Real-time monitoring'
  },
  {
    id: 'accounts',
    name: 'Accounts Flow',
    description: 'Streamlined account management and financial workflow system',
    icon: ArrowRightLeft,
    link: 'https://accounts-flow.punxai.online/',
    color: 'from-cyan-500 to-blue-600',
    stats: 'Automated processes'
  },
  {
    id: 'expense',
    name: 'Expense Tracker',
    description: 'Comprehensive expense tracking and budget management tool',
    icon: Wallet,
    link: 'https://expenses-tracker.punxai.online/',
    color: 'from-emerald-500 to-teal-600',
    stats: 'Smart analytics'
  },
  {
    id: 'receipt',
    name: 'Receipt Liquidation',
    description: 'Streamlined receipt processing and liquidation workflow',
    icon: Receipt,
    link: 'https://liquidator-phi.vercel.app/',
    color: 'from-amber-500 to-orange-600',
    stats: 'Quick approvals'
  },
  {
    id: 'subscription',
    name: 'Subscription Management',
    description: 'Manage recurring subscriptions and billing cycles',
    icon: CreditCard,
    link: 'https://subscription-tracker.punxai.online/',
    color: 'from-rose-500 to-pink-600',
    stats: 'Automated billing'
  },
  // {
  //   id: 'randomizer',
  //   name: 'Live Raffle',
  //   description: 'Random winner selection and live raffle system',
  //   icon: Dice6,
  //   link: 'https://punx-randomizer.vercel.app/',
  //   color: 'from-yellow-500 to-amber-600',
  //   stats: 'Fair & random'
  // }
]

const features = [
  { icon: Zap, label: 'Lightning Fast', desc: 'Optimized performance' },
  { icon: Shield, label: 'Secure', desc: 'Enterprise-grade security' },
  { icon: BarChart3, label: 'Analytics', desc: 'Real-time insights' },
  { icon: FileText, label: 'Reports', desc: 'Comprehensive reporting' },
]

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('portal_auth') === 'true'
  })
  const [passcode, setPasscode] = useState('')
  const [showPasscode, setShowPasscode] = useState(false)
  const [error, setError] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved ? saved === 'dark' : true
    return dark
  })

  const handlePasscodeSubmit = (e) => {
    e.preventDefault()
    if (passcode === CORRECT_PASSCODE) {
      setIsAuthenticated(true)
      localStorage.setItem('portal_auth', 'true')
    } else {
      setError(true)
      setPasscode('')
      setTimeout(() => setError(false), 1500)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('portal_auth')
  }

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl w-full max-w-md mx-4"
          style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white mx-auto mb-4">
              P
            </div>
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="text-gray-400">Enter your passcode to access the portal</p>
          </div>
          <form onSubmit={handlePasscodeSubmit}>
            <div className="relative mb-4">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPasscode ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode"
                  className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-200 ${error ? 'border-red-500 animate-shake' : 'border-gray-700 focus:border-purple-500'} bg-gray-800`}
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPasscode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4 text-center">Incorrect passcode. Please try again.</p>}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Enter Portal
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a] text-gray-100' : 'bg-white text-gray-900'
      }`}>
      <div className="fixed inset-0 bg-grid pointer-events-none"></div>

      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50">
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="glass mx-4 mt-4 rounded-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                  P
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  PUNX
                </span>
              </motion.div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-6">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="hidden lg:flex items-center gap-2 text-sm"
                    >
                      <feature.icon className="w-4 h-4 text-purple-500" />
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {feature.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={handleLogout}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Logout</span>
                </button>
                <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
              </div>
            </div>
          </motion.nav>
        </header>

        <main className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Hero isDark={isDark} />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                  Our Systems
                </h2>
                <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  Access all your business tools in one centralized hub
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {systems.map((system, idx) => (
                  <motion.div
                    key={system.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                  >
                    <SystemCard system={system} isDark={isDark} />
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </div>
        </main>

        <footer className="py-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>
              &copy; 2026 PUNX Systems. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
