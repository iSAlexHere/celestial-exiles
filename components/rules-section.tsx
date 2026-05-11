"use client"

import { motion } from "framer-motion"
import { Shield, Users, Hammer, MessageSquare, AlertTriangle, Heart, Home, Wrench, UserCheck } from "lucide-react"

const rules = [
  {
    icon: Heart,
    number: "01",
    title: "Respect Everyone",
    description:
      "Treat all players with respect. Harassment, hate speech, discrimination, or toxic behavior of any kind will result in an immediate ban. We are building a community — act like it.",
  },
  {
    icon: Shield,
    number: "02",
    title: "No Griefing",
    description:
      "This is a PvE server. Intentionally destroying or blocking another player's base, thralls, or progress is strictly forbidden. Help each other — not hinder.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "No Exploits or Cheats",
    description:
      "Using exploits, hacks, duplication bugs, or any other unintended mechanics to gain an advantage is not allowed. Report bugs to the admin team instead.",
  },
  {
    icon: Users,
    number: "04",
    title: "Fair Building",
    description:
      "Do not build in a way that blocks access to dungeons, resources, or key locations. Do not claim excessive land without using it. Admin reserves the right to remove structures that impact the server.",
  },
  {
    icon: Home,
    number: "05",
    title: "Building Limits",
    description:
      "Maximum base size is 15×15×15 tiles. This includes all connected structures and outposts per player or clan. Bases exceeding this limit will be given a warning before admin removal. One main base per player/clan.",
  },
  {
    icon: UserCheck,
    number: "06",
    title: "Thrall Limit",
    description:
      "Each player or clan is limited to a maximum of 10 active thralls placed in the world at any time. Excess thralls must be stored. This keeps server performance stable for everyone.",
  },
  {
    icon: Wrench,
    number: "07",
    title: "Workbench Limit",
    description:
      "Players may only place one workbench of each type (e.g. one Blacksmith's Bench, one Alchemist's Bench, etc.). Duplicating stations is not allowed and surplus benches will be removed by admins.",
  },
  {
    icon: MessageSquare,
    number: "08",
    title: "Mod & Suggestion Policy",
    description:
      "All mod requests must be submitted through the Discord suggestions channel. Requests will go through a player vote and final admin review. The admin team has the final say on all changes.",
  },
  {
    icon: AlertTriangle,
    number: "09",
    title: "Admin Decisions Are Final",
    description:
      "The admin team manages the server in good faith for the whole community. Decisions on rules, mods, and server settings are final. Repeated rule violations will result in a permanent ban without appeal.",
  },
]

export function RulesSection() {
  return (
    <section id="rules" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Code of Conduct
          </span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-foreground mb-6">
            Server
            <br />
            <span className="text-gradient">Rules</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            These rules exist to keep Celestial Exiles a fair and enjoyable place for everyone. Ignorance of the rules is not an excuse.
          </p>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 border border-border/50">
          {rules.map((rule, index) => {
            const Icon = rule.icon
            return (
              <motion.div
                key={rule.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative p-8 bg-card/20 hover:bg-card/40 transition-all duration-300 group"
              >
                {/* Rule number */}
                <span className="absolute top-6 right-6 font-[family-name:var(--font-cinzel)] text-4xl font-normal text-border/60 group-hover:text-primary/20 transition-colors duration-300 select-none">
                  {rule.number}
                </span>

                {/* Icon */}
                <div className="mb-5 inline-flex items-center justify-center w-10 h-10 border border-primary/20 bg-primary/5 group-hover:border-primary/40 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-primary/70" />
                </div>

                <h3 className="font-[family-name:var(--font-cinzel)] text-base font-normal tracking-wide text-foreground mb-3">
                  {rule.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {rule.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground/60 mt-8 tracking-wide"
        >
          Breaking these rules may result in a warning, temporary suspension, or permanent ban — at admin discretion.
        </motion.p>
      </div>
    </section>
  )
}
