"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Star } from "lucide-react"

const mods = [
  { name: "Pippi", description: "Admin & customization tools", essential: true },
  { name: "LBPR", description: "1000+ building pieces", essential: true },
  { name: "Emberlight", description: "Professions & crafting expansion", essential: true },
  { name: "Savage Steel", description: "Epic weapons & armor", essential: true },
  { name: "Age of Calamitous", description: "Factions, NPCs & extensive content", essential: true },
  { name: "Fashionist", description: "Appearance customization", essential: false },
  { name: "Northern Timber", description: "Nordic building style", essential: false },
  { name: "Ravencrest Couriers", description: "Player mail system", essential: false },
  { name: "Unlock Plus", description: "Unlock all feats", essential: false },
  { name: "Hosav&apos;s Pets", description: "Extended pet options", essential: false },
  { name: "Barbarian Barber", description: "Character customization", essential: false },
  { name: "Better Thralls", description: "Enhanced companions", essential: false },
  { name: "RA: Customization", description: "Extended character editor", essential: false },
  { name: "Immersive Armor", description: "Visual armor improvements", essential: false },
  { name: "DungeonMasterTools", description: "Event management", essential: false },
]

export function ModsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayMods = showAll ? mods : mods.slice(0, 6)

  return (
    <section id="mods" className="relative py-32 overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

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
            Curated Collection
          </span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-foreground mb-6">
            30+ Premium
            <br />
            <span className="text-gradient">Modifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Carefully selected mods that enhance without breaking game balance
          </p>
        </motion.div>

        {/* Mods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 border border-border/50 mb-8">
          <AnimatePresence mode="wait">
            {displayMods.map((mod, index) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative p-6 bg-card/20 hover:bg-card/40 transition-all duration-300"
              >
                {/* Essential Badge */}
                {mod.essential && (
                  <Star className="absolute top-4 right-4 w-4 h-4 text-primary fill-primary" />
                )}

                <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {mod.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {mod.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
          >
            {showAll ? "Show Less" : `View All ${mods.length} Mods`}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
          </button>

          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=YOUR_COLLECTION_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase text-primary border border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            Steam Workshop
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs text-muted-foreground">
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span>Essential Mods</span>
        </div>
      </div>
    </section>
  )
}
