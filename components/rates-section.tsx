"use client"

import { motion } from "framer-motion"

const rates = [
  { label: "XP Rate", value: "5x", highlight: true },
  { label: "Harvest", value: "5x", highlight: true },
  { label: "Crafting", value: "2x", highlight: false },
  { label: "Player DMG", value: "1.5x", highlight: false },
  { label: "NPC DMG", value: "1x", highlight: false },
  { label: "Thrall Speed", value: "3x", highlight: false },
  { label: "Pet Breeding", value: "3x", highlight: false },
  { label: "Stamina", value: "1.5x", highlight: false },
]

export function RatesSection() {
  return (
    <section id="rates" className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Server Configuration
          </span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-foreground mb-6">
            Balanced
            <br />
            <span className="text-gradient">Progression</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Carefully tuned rates for enjoyable gameplay without endless grinding
          </p>
        </motion.div>

        {/* Big X5 Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <span className="font-[family-name:var(--font-cinzel)] text-[120px] sm:text-[180px] lg:text-[220px] font-normal tracking-tight text-gradient glow-text">
              x5
            </span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Base Multiplier
            </span>
          </div>
        </motion.div>

        {/* Rates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/50 border border-border/50"
        >
          {rates.map((rate) => (
            <div
              key={rate.label}
              className={`p-6 lg:p-8 text-center transition-colors duration-300 ${
                rate.highlight 
                  ? "bg-primary/10 hover:bg-primary/20" 
                  : "bg-card/30 hover:bg-card/50"
              }`}
            >
              <span className={`block font-[family-name:var(--font-cinzel)] text-2xl lg:text-3xl tracking-wide mb-2 ${
                rate.highlight ? "text-primary" : "text-foreground"
              }`}>
                {rate.value}
              </span>
              <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                {rate.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Day/Night: 0.5x Slower</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Decay Timer: 14 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Purge: Weekends Only</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
