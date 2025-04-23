import type { Metadata } from "next"
import { SignatureDeliveryPage } from "@/components/signature-delivery-page"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

// Mock data for Globex employees
const globexEmployees = [
  {
    id: "1",
    name: "Robert Johnson",
    email: "robert.johnson@globex.com",
    title: "Marketing Director",
    department: "Marketing",
    phone: "+1 (555) 345-6789",
    avatar: "/confident-businessman.png",
    location: "Chicago, IL",
    linkedin: "https://linkedin.com/in/robertjohnson",
  },
  {
    id: "2",
    name: "Emily Wilson",
    email: "emily.wilson@globex.com",
    title: "Sales Manager",
    department: "Sales",
    phone: "+1 (555) 456-7890",
    avatar: "/confident-leader.png",
    location: "Boston, MA",
    linkedin: "https://linkedin.com/in/emilywilson",
  },
]

export const metadata: Metadata = {
  title: "Globex Corp Email Signatures | Lumio",
  description: "Access and customize your Globex Corp email signature",
}

export default function GlobexDeliveryPage() {
  const companyInfo = {
    name: "Globex Corp",
    logo: "/placeholder.svg?height=60&width=120&query=globex%20logo",
    primaryColor: "#0066CC",
    secondaryColor: "#66A3FF",
    // Assign a specific template for this client
    assignedTemplate: "globex-custom", // Custom template specific to Globex
  }

  return (
    <div className="container max-w-7xl py-8">
      <div className="flex justify-end mb-4">
        <Link href="/signature-templates">
          <Button variant="outline" size="sm" className="flex items-center">
            <Palette className="mr-2 h-4 w-4" />
            Signature Templates
          </Button>
        </Link>
      </div>
      <SignatureDeliveryPage companyInfo={companyInfo} employees={globexEmployees} />
    </div>
  )
}
