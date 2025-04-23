import { Template1 } from "./template-1"
import { Template2 } from "./template-2"
import { Template3 } from "./template-3"
import { Template4 } from "./template-4"
import { TemplateModern } from "./template-modern"

// Custom client templates
import { MovementTemplate } from "./client/movement-template"
import { AcmeTemplate } from "./client/acme-template"
import { GlobexTemplate } from "./client/globex-template"

// Create a fallback template function that uses Template1 but logs an error
import type { TemplateProps } from "./types"
import type { JSX } from "react/jsx-runtime"

const FallbackTemplate = (props: TemplateProps) => {
  console.warn("Template not found, using fallback template")
  return Template1(props)
}

// Export a registry of all available templates with fallback handling
export const templateRegistry: Record<string, (props: TemplateProps) => JSX.Element> = {
  // Standard templates
  template1: Template1,
  template2: Template2,
  template3: Template3,
  template4: Template4,
  "template-modern": TemplateModern,

  // Client-specific templates
  "movement-custom": MovementTemplate,
  "acme-custom": AcmeTemplate,
  "globex-custom": GlobexTemplate,
}

// Add a getter with fallback for safety
export const getTemplate = (templateId: string) => {
  return templateRegistry[templateId] || FallbackTemplate
}

// Export all templates for direct imports
export { Template1, Template2, Template3, Template4, TemplateModern, MovementTemplate, AcmeTemplate, GlobexTemplate }
