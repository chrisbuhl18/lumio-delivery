import type { TemplateProps } from "../types"

export function GlobexTemplate({ employee, company, showElements, primaryColor }: TemplateProps) {
  // This is a placeholder for a custom template for Globex Corp
  // In a real implementation, this would be a custom design specific to Globex

  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "Arial, sans-serif", color: "#333333" }}>
      <tbody>
        <tr>
          <td style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "5px" }}>
            <table cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ textAlign: "center", paddingBottom: "10px" }}>
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      height="40"
                      style={{ display: "inline-block" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 5px 0", color: "#0066CC" }}>
                      {employee.name}
                    </p>
                    {showElements.position && (
                      <p style={{ fontSize: "14px", margin: "0 0 10px 0" }}>{employee.position}</p>
                    )}

                    {/* Custom Globex layout with their branding */}
                    <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
                      <tbody>
                        {showElements.phone && (
                          <tr>
                            <td style={{ paddingRight: "10px", paddingBottom: "5px" }}>
                              <img src="/icons/phone-icon.png" alt="Phone" width="16" height="16" />
                            </td>
                            <td style={{ paddingBottom: "5px", textAlign: "left" }}>
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
                            <td style={{ paddingBottom: "5px", textAlign: "left" }}>
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
          </td>
        </tr>
      </tbody>
    </table>
  )
}
