import type { TemplateProps } from "../types"

export function AcmeTemplate({ employee, company, showElements, primaryColor }: TemplateProps) {
  // This is a placeholder for a custom template for Acme Inc
  // In a real implementation, this would be a custom design specific to Acme

  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "Arial, sans-serif", color: "#333333" }}>
      <tbody>
        <tr>
          <td style={{ borderLeft: "4px solid #FF5733", paddingLeft: "15px" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 5px 0", color: "#FF5733" }}>
              {employee.name}
            </p>
            {showElements.position && (
              <p style={{ fontSize: "14px", margin: "0 0 10px 0" }}>{employee.position} | ACME INC</p>
            )}

            {/* Custom Acme layout with their branding */}
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                {showElements.phone && (
                  <tr>
                    <td style={{ paddingRight: "10px", paddingBottom: "5px" }}>
                      <img src="/icons/phone-icon.png" alt="Phone" width="16" height="16" />
                    </td>
                    <td style={{ paddingBottom: "5px" }}>
                      <a href={`tel:${employee.phone}`} style={{ color: "#333333", textDecoration: "none" }}>
                        {employee.phone}
                      </a>
                    </td>
                  </tr>
                )}
                {showElements.email && (
                  <tr>
                    <td style={{ paddingRight: "10px", paddingBottom: "5px" }}>
                      <img src="/icons/email-icon.png" alt="Email" width="16" height="16" />
                    </td>
                    <td style={{ paddingBottom: "5px" }}>
                      <a href={`mailto:${employee.email}`} style={{ color: "#333333", textDecoration: "none" }}>
                        {employee.email}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
