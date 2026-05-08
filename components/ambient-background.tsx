"use client"

import { useEffect, useRef } from "react"

interface Ember {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  flickerSpeed: number
  flickerOffset: number
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let embers: Ember[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    const createEmbers = () => {
      const count = Math.floor((canvas.width * canvas.height) / 25000)
      embers = Array.from({ length: Math.min(count, 80) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -(Math.random() * 0.4 + 0.1),
        opacity: Math.random() * 0.5 + 0.1,
        flickerSpeed: Math.random() * 0.02 + 0.005,
        flickerOffset: Math.random() * Math.PI * 2,
      }))
    }

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 1

      for (const ember of embers) {
        ember.x += ember.speedX + Math.sin(time * 0.01 + ember.flickerOffset) * 0.15
        ember.y += ember.speedY

        // Wrap around
        if (ember.y < -10) {
          ember.y = canvas.height + 10
          ember.x = Math.random() * canvas.width
        }
        if (ember.x < -10) ember.x = canvas.width + 10
        if (ember.x > canvas.width + 10) ember.x = -10

        const flicker = Math.sin(time * ember.flickerSpeed + ember.flickerOffset) * 0.3 + 0.7
        const alpha = ember.opacity * flicker

        // Ember glow
        const gradient = ctx.createRadialGradient(
          ember.x, ember.y, 0,
          ember.x, ember.y, ember.size * 3
        )
        gradient.addColorStop(0, `rgba(218, 165, 80, ${alpha})`)
        gradient.addColorStop(0.4, `rgba(180, 100, 40, ${alpha * 0.5})`)
        gradient.addColorStop(1, `rgba(120, 50, 20, 0)`)

        ctx.beginPath()
        ctx.arc(ember.x, ember.y, ember.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Bright core
        ctx.beginPath()
        ctx.arc(ember.x, ember.y, ember.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 200, 100, ${alpha * 0.8})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createEmbers()
    animate()

    const resizeObserver = new ResizeObserver(() => {
      resize()
      createEmbers()
    })
    resizeObserver.observe(document.documentElement)

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Ember particles canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.6 }}
      />

      {/* Ambient fog layers */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        {/* Top fog */}
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-amber-950/[0.03] to-transparent" />

        {/* Slow drifting fog patches */}
        <div className="ambient-fog absolute top-1/4 -left-1/4 w-[80vw] h-[50vh] bg-amber-900/[0.02] rounded-full blur-[120px]" />
        <div className="ambient-fog-reverse absolute bottom-1/3 -right-1/4 w-[70vw] h-[40vh] bg-orange-900/[0.02] rounded-full blur-[100px]" />
        <div className="ambient-fog absolute top-2/3 left-1/3 w-[50vw] h-[30vh] bg-red-950/[0.015] rounded-full blur-[140px]" />
      </div>
    </>
  )
}
