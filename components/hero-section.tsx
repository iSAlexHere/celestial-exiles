"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Celestial Exiles"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-primary/50" />
          <span className="text-xs tracking-[0.3em] uppercase text-primary">
            PVE Server • X5 Rates • 30+ Mods
          </span>
          <span className="w-8 h-px bg-primary/50" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-cinzel)] text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-[0.05em] text-foreground mb-4"
        >
          CELESTIAL
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-[0.15em] text-gradient mb-8"
        >
          EXILES
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Enter the Exiled Lands. Build empires. Forge legends.
          <br className="hidden sm:block" />
          <span className="text-foreground/80">Your sanctuary awaits.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#connect"
            className="group relative inline-flex items-center px-10 py-4 text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground overflow-hidden transition-all duration-500 glow-gold"
          >
            <span className="relative z-10">Enter Server</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          
          <a
            href="https://discord.gg/KkTbEjrTDe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm tracking-[0.2em] uppercase border border-[#5865F2]/50 text-[#5865F2] hover:bg-[#5865F2]/10 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Join Discord
          </a>

          <Link
            href="#features"
            className="inline-flex items-center px-10 py-4 text-sm tracking-[0.2em] uppercase border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Discover More
          </Link>
        </motion.div>

        {/* Server Info Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-16"
        >
          {[
            { label: "40 Slots", value: "Population" },
            { label: "24/7", value: "Uptime" },
            { label: "PVE", value: "Mode" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <span className="text-xs tracking-wider uppercase text-muted-foreground">{item.value}</span>
              <span className="w-px h-3 bg-border" />
              <span className="text-xs tracking-wider uppercase text-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#features"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
