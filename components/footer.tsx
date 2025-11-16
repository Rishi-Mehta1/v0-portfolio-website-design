"use client"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleGmailClick = (e) => {
    e.preventDefault()
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=kunjshahstudy@gmail.com&su=Hello%20Kunj&body=Hi%20Kunj%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect!"
    window.open(gmailUrl, "_blank", "noopener,noreferrer")
  }

  const handleCallClick = async (e) => {
    e.preventDefault()
    const phoneNumber = "+917574055463"
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy number:", err)
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/KunjShah1935", type: "link" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kunj-shah-a9228928a/", type: "link" },
    { icon: Mail, onClick: handleGmailClick, type: "button" },
    { icon: Phone, onClick: handleCallClick, type: "button" },
  ]

  return (
    <footer className="border-t border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold">KS</span>
              </div>
              <span className="font-bold text-xl">Rishi Mehta</span>
            </div>
            <p className="text-muted-foreground">
              Passionate about research, innovation, and creating positive global impact through technology and
              collaboration.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Resume", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return social.type === "link" ? (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all hover:text-primary"
                    aria-label="Social link"
                  >
                    <Icon size={18} />
                  </a>
                ) : (
                  <button
                    key={idx}
                    onClick={social.onClick}
                    className="relative p-2 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all hover:text-primary"
                    aria-label="Social button"
                  >
                    <Icon size={18} />
                    {/* Tooltip for "Copied" */}
                    {social.icon === Phone && copied && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs rounded-md px-2 py-1 shadow-md">
                        📞 Number copied!
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Rishi Mehta. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
