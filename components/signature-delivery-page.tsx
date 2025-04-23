"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Copy, Download, Eye, EyeOff, User, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { EmailSignature } from "@/components/email-signature"
import { toast } from "@/hooks/use-toast"

export type Employee = {
  id: string
  name: string
  email: string
  title: string
  department: string
  phone?: string
  mobile?: string
  avatar?: string
  location?: string
  linkedin?: string
  twitter?: string
}

export type CompanyInfo = {
  name: string
  logo: string
  primaryColor: string
  secondaryColor: string
  assignedTemplate?: string
  signatureTemplates?: {
    id: string
    name: string
    description: string
  }[]
}

interface SignatureDeliveryPageProps {
  companyInfo: CompanyInfo
  employees: Employee[]
}

export function SignatureDeliveryPage({ companyInfo, employees }: SignatureDeliveryPageProps) {
  const router = useRouter()
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  // Use the assigned template if available, otherwise use a default
  const templateId = companyInfo.assignedTemplate || "template-modern"
  const [showPreview, setShowPreview] = useState(true)
  const [customizations, setCustomizations] = useState({
    showAvatar: true,
    showSocialIcons: true,
    showCompanyLogo: true,
    showMobile: true,
    showLocation: true,
    customTagline: "",
  })

  const handleEmployeeSelect = (employeeId: string) => {
    const employee = employees.find((emp) => emp.id === employeeId) || null
    setSelectedEmployee(employee)
  }

  const handleCopyHTML = () => {
    // In a real implementation, this would get the HTML from the EmailSignature component
    const signatureHTML = document.getElementById("signature-preview")?.innerHTML || ""
    navigator.clipboard.writeText(signatureHTML)
    toast({
      title: "HTML copied to clipboard",
      description: "You can now paste your signature into your email client",
    })
  }

  const handleDownloadHTML = () => {
    // In a real implementation, this would get the HTML from the EmailSignature component
    const signatureHTML = document.getElementById("signature-preview")?.innerHTML || ""
    const blob = new Blob([signatureHTML], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${selectedEmployee?.name.replace(/\s+/g, "-").toLowerCase()}-signature.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "Signature downloaded",
      description: "Your HTML signature file has been downloaded",
    })
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-5">
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardHeader className="bg-periwinkle rounded-t-lg">
            <CardTitle className="text-english-violet">Signature Settings</CardTitle>
            <CardDescription className="text-english-violet/80">Customize your email signature</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6 bg-white">
            <div className="space-y-2">
              <Label htmlFor="employee" className="text-english-violet">
                Select Your Name
              </Label>
              <Select onValueChange={handleEmployeeSelect}>
                <SelectTrigger id="employee" className="border-english-violet/20 focus:ring-english-violet">
                  <SelectValue placeholder="Select your name" />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((employee) => (
                    <SelectItem key={employee.id} value={employee.id}>
                      {employee.name} - {employee.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="customizations" className="border-english-violet/20">
                <AccordionTrigger className="text-english-violet hover:text-english-violet/80">
                  Advanced Customizations
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-avatar" className="cursor-pointer text-english-violet">
                      Show Avatar
                    </Label>
                    <Switch
                      id="show-avatar"
                      checked={customizations.showAvatar}
                      onCheckedChange={(checked) => setCustomizations({ ...customizations, showAvatar: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-social" className="cursor-pointer text-english-violet">
                      Show Social Icons
                    </Label>
                    <Switch
                      id="show-social"
                      checked={customizations.showSocialIcons}
                      onCheckedChange={(checked) => setCustomizations({ ...customizations, showSocialIcons: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-logo" className="cursor-pointer text-english-violet">
                      Show Company Logo
                    </Label>
                    <Switch
                      id="show-logo"
                      checked={customizations.showCompanyLogo}
                      onCheckedChange={(checked) => setCustomizations({ ...customizations, showCompanyLogo: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-mobile" className="cursor-pointer text-english-violet">
                      Show Mobile Number
                    </Label>
                    <Switch
                      id="show-mobile"
                      checked={customizations.showMobile}
                      onCheckedChange={(checked) => setCustomizations({ ...customizations, showMobile: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-location" className="cursor-pointer text-english-violet">
                      Show Location
                    </Label>
                    <Switch
                      id="show-location"
                      checked={customizations.showLocation}
                      onCheckedChange={(checked) => setCustomizations({ ...customizations, showLocation: checked })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-tagline" className="text-english-violet">
                      Custom Tagline
                    </Label>
                    <Input
                      id="custom-tagline"
                      placeholder="Add a custom tagline (optional)"
                      value={customizations.customTagline}
                      onChange={(e) => setCustomizations({ ...customizations, customTagline: e.target.value })}
                      className="border-english-violet/20 focus:ring-english-violet"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex-col space-y-4 p-6 bg-white rounded-b-lg">
            <Button
              className="w-full"
              disabled={!selectedEmployee}
              onClick={handleCopyHTML}
              rounded="full"
              variant="accent"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy HTML
            </Button>
            <Button
              variant="outline"
              className="w-full"
              disabled={!selectedEmployee}
              onClick={handleDownloadHTML}
              rounded="full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download HTML File
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-3 border-0 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between bg-champagne rounded-t-lg">
            <div>
              <CardTitle className="text-english-violet">Signature Preview</CardTitle>
              <CardDescription className="text-english-violet/80">
                See how your signature will appear in emails
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setShowPreview(!showPreview)}>
              {showPreview ? (
                <EyeOff className="h-4 w-4 text-english-violet" />
              ) : (
                <Eye className="h-4 w-4 text-english-violet" />
              )}
            </Button>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            {!selectedEmployee ? (
              <div className="flex h-64 items-center justify-center rounded-md border border-dashed p-8 text-center border-english-violet/20">
                <div className="space-y-2">
                  <User className="mx-auto h-8 w-8 text-english-violet/60" />
                  <h3 className="text-lg font-semibold text-english-violet">No Employee Selected</h3>
                  <p className="text-sm text-english-violet/80">
                    Select your name from the dropdown to preview your signature
                  </p>
                </div>
              </div>
            ) : showPreview ? (
              <div
                id="signature-preview"
                className="rounded-md border p-6 border-english-violet/20"
                style={{ backgroundColor: "#ffffff" }}
              >
                <EmailSignature
                  employee={selectedEmployee}
                  company={companyInfo}
                  template={templateId}
                  customizations={customizations}
                />
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center rounded-md border border-dashed p-8 text-center border-english-violet/20">
                <div className="space-y-2">
                  <EyeOff className="mx-auto h-8 w-8 text-english-violet/60" />
                  <h3 className="text-lg font-semibold text-english-violet">Preview Hidden</h3>
                  <p className="text-sm text-english-violet/80">Click the eye icon to show the preview</p>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-white rounded-b-lg">
            <Tabs defaultValue="outlook" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-seasalt">
                <TabsTrigger
                  value="outlook"
                  className="data-[state=active]:bg-white data-[state=active]:text-english-violet"
                >
                  Outlook
                </TabsTrigger>
                <TabsTrigger
                  value="gmail"
                  className="data-[state=active]:bg-white data-[state=active]:text-english-violet"
                >
                  Gmail
                </TabsTrigger>
                <TabsTrigger
                  value="apple-mail"
                  className="data-[state=active]:bg-white data-[state=active]:text-english-violet"
                >
                  Apple Mail
                </TabsTrigger>
              </TabsList>
              <TabsContent value="outlook" className="space-y-4 pt-4">
                <Alert className="bg-periwinkle/20 border-periwinkle">
                  <Info className="h-4 w-4 text-english-violet" />
                  <AlertDescription className="text-english-violet/80">
                    <ol className="ml-4 list-decimal space-y-2 text-sm">
                      <li>Copy your signature HTML using the "Copy HTML" button</li>
                      <li>In Outlook, go to File &gt; Options &gt; Mail &gt; Signatures</li>
                      <li>Click "New" to create a new signature</li>
                      <li>Give your signature a name and paste the HTML</li>
                      <li>Click "OK" to save your new signature</li>
                    </ol>
                  </AlertDescription>
                </Alert>
              </TabsContent>
              <TabsContent value="gmail" className="space-y-4 pt-4">
                <Alert className="bg-champagne/20 border-champagne">
                  <Info className="h-4 w-4 text-english-violet" />
                  <AlertDescription className="text-english-violet/80">
                    <ol className="ml-4 list-decimal space-y-2 text-sm">
                      <li>Copy your signature HTML using the "Copy HTML" button</li>
                      <li>In Gmail, click the gear icon and select "See all settings"</li>
                      <li>In the "General" tab, scroll down to the "Signature" section</li>
                      <li>Create a new signature or edit an existing one</li>
                      <li>Paste your signature HTML and click "Save Changes"</li>
                    </ol>
                  </AlertDescription>
                </Alert>
              </TabsContent>
              <TabsContent value="apple-mail" className="space-y-4 pt-4">
                <Alert className="bg-misty-rose/20 border-misty-rose">
                  <Info className="h-4 w-4 text-english-violet" />
                  <AlertDescription className="text-english-violet/80">
                    <ol className="ml-4 list-decimal space-y-2 text-sm">
                      <li>Copy your signature HTML using the "Copy HTML" button</li>
                      <li>In Apple Mail, go to Mail &gt; Preferences &gt; Signatures</li>
                      <li>Select your email account and click the "+" button</li>
                      <li>Name your signature and paste the HTML</li>
                      <li>Close the preferences window to save</li>
                    </ol>
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
