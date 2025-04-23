import type { TemplateProps } from "./types"

export function Template1({ employee, company, showElements, primaryColor }: TemplateProps) {
  // Format website URL for display (remove http/https)
  const displayWebsite = company.website.replace(/^https?:\/\//, "")

  // Inline SVG data URLs for social icons to avoid external dependencies
  const socialIcons = {
    facebook: "https://imagedelivery.net/nAvfNlDyCTDMbgRwQ09UKA/e53f4c27-c34a-40df-ef13-24873f72bd00/150x150px",
    twitter: "https://imagedelivery.net/nAvfNlDyCTDMbgRwQ09UKA/784f8499-0fa1-4f89-c744-c45fca686a00/150x150px",
    linkedin: "https://imagedelivery.net/nAvfNlDyCTDMbgRwQ09UKA/f325666f-12ac-47b6-98df-ef40b188c200/150x150px",
  }

  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "Arial, sans-serif", color: "#333333" }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "middle", paddingRight: "30px" }}>
            {showElements.photo && (
              <img
                src={employee.photo || "/placeholder.svg?height=150&width=150&query=profile"}
                alt={employee.name}
                width="130"
                height="130"
                style={{ borderRadius: "50%", display: "block" }}
                onError={(e) => {
                  e.currentTarget.src = "/diverse-professional-profiles.png"
                }}
              />
            )}
          </td>
          <td style={{ verticalAlign: "middle" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0 0 0px 0" }}>{employee.name}</p>

                    {showElements.position && (
                      <p style={{ fontSize: "14px", color: "#666666", margin: "0 0 10px 0" }}>{employee.position}</p>
                    )}

                    {showElements.phone && (
                      <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                        T:{" "}
                        <a href={`tel:${employee.phone}`} style={{ color: "#666666", textDecoration: "none" }}>
                          {employee.phone}
                        </a>
                      </p>
                    )}

                    {showElements.email && (
                      <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                        E:{" "}
                        <a href={`mailto:${employee.email}`} style={{ color: "#666666", textDecoration: "none" }}>
                          {employee.email}
                        </a>
                      </p>
                    )}

                    {showElements.website && (
                      <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                        W:{" "}
                        <a href={`https://${displayWebsite}`} style={{ color: "#666666", textDecoration: "none" }}>
                          {displayWebsite}
                        </a>
                      </p>
                    )}

                    {showElements.meetingLink && (
                      <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                        <a href={employee.meetingLink} style={{ color: "#666666", textDecoration: "none" }}>
                          Schedule a meeting
                        </a>
                      </p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          {showElements.socialMedia && (
            <td style={{ verticalAlign: "middle", paddingLeft: "25px" }}>
              <table cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td style={{ paddingBottom: "10px" }}>
                      {company.socialMedia.facebook && (
                        <a href={company.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                          <img
                            src={socialIcons.facebook || "/placeholder.svg"}
                            alt="Facebook"
                            width="32"
                            height="32"
                            style={{ display: "block" }}
                          />
                        </a>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "10px" }}>
                      {company.socialMedia.twitter && (
                        <a href={company.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                          <img
                            src={socialIcons.twitter || "/placeholder.svg"}
                            alt="Twitter"
                            width="32"
                            height="32"
                            style={{ display: "block" }}
                          />
                        </a>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {company.socialMedia.linkedin && (
                        <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                          <img
                            src={socialIcons.linkedin || "/placeholder.svg"}
                            alt="LinkedIn"
                            width="32"
                            height="32"
                            style={{ display: "block" }}
                          />
                        </a>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  )
}
