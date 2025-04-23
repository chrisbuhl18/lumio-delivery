import type { TemplateProps } from "../types"

export function MovementTemplate({ employee, company, showElements, primaryColor }: TemplateProps) {
  // This is a placeholder for a custom template for Movement
  // In a real implementation, this would be a custom design specific to Movement

  return (
    <table cellPadding="0" cellSpacing="0" style={{ fontFamily: "Arial, sans-serif", color: "#333333", width: "100%" }}>
      <tbody>
        <tr>
          <td>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  {/* Custom Movement template layout */}
                  <td style={{ verticalAlign: "top", paddingRight: "24px" }}>
                    {showElements.photo && (
                      <div style={{ marginBottom: "12px" }}>
                        <img
                          src={employee.photo || "/placeholder.svg?height=96&width=96&query=profile"}
                          alt={employee.name}
                          width="96"
                          height="96"
                          style={{ borderRadius: "50%", display: "block" }}
                          onError={(e) => {
                            e.currentTarget.src = "/diverse-professional-profiles.png"
                          }}
                        />
                      </div>
                    )}
                  </td>

                  <td style={{ verticalAlign: "top", paddingTop: "4px" }}>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "0 0 4px 0",
                        color: "#4F46E5", // Movement's primary color
                        textTransform: "uppercase",
                      }}
                    >
                      {employee.name}
                    </p>

                    {showElements.position && (
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666666",
                          margin: "0 0 12px 0",
                        }}
                      >
                        {employee.position} | {company.name}
                      </p>
                    )}

                    <table cellPadding="0" cellSpacing="0" style={{ borderSpacing: "0", borderCollapse: "collapse" }}>
                      <tbody>
                        {showElements.email && (
                          <tr>
                            <td
                              style={{
                                verticalAlign: "middle",
                                paddingRight: "8px",
                                paddingBottom: "8px",
                                width: "16px",
                                height: "16px",
                              }}
                            >
                              <img
                                src="/icons/email-icon.png"
                                alt="Email"
                                width="16"
                                height="16"
                                style={{ display: "block" }}
                                onError={(e) => {
                                  e.currentTarget.src = "/digital-communication.png"
                                }}
                              />
                            </td>
                            <td style={{ paddingBottom: "8px", verticalAlign: "middle" }}>
                              <a
                                href={`mailto:${employee.email}`}
                                style={{
                                  color: "#666666",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  lineHeight: "16px",
                                  display: "block",
                                }}
                              >
                                {employee.email}
                              </a>
                            </td>
                          </tr>
                        )}

                        {showElements.phone && (
                          <tr>
                            <td
                              style={{
                                verticalAlign: "middle",
                                paddingRight: "8px",
                                paddingBottom: "8px",
                                width: "16px",
                                height: "16px",
                              }}
                            >
                              <img
                                src="/icons/phone-icon.png"
                                alt="Phone"
                                width="16"
                                height="16"
                                style={{ display: "block" }}
                                onError={(e) => {
                                  e.currentTarget.src = "/modern-smartphone-display.png"
                                }}
                              />
                            </td>
                            <td style={{ paddingBottom: "8px", verticalAlign: "middle" }}>
                              <a
                                href={`tel:${employee.phone}`}
                                style={{
                                  color: "#666666",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  lineHeight: "16px",
                                  display: "block",
                                }}
                              >
                                {employee.phone}
                              </a>
                            </td>
                          </tr>
                        )}

                        {showElements.meetingLink && (
                          <tr>
                            <td
                              style={{
                                verticalAlign: "middle",
                                paddingRight: "8px",
                                paddingBottom: "8px",
                                width: "16px",
                                height: "16px",
                              }}
                            >
                              <img
                                src="/icons/calendar-icon.png"
                                alt="Calendar"
                                width="16"
                                height="16"
                                style={{ display: "block" }}
                                onError={(e) => {
                                  e.currentTarget.src = "/open-planner.png"
                                }}
                              />
                            </td>
                            <td style={{ paddingBottom: "8px", verticalAlign: "middle" }}>
                              <a
                                href={employee.meetingLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#666666",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  lineHeight: "16px",
                                  display: "block",
                                }}
                              >
                                Schedule a meeting
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
