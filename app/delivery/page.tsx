import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mail, Users, Settings, Palette } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Lumio | Email Signature Delivery Portal",
  description: "Access your animated email signatures and avatars",
}

export default function DeliveryPortalPage() {
  // In a real app, this would come from a database or API
  const companies = [
    { id: "movement", name: "Movement", employeeCount: 124, signatureCount: 3 },
    { id: "acme", name: "Acme Inc", employeeCount: 56, signatureCount: 2 },
    { id: "globex", name: "Globex Corp", employeeCount: 78, signatureCount: 1 },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-seasalt">
        <div className="container max-w-6xl py-10">
          <div className="mb-8 space-y-4">
            <h1 className="heading-lg text-english-violet">Email Signature Delivery Portal</h1>
            <p className="text-english-violet/80 text-lg">
              Access and customize your company's animated email signatures and avatars
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => {
              // Alternate background colors for cards
              const bgColors = ["bg-periwinkle", "bg-champagne", "bg-misty-rose"]
              const bgColor = bgColors[index % bgColors.length]

              return (
                <Card key={company.id} className="overflow-hidden transition-all hover:shadow-lg border-0">
                  <CardHeader className={`${bgColor} text-english-violet`}>
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <CardDescription className="text-english-violet/80">
                      {company.employeeCount} employees • {company.signatureCount} signature templates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4 text-english-violet/60" />
                        <span className="text-english-violet/80">{company.employeeCount} employees</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-1 h-4 w-4 text-english-violet/60" />
                        <span className="text-english-violet/80">{company.signatureCount} signatures</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-white px-6 py-4">
                    <Link href={`/delivery/${company.id}`} className="w-full">
                      <Button className="w-full" rounded="full" variant="accent">
                        Access Signatures
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

          <div className="mt-12">
            <h2 className="heading-sm text-english-violet mb-4">Admin Actions</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/admin/signatures">
                <Button variant="outline" className="w-full justify-start rounded-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Signature Management
                </Button>
              </Link>
              <Link href="/admin/templates">
                <Button variant="outline" className="w-full justify-start rounded-full">
                  <Palette className="mr-2 h-4 w-4" />
                  Template Management
                </Button>
              </Link>
              <Link href="/admin/users">
                <Button variant="outline" className="w-full justify-start rounded-full">
                  <Users className="mr-2 h-4 w-4" />
                  User Management
                </Button>
              </Link>
              <Link href="/signature-templates">
                <Button variant="outline" className="w-full justify-start rounded-full">
                  <Palette className="mr-2 h-4 w-4" />
                  Signature Templates
                </Button>
              </Link>
            </div>
          </div>
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
