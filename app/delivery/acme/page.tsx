import type { Metadata } from "next"
import { SignatureDeliveryPage } from "@/components/signature-delivery-page"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"

// Mock data for Acme employees
const acmeEmployees = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@acme.com",
    title: "CEO",
    department: "Executive",
    phone: "+1 (555) 123-4567",
    mobile: "+1 (555) 987-6543",
    avatar: "/confident-businessman.png",
    location: "New York, NY",
    linkedin: "https://linkedin.com/in/johnsmith",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane.doe@acme.com",
    title: "CTO",
    department: "Technology",
    phone: "+1 (555) 234-5678",
    avatar: "/confident-architect.png",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/janedoe",
  },
]

export const metadata: Metadata = {
  title: "Acme Inc Email Signatures | Lumio",
  description: "Access and customize your Acme Inc email signature",
}

export default function AcmeDeliveryPage() {
  const companyInfo = {
    name: "Acme Inc",
    logo: "/generic-company-logo.png",
    primaryColor: "#FF5733",
    secondaryColor: "#FF8C66",
    // Assign a specific template for this client
    assignedTemplate: "template-2", // Custom template specific to Acme
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
      <SignatureDeliveryPage companyInfo={companyInfo} employees={acmeEmployees} />
    </div>
  )
}
