"use client"

import { motion } from "framer-motion"
import { Shield, Swords, Building2, Sparkles, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Pure PVE",
    description: "Build and explore without fear. Your creations are always protected.",
  },
  {
    icon: Swords,
    title: "Enhanced Combat",
    description: "New weapons, moves, and mechanics that redefine the battlefield.",
  },
  {
    icon: Building2,
    title: "Unlimited Building",
    description: "Over 5000 additional pieces. If you can dream it, you can build it.",
  },
  {
    icon: Sparkles,
    title: "Unique Content",
    description: "Custom NPCs, rare pets, and exclusive gear found nowhere else.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join fellow exiles ready to share, help, and conquer together.",
  },
  {
    icon: Clock,
    title: "Always Online",
    description: "Dedicated high-performance server. Available 24/7, every day.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden noise">
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
            What Sets Us Apart
          </span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-foreground mb-6">
            The Ultimate
            <br />
            <span className="text-gradient">PVE Experience</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-8 lg:p-10 bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-xs tracking-wider text-muted-foreground/30 font-mono">
                0{index + 1}
              </span>
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-6 text-primary">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-[family-name:var(--font-cinzel)] text-xl tracking-wide text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
