"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // Remove authentication cookies
    Cookies.remove("lumio-auth")
    Cookies.remove("lumio-client-auth")

    // Redirect to home page
    router.push("/")
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2">
      <LogOut className="h-4 w-4" />
      <span>Logout</span>
    </Button>
  )
}
