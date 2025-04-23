import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Mail, Settings, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Mail className="h-6 w-6" />
            <span className="font-bold">Lumio</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/delivery" className="text-sm font-medium">
              Delivery Portal
            </Link>
            <Link href="/signature-templates" className="text-sm font-medium">
              Templates
            </Link>
            <Link href="/admin/signatures" className="text-sm font-medium">
              Admin
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User menu</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
