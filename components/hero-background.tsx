import type React from "react"

interface HeroBackgroundProps {
  children: React.ReactNode
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-periwinkle to-misty-rose relative overflow-hidden">
      {/* Decorative clouds - adjusted for mobile */}
      <div className="absolute top-20 md:top-40 left-10 md:left-20 w-40 md:w-64 h-40 md:h-64 bg-white rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 md:bottom-40 right-10 md:right-20 w-48 md:w-80 h-48 md:h-80 bg-champagne rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-[40%] md:top-[30%] right-[10%] md:right-[20%] w-32 md:w-40 h-32 md:h-40 bg-white rounded-full opacity-30 blur-3xl"></div>

      {/* Your content goes here */}
      {children}
    </main>
  )
}
