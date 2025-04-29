import Link from "next/link"
import AnimatedAvatar from "@/components/animated-avatar"
import SignatureHeadshot from "@/components/signature-headshot"
import { Mail, Phone } from "lucide-react"
import HeroBackground from "@/components/hero-background"

export default function HeroSection() {
  return (
    <HeroBackground>
      <div className="hidden md:block container mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="heading-xl text-english-violet mb-6">Your new avatar in action.</h1>
          <p className="text-xl md:text-2xl mb-10 text-english-violet/80 max-w-2xl mx-auto">
            Take a look at your new animation and provide any feedback to the Lumio team.
          </p>
        </div>

        {/* Product Showcase - Desktop */}
        <div className="relative mt-8">
          <div className="flex flex-row justify-center items-center gap-16">
            {/* Avatar mockup - browser style instead of phone */}
            <Link href="/avatars" className="relative transform hover:scale-105 transition-transform duration-300">
              {/* Decorative elements - moved behind and scaled up 30% */}
              <div
                className="absolute -bottom-4 -right-4 w-26 h-26 bg-periwinkle rounded-full opacity-70"
                style={{ width: "13rem", height: "13rem", transform: "scale(1.4)", zIndex: 0 }}
              ></div>
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-champagne rounded-full opacity-70"
                style={{ width: "10.4rem", height: "10.4rem", transform: "scale(1.2)", zIndex: 0 }}
              ></div>

              <div className="w-[320px] bg-white rounded-xl shadow-xl overflow-hidden relative z-10">
                {/* Product header - styled as a button/label */}
                <div className="bg-periwinkle p-3 flex items-center justify-center relative">
                  <div className="absolute left-2 flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="font-bold text-white text-sm bg-english-violet/20 px-6 py-1.5 rounded-full shadow-sm">
                    Email Avatars
                  </div>
                </div>

                {/* Email content */}
                <div className="p-4">
                  {/* Email with animated avatar - larger size */}
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-start">
                      <div className="mr-3 flex-shrink-0">
                        <AnimatedAvatar size="md" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <div className="font-bold text-sm">PIN Plus</div>
                          <div className="text-xs text-gray-500">10:30 AM</div>
                        </div>
                        <div className="text-sm font-medium mb-1">Trash Can Cleaning Event!</div>
                        <div className="text-xs text-gray-500 line-clamp-2">
                          Thank you for your interest in our trash can cleaning event. We're excited to help you stand
                          out in crowded inboxes...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Just one regular email - larger size */}
                  <div className="pb-4 mb-4 border-b">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <div className="font-bold text-sm">Sender Name</div>
                          <div className="text-xs text-gray-500">9:15 AM</div>
                        </div>
                        <div className="text-sm font-medium mb-1">Email Subject Line</div>
                        <div className="text-xs text-gray-500 line-clamp-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third email preview that gets cropped off */}
                  <div className="pb-4 overflow-hidden" style={{ maxHeight: "60px" }}>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <div className="font-bold text-sm">Another Sender</div>
                          <div className="text-xs text-gray-500">8:45 AM</div>
                        </div>
                        <div className="text-sm font-medium mb-1">Meeting Reminder</div>
                        <div className="text-xs text-gray-500 line-clamp-2">
                          Just a reminder about our upcoming meeting scheduled for tomorrow at 2 PM. Please bring
                          your...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-periwinkle/30 p-2 text-center text-xs text-english-violet font-medium">
                  Animated Email Avatars
                </div>
              </div>
            </Link>

            {/* Signature mockup - browser style instead of phone */}
            <Link href="/signatures" className="relative transform hover:scale-105 transition-transform duration-300">
              {/* Decorative elements - moved behind and scaled up 30% */}
              <div
                className="absolute -bottom-4 -left-4 w-26 h-26 bg-misty-rose rounded-full opacity-70"
                style={{ width: "13rem", height: "13rem", transform: "scale(1)", zIndex: 0 }}
              ></div>
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-champagne rounded-full opacity-70"
                style={{ width: "10.4rem", height: "10.4rem", transform: "scale(1)", zIndex: 0 }}
              ></div>

              <div className="w-[320px] bg-white rounded-xl shadow-xl overflow-hidden relative z-10">
                {/* Product header - styled as a button/label */}
                <div className="bg-misty-rose p-3 flex items-center justify-center relative">
                  <div className="absolute left-2 flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="font-bold text-english-violet text-sm bg-white/30 px-6 py-1.5 rounded-full shadow-sm">
                    Email Signatures
                  </div>
                </div>

                {/* Email compose with signature */}
                <div className="p-4">
                  <div className="mb-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-xs font-medium text-gray-500">To:</div>
                      <div className="text-xs">client@example.com</div>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-xs font-medium text-gray-500">Subject:</div>
                      <div className="text-xs font-medium">Trash Can Cleaning Event</div>
                    </div>
                  </div>

                  <div className="text-xs mb-4">
                    <p className="mb-2">Hi there,</p>
                    <p className="mb-2">Thanks for your interest. I've attached the information for your review.</p>
                    <p>Looking forward to our collaboration!</p>
                  </div>

                  {/* Email signature - updated to match other signatures */}
                  <div className="border-t pt-3">
                    <div className="flex items-start">
                      <div className="mr-3 flex-shrink-0 flex flex-col items-center">
                        {/* Larger GIF */}
                        <SignatureHeadshot size="md" className="mb-2" />

                        {/* Social icons below the GIF */}
                        <div className="flex items-center space-x-1.5">
                          <div className="w-4 h-4 bg-english-violet/80 rounded-full flex items-center justify-center">
                            <svg
                              className="h-2.5 w-2.5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </div>
                          <div className="w-4 h-4 bg-english-violet/80 rounded-full flex items-center justify-center">
                            <svg
                              className="h-2.5 w-2.5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </div>
                          <div className="w-4 h-4 bg-english-violet/80 rounded-full flex items-center justify-center">
                            <svg
                              className="h-2.5 w-2.5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </div>
                          <div className="w-4 h-4 bg-english-violet/80 rounded-full flex items-center justify-center">
                            <svg
                              className="h-2.5 w-2.5 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="font-bold text-english-violet text-xs">SARAH JOHNSON</div>
                        <div className="text-xs text-gray-600">Community Director // PIN Plus</div>
                        <div className="flex items-center text-xs text-gray-600 mt-1">
                          <Mail className="h-3 w-3 mr-1" />
                          <span>sarah@pinplus.com</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <Phone className="h-3 w-3 mr-1" />
                          <span>(555) 123-4567</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Create memorable email experiences</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-misty-rose/30 p-2 text-center text-xs text-english-violet font-medium">
                  Animated Email Signatures
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </HeroBackground>
  )
}
