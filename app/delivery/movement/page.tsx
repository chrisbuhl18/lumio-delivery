import type { Metadata } from "next"
import { SignatureDeliveryPage } from "@/components/signature-delivery-page"
import { movementEmployees } from "@/data/movement-employees"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette, ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Movement Email Signatures | Lumio",
  description: "Access and customize your Movement email signature",
}

export default function MovementDeliveryPage() {
  const companyInfo = {
    name: "Movement",
    logo: "/dynamic-motion-logo.png",
    primaryColor: "#4F46E5",
    secondaryColor: "#818CF8",
    // Assign a specific template for this client
    assignedTemplate: "template-1", // Custom template specific to Movement
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-seasalt">
        <div className="container max-w-7xl py-8">
          <div className="mb-6 flex items-center">
            <Button variant="ghost" size="icon" asChild className="mr-4">
              <Link href="/delivery">
                <ArrowLeft className="h-4 w-4 text-english-violet" />
              </Link>
            </Button>
            <h1 className="heading-md text-english-violet">Movement Email Signatures</h1>
          </div>
          <div className="flex justify-end mb-4">
            <Link href="/signature-templates">
              <Button variant="outline" size="sm" className="flex items-center rounded-full">
                <Palette className="mr-2 h-4 w-4" />
                Signature Templates
              </Button>
            </Link>
          </div>
          <SignatureDeliveryPage companyInfo={companyInfo} employees={movementEmployees} />
        </div>
      </main>
      <footer className="border-t py-6 md:py-0 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-english-violet/80 md:text-left">
            © 2025 Lumio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-english-violet/80 underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-english-violet/80 underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
