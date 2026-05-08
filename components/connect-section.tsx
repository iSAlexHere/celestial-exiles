"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Server, ArrowRight } from "lucide-react"

const SERVER_IP = "79.117.63.173:27015"
const SERVER_NAME = "Celestial Exiles"

export function ConnectSection() {
  const [copied, setCopied] = useState(false)

  const copyIP = async () => {
    await navigator.clipboard.writeText(SERVER_IP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const steps = [
    { step: "01", title: "Subscribe to Mods", description: "One-click download from our Steam collection" },
    { step: "02", title: "Copy Server IP", description: "Use the address below to connect directly" },
    { step: "03", title: "Begin Your Journey", description: "Enter the Exiled Lands and start building" },
  ]

  return (
    <section id="connect" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
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
            Ready to Join?
          </span>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-foreground mb-6">
            Enter
            <br />
            <span className="text-gradient">Celestial Exiles</span>
          </h2>
        </motion.div>

        {/* Server Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="relative p-8 lg:p-12 bg-card/50 border border-border/50 gradient-border">
            {/* Server Icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Server className="w-7 h-7 text-primary" />
              </div>
            </div>

            {/* Server Name */}
            <h3 className="font-[family-name:var(--font-cinzel)] text-2xl lg:text-3xl tracking-wide text-foreground text-center mb-8">
              {SERVER_NAME}
            </h3>

            {/* IP Box */}
            <div className="relative">
              <button
                onClick={copyIP}
                className="w-full group relative p-4 lg:p-6 bg-background/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Server IP
                  </span>
                  <div className="flex items-center gap-2 text-xs tracking-wider text-primary">
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Click to Copy</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-3 font-mono text-lg lg:text-xl text-foreground tracking-wide">
                  {SERVER_IP}
                </div>
              </button>
            </div>

            {/* Direct Connect */}
            <div className="mt-8 text-center">
              <a
                href={`steam://connect/${SERVER_IP}`}
                className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground glow-gold transition-all duration-300 hover:gap-5"
              >
                <span>Launch Game</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <span className="inline-block font-[family-name:var(--font-cinzel)] text-5xl text-primary/20 mb-4">
                {item.step}
              </span>
              <h4 className="font-[family-name:var(--font-cinzel)] text-lg tracking-wide text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
