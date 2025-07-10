"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message compiled successfully!",
      description: "Your message has been sent. I'll get back to you soon.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mail2tushar1@gmail.com",
      href: "mailto:mail2tushar1@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-9608166409",
      href: "tel:+919608166409",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sonepat, Haryana, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "Dark-CodeX",
      href: "https://github.com/Dark-CodeX",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "tushar-chaurasia-34487728b",
      href: "https://www.linkedin.com/in/tushar-chaurasia-34487728b/",
    },
    {
      icon: ExternalLink,
      title: "Stack Overflow",
      value: "3000+ Reputation",
      href: "https://stackexchange.com/users/19414262/darth-codex",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400 font-mono">$ ./contact.sh --init</h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto font-mono">
            Ready to collaborate on quantum computing, systems programming, or innovative tech projects? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">## Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-green-400/10 p-3 rounded-lg border border-green-400/30">
                      <info.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium text-green-300 font-mono">{info.title}</div>
                      <a
                        href={info.href}
                        className="text-green-200 hover:text-green-400 transition-colors font-mono text-sm"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">## Social & Professional Links</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-green-400/10 p-3 rounded-lg border border-green-400/30">
                      <link.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium text-green-300 font-mono">{link.title}</div>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-200 hover:text-green-400 transition-colors font-mono text-sm"
                      >
                        {link.value}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">## Collaboration Interests</h3>
              <ul className="space-y-2 text-green-200 text-sm">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▸</span>
                  Quantum Computing Research & Development
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▸</span>
                  Systems Programming & Compiler Design
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▸</span>
                  Open Source Contributions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▸</span>
                  AI/ML Projects & Research
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">▸</span>
                  Technical Mentoring & Teaching
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900/50 border-green-400/30">
            <CardHeader>
              <CardTitle className="text-green-400 font-mono">Send Message</CardTitle>
              <CardDescription className="text-green-300 font-mono">
                Fill out the form below and I'll get back to you ASAP.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-green-300 font-mono">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="bg-gray-800 border-green-400/30 text-green-200 focus:border-green-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-green-300 font-mono">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-gray-800 border-green-400/30 text-green-200 focus:border-green-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-green-300 font-mono">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    className="bg-gray-800 border-green-400/30 text-green-200 focus:border-green-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-green-300 font-mono">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="bg-gray-800 border-green-400/30 text-green-200 focus:border-green-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-black font-mono"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Compiling message..." : "./send_message.sh"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
