import type { Employee, CompanyInfo } from "./signature-delivery-page"
import { getTemplate } from "./email-templates"

interface EmailSignatureProps {
  employee: Employee
  company: CompanyInfo
  template: string
  customizations: {
    showAvatar: boolean
    showSocialIcons: boolean
    showCompanyLogo: boolean
    showMobile: boolean
    showLocation: boolean
    customTagline: string
  }
}

export function EmailSignature({ employee, company, template, customizations }: EmailSignatureProps) {
  // Generate avatar placeholder if not provided
  const avatarUrl =
    employee.avatar || `/placeholder.svg?height=100&width=100&query=avatar%20of%20${encodeURIComponent(employee.name)}`

  // Map customizations to showElements format expected by templates
  const showElements = {
    photo: customizations.showAvatar,
    position: true,
    phone: true,
    mobile: customizations.showMobile,
    fax: false,
    email: true,
    meetingLink: true,
    address: true,
    website: true,
    socialMedia: customizations.showSocialIcons,
    logo: customizations.showCompanyLogo,
    icon: false,
    slogan: true,
    banner: false,
    disclaimer: false,
  }

  // Prepare employee data for template
  const employeeData = {
    name: employee.name,
    position: employee.title,
    phone: employee.phone || "",
    meetingLink: "https://calendly.com/movement-io/sarah", // This should come from employee data
    email: employee.email,
    photo: avatarUrl,
    mobile: employee.mobile || "",
    fax: "",
  }

  // Prepare company data for template
  const companyData = {
    name: company.name,
    website: "golumio.co", // This should come from company data
    slogan: customizations.customTagline || "Make Email Memorable",
    address: "123 Email Avenue, San Francisco, CA 94107", // This should come from company data
    logo: company.logo || "/abstract-geometric-logo.png",
    icon: "/placeholder.svg?height=40&width=40&query=company%20icon",
    socialMedia: {
      instagram: employee.linkedin ? "https://instagram.com/lumio" : undefined,
      twitter: employee.twitter,
      linkedin: employee.linkedin,
      facebook: employee.linkedin ? "https://facebook.com/lumio" : undefined,
      youtube: employee.linkedin ? "https://youtube.com/lumio" : undefined,
    },
  }

  // Get the template component from the registry with fallback handling
  const TemplateComponent = getTemplate(template)

  // Render the template with the prepared data
  return (
    <TemplateComponent
      employee={employeeData}
      company={companyData}
      showElements={showElements}
      primaryColor={company.primaryColor}
      secondaryColor={company.secondaryColor}
    />
  )
}
