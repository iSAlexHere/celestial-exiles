"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#rates", label: "Rates" },
  { href: "#mods", label: "Mods" },
  { href: "#connect", label: "Connect" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Celestial Exiles"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-[family-name:var(--font-cinzel)] text-xl tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">
              CELESTIAL
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="hidden sm:block font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] text-muted-foreground">
              EXILES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://discord.gg/KkTbEjrTDe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs tracking-[0.15em] uppercase border border-[#5865F2]/50 text-[#5865F2] hover:bg-[#5865F2]/10 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Discord
            </a>
            <Link
              href="#connect"
              className="inline-flex items-center px-6 py-2.5 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 glow-gold"
            >
              Enter Server
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 flex flex-col gap-3"
              >
                <a
                  href="https://discord.gg/KkTbEjrTDe"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.2em] uppercase border border-[#5865F2]/50 text-[#5865F2]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discord
                </a>
                <Link
                  href="#connect"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center px-6 py-3 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground glow-gold"
                >
                  Enter Server
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
