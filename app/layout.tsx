import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tushar Chaurasia - Software Engineer & Quantum Computing Enthusiast",
  description:
    "Portfolio of Tushar Chaurasia, a passionate software engineer specializing in quantum computing, systems programming, and AI/ML. Creator of QubitVerse, Horizon programming language, and multiple open-source projects.",
  keywords: [
    "Tushar Chaurasia",
    "Software Engineer",
    "Quantum Computing",
    "C++",
    "Systems Programming",
    "QubitVerse",
    "Horizon Programming Language",
    "Open Source",
    "AI/ML",
    "Computer Science",
  ],
  authors: [{ name: "Tushar Chaurasia" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Tushar Chaurasia - Software Engineer & Quantum Computing Enthusiast",
    description: "Passionate software engineer with expertise in quantum computing, systems programming, and AI/ML",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
