import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '../icons'
import { cn } from '../../lib/utils'

interface SkillTextItemProps {
    name: string
    details?: string
    viewDetailsLabel?: string
}

export function SkillTextItem({ name, details, viewDetailsLabel = 'Détails' }: SkillTextItemProps) {
    const [expanded, setExpanded] = useState(false)

    if (!details) {
        return <span className="inline">{name}</span>
    }

    return (
        <div className="flex flex-col gap-1 py-1">
            <button
                onClick={() => setExpanded(!expanded)}
                className="text-left group flex items-start justify-between gap-2"
            >
                <span className="text-xs font-bold text-resume-text uppercase tracking-tight group-hover:text-resume-primary transition-colors">
                    {name}
                </span>

                <div
                    className={cn(
                        "flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-[0.1em] border transition-all duration-300",
                        expanded
                            ? "bg-resume-primary text-white border-resume-primary"
                            : "bg-resume-primary/5 text-resume-primary border-resume-primary/20 hover:border-resume-primary/50 group-hover:bg-resume-primary/10"
                    )}
                >
                    <span>{viewDetailsLabel}</span>
                    <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
                        <ChevronDownIcon className="w-2 h-2" />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-[11px] text-resume-text-secondary leading-relaxed bg-resume-primary/5 p-2 rounded-lg border border-resume-primary/10 my-1">
                            {details}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
