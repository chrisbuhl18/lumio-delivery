import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export default function Logo({ size = "medium", className }: LogoProps) {
  const sizeClasses = {
    small: "h-8",
    medium: "h-10",
    large: "h-12",
  }

  const logoHeight = {
    small: 32,
    medium: 40,
    large: 48,
  }

  // Calculate width based on the original aspect ratio (approximately 3.5:1)
  const logoWidth = Math.round(logoHeight[size] * 3.5)

  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/lumio-logo-pale-violet.png"
        alt="Lumio"
        width={logoWidth}
        height={logoHeight[size]}
        className={cn(sizeClasses[size], "w-auto")}
        priority
      />
    </div>
  )
}
