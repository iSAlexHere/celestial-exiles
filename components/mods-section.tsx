"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink } from "lucide-react"

const mods = [
  { name: "Fashionist - Enhanced", version: "v5.0.2", description: "Armor & weapon style customization with color picker", workshopId: "3720921242" },
  { name: "Level 240 [Enhanced]", version: "v1.0.0", description: "Extended level cap up to 240", workshopId: "3720663670" },
  { name: "RSS_Stacks 10k", version: "v1.0.0", description: "Stack sizes increased up to 10,000", workshopId: "3720847422" },
  { name: "The Damage Meter", version: "v5.0.3", description: "Real-time damage tracking & combat stats", workshopId: "3719585133", author: "Xevyr" },
  { name: "Lore & Loot Highlight", version: "v1.0.0", description: "Highlights lore items & lootable containers", workshopId: "3718655125", author: "Xevyr" },
  { name: "Simple Modlist", version: "v5.0.1", description: "In-game mod list viewer", workshopId: "3719546290", author: "Xevyr" },
  { name: "Exotic Oddities - Enhanced", version: "v1.0.0", description: "Backpacks, mounts, special items & QoL additions", workshopId: "3720425971" },
  { name: "Player DBNO System", version: "v1.0.0", description: "Down-but-not-out revival system for PvE", workshopId: "3718882569", author: "Xevyr" },
  { name: "Xevyr's Hearthstone", version: "v5.0.0", description: "Teleport home with a hearthstone item", workshopId: "3719642461", author: "Xevyr" },
  { name: "Proximity Party", version: "v5.0.2", description: "Auto-party with nearby players", workshopId: "3718878457", author: "Xevyr" },
  { name: "Simple Minimap", version: "v5.1.1", description: "Clean minimap overlay with markers", workshopId: "3719513784", author: "Xevyr" },
  { name: "Full Body Loot", version: "Legacy", description: "Loot full body from defeated enemies", workshopId: "2967195691" },
  { name: "Unlock Plus - Enhanced", version: "v2.0.1", description: "Unlock all feats & recipes", workshopId: "3720948133" },
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
            {mods.length} Premium
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
              <motion.a
                key={mod.name}
                href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.workshopId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative p-6 bg-card/20 hover:bg-card/40 transition-all duration-300"
              >
                {/* Version Badge */}
                <span className="absolute top-4 right-4 text-[10px] tracking-wider uppercase text-primary/70 border border-primary/20 px-2 py-0.5">
                  {mod.version}
                </span>

                <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors pr-16">
                  {mod.name}
                </h3>
                {mod.author && (
                  <span className="text-[11px] text-primary/60 mb-1 block">by {mod.author}</span>
                )}
                <p className="text-sm text-muted-foreground">
                  {mod.description}
                </p>

                <ExternalLink className="absolute bottom-4 right-4 w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-all duration-300" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {mods.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              {showAll ? "Show Less" : `View All ${mods.length} Mods`}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
