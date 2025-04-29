import type React from "react"

interface HeroBackgroundProps {
  children: React.ReactNode
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-periwinkle to-misty-rose relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-white rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-champagne rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-[30%] right-[20%] w-40 h-40 bg-white rounded-full opacity-30 blur-3xl"></div>

      {/* Your content goes here */}
      {children}
    </main>
  )
}
