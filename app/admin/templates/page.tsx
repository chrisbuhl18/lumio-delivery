"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Save, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { templateRegistry } from "@/components/email-templates"

// In a real app, this would come from your database
const companies = [
  {
    id: "movement",
    name: "Movement",
    currentTemplate: "movement-custom",
    primaryColor: "#4F46E5",
    secondaryColor: "#818CF8",
  },
  {
    id: "acme",
    name: "Acme Inc",
    currentTemplate: "acme-custom",
    primaryColor: "#FF5733",
    secondaryColor: "#FF8C66",
  },
  {
    id: "globex",
    name: "Globex Corp",
    currentTemplate: "globex-custom",
    primaryColor: "#0066CC",
    secondaryColor: "#66A3FF",
  },
]

export default function TemplateManagementPage() {
  // State to track template assignments
  const [templateAssignments, setTemplateAssignments] = useState<Record<string, string>>({})
  const [companyColors, setCompanyColors] = useState<Record<string, { primary: string; secondary: string }>>({})
  const [loading, setLoading] = useState(false)

  // Initialize state with current assignments
  useEffect(() => {
    const initialAssignments: Record<string, string> = {}
    const initialColors: Record<string, { primary: string; secondary: string }> = {}

    companies.forEach((company) => {
      initialAssignments[company.id] = company.currentTemplate
      initialColors[company.id] = {
        primary: company.primaryColor,
        secondary: company.secondaryColor || "",
      }
    })

    setTemplateAssignments(initialAssignments)
    setCompanyColors(initialColors)
  }, [])

  // Handle template change
  const handleTemplateChange = (companyId: string, templateId: string) => {
    setTemplateAssignments((prev) => ({
      ...prev,
      [companyId]: templateId,
    }))
  }

  // Handle color change
  const handleColorChange = (companyId: string, type: "primary" | "secondary", color: string) => {
    setCompanyColors((prev) => ({
      ...prev,
      [companyId]: {
        ...prev[companyId],
        [type]: color,
      },
    }))
  }

  // Save changes (in a real app, this would update your database)
  const saveChanges = () => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Changes saved",
        description: "Template assignments have been updated",
      })
    }, 1000)

    // In a real app, you would save to your database here
    console.log("Template assignments:", templateAssignments)
    console.log("Company colors:", companyColors)
  }

  // Get all available templates for dropdown
  const availableTemplates = Object.keys(templateRegistry).map((key) => ({
    id: key,
    name: key
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  }))

  return (
    <div className="container max-w-7xl py-10">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/admin/signatures">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Template Management</h1>
            <p className="text-muted-foreground">Assign email signature templates to companies</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link href="/signature-templates">
            <Button variant="outline" className="flex items-center">
              <Palette className="mr-2 h-4 w-4" />
              Template Gallery
            </Button>
          </Link>
          <Button onClick={saveChanges} disabled={loading}>
            {loading ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {companies.map((company) => (
          <Card key={company.id}>
            <CardHeader className="pb-3">
              <CardTitle>{company.name}</CardTitle>
              <CardDescription>Manage email signature template</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor={`template-${company.id}`}>Assigned Template</Label>
                  <Select
                    value={templateAssignments[company.id] || ""}
                    onValueChange={(value) => handleTemplateChange(company.id, value)}
                  >
                    <SelectTrigger id={`template-${company.id}`}>
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`primary-${company.id}`}>Primary Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        id={`primary-${company.id}`}
                        type="text"
                        value={companyColors[company.id]?.primary || ""}
                        onChange={(e) => handleColorChange(company.id, "primary", e.target.value)}
                        placeholder="#000000"
                      />
                      <div
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: companyColors[company.id]?.primary || "#000000" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`secondary-${company.id}`}>Secondary Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        id={`secondary-${company.id}`}
                        type="text"
                        value={companyColors[company.id]?.secondary || ""}
                        onChange={(e) => handleColorChange(company.id, "secondary", e.target.value)}
                        placeholder="#000000"
                      />
                      <div
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: companyColors[company.id]?.secondary || "#000000" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md border bg-muted/40 p-4">
                <h3 className="mb-2 font-medium">Template Preview</h3>
                <div className="flex h-32 items-center justify-center rounded border bg-white p-4">
                  <div className="text-center text-sm text-muted-foreground">
                    <Palette className="mx-auto mb-2 h-8 w-8" />
                    <p>
                      Selected template:{" "}
                      <span className="font-medium">{templateAssignments[company.id] || "None"}</span>
                    </p>
                    <p className="mt-1 text-xs">
                      <Link
                        href={`/delivery/${company.id}`}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        View in client portal
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t bg-muted/50 px-6 py-3">
              <Link href={`/delivery/${company.id}`}>
                <Button variant="outline" size="sm">
                  Preview Client Portal
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
