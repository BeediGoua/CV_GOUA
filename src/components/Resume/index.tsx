import { motion } from 'framer-motion'

import { SingleColumnResume } from './SingleColumnResume'

export function Resume() {
  // No longer using Sidebar/MainContent; we render SingleColumnResume directly with fade-in
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-resume-bg-card rounded-lg shadow-2xl overflow-hidden dark:border dark:border-resume-primary/10"
    >
      <SingleColumnResume />
    </motion.div>
  )
}
