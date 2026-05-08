"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-cinzel)] text-lg tracking-[0.2em] text-foreground">
              CELESTIAL
            </span>
            <span className="w-px h-4 bg-border" />
            <span className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] text-muted-foreground">
              EXILES
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-xs tracking-[0.15em] uppercase">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#rates" className="text-muted-foreground hover:text-primary transition-colors">
              Rates
            </Link>
            <Link href="#mods" className="text-muted-foreground hover:text-primary transition-colors">
              Mods
            </Link>
            <Link href="#connect" className="text-muted-foreground hover:text-primary transition-colors">
              Connect
            </Link>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Celestial Exiles. Not affiliated with Funcom.
          </p>
          <p className="text-[10px] text-muted-foreground/40 mt-2 tracking-wider">
            Conan Exiles is a trademark of Funcom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
