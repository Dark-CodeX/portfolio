"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, Github } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { href: "#about", label: "~/about" },
    { href: "#projects", label: "~/projects" },
    { href: "#skills", label: "~/skills" },
    { href: "#experience", label: "~/experience" },
    { href: "#contact", label: "~/contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-green-400/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2 text-green-400 font-mono">
            <Terminal className="h-6 w-6" />
            <span className="text-xl font-bold">tushar@portfolio:~$</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-green-300 hover:text-green-400 transition-colors font-mono text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-green-400 font-mono text-sm">{currentTime}</div>
            <Button variant="ghost" size="icon" asChild className="text-green-400 hover:text-green-300">
              <Link href="https://github.com/Dark-CodeX" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-green-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-400/20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-green-300 hover:text-green-400 transition-colors font-mono"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
