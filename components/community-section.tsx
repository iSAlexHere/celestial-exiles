"use client"

import { motion } from "framer-motion"
import { MessageCircle, ExternalLink } from "lucide-react"

const rules = [
  "Respect all players and administrators",
  "No blocking resources, paths, or spawns",
  "Maintain distance from other player bases",
  "No exploits or game bugs abuse",
  "Help new players when possible",
]

export function CommunitySection() {
  return (
    <section id="community" className="relative py-32 overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Discord Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Join the Community
            </span>
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl font-normal tracking-wide text-foreground mb-6">
              Connect on
              <br />
              <span className="text-gradient">Discord</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join our Discord server to chat with fellow exiles, receive announcements, 
              participate in events, and get support when you need it.
            </p>

            <a
              href="https://discord.gg/KkTbEjrTDe"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 p-6 bg-[#5865F2]/10 border border-[#5865F2]/30 hover:border-[#5865F2]/60 hover:bg-[#5865F2]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-foreground font-medium mb-1">
                  Discord Server
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-[#5865F2] transition-colors">
                  Click to join
                  <ExternalLink className="w-3 h-3 inline ml-1" />
                </span>
              </div>
            </a>
          </motion.div>

          {/* Rules Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Guidelines
            </span>
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl font-normal tracking-wide text-foreground mb-8">
              Server
              <br />
              <span className="text-gradient">Rules</span>
            </h2>

            <div className="space-y-0 border border-border/50">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-card/20 hover:bg-card/40 border-b border-border/50 last:border-b-0 transition-colors duration-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-[family-name:var(--font-cinzel)] text-primary border border-primary/30">
                    {index + 1}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
