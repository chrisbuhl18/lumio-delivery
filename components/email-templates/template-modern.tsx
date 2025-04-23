import type { TemplateProps } from "./types"

export function TemplateModern({ employee, company, showElements, primaryColor }: TemplateProps) {
  // Format website URL for display (remove http/https)
  const displayWebsite = company.website.replace(/^https?:\/\//, "")

  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "Arial, sans-serif", color: "#333333" }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top", paddingRight: "15px" }}>
            {showElements.photo && (
              <img
                src={employee.photo || "/placeholder.svg?height=100&width=100&query=profile"}
                alt={employee.name}
                width="100"
                height="100"
                style={{ borderRadius: "50%", display: "block" }}
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = "/diverse-professional-profiles.png"
                }}
              />
            )}
          </td>
          <td style={{ verticalAlign: "top" }}>
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0 0 5px 0", color: primaryColor }}>
              {employee.name}
            </p>
            {showElements.position && (
              <p style={{ fontSize: "14px", margin: "0 0 10px 0" }}>
                {employee.position}, {company.name}
              </p>
            )}
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                {showElements.phone && (
                  <tr>
                    <td style={{ paddingRight: "5px" }}>Phone:</td>
                    <td>
                      <a href={`tel:${employee.phone}`} style={{ color: "#333333", textDecoration: "none" }}>
                        {employee.phone}
                      </a>
                    </td>
                  </tr>
                )}
                {showElements.email && (
                  <tr>
                    <td style={{ paddingRight: "5px" }}>Email:</td>
                    <td>
                      <a href={`mailto:${employee.email}`} style={{ color: "#333333", textDecoration: "none" }}>
                        {employee.email}
                      </a>
                    </td>
                  </tr>
                )}
                {showElements.website && (
                  <tr>
                    <td style={{ paddingRight: "5px" }}>Website:</td>
                    <td>
                      <a
                        href={`https://${displayWebsite}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#333333", textDecoration: "none" }}
                      >
                        {displayWebsite}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {showElements.socialMedia && (
              <div style={{ marginTop: "10px" }}>
                {company.socialMedia.linkedin && (
                  <a
                    href={company.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "5px" }}
                  >
                    LinkedIn
                  </a>
                )}
                {company.socialMedia.twitter && (
                  <a
                    href={company.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "5px" }}
                  >
                    Twitter
                  </a>
                )}
              </div>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
