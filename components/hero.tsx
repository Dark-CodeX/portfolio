"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Cpu } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Software Engineer & Quantum Computing Enthusiast"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const stats = [
    { label: "Stack Overflow Rep", value: "3000+", icon: Code },
    { label: "Developers Helped", value: "60K+", icon: ExternalLink },
    { label: "Years Coding", value: "7+", icon: Cpu },
    { label: "Open Source Projects", value: "15+", icon: Github },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center max-w-6xl mx-auto">
        {/* Terminal Window */}
        <div className="bg-gray-900 border border-green-400/30 rounded-lg p-6 mb-8 text-left max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-green-400 font-mono text-sm">tushar@quantum-dev:~$</div>
          </div>
          <div className="font-mono text-green-400 space-y-2">
            <div>$ whoami</div>
            <div className="text-green-300">Tushar Chaurasia</div>
            <div>$ cat role.txt</div>
            <div className="text-green-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
            <div>$ ls achievements/</div>
            <div className="text-green-300">quantum-simulator/ programming-language/ build-system/ openutils-lib/</div>
            <div>$ echo $SPECIALIZATION</div>
            <div className="text-green-300">AI/ML & Data Science | Quantum Computing | Systems Programming</div>
          </div>
        </div>

        {/* Professional Photo */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-green-400/50 overflow-hidden bg-gray-900/50 flex items-center justify-center">
            <img
              src="full_image2.jpeg?height=160&width=160"
              alt="Tushar Chaurasia - Software Engineer"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-green-400 font-mono">TUSHAR CHAURASIA</h1>
          <div className="text-xl sm:text-2xl text-green-300 mb-8 font-mono">
            {"<"}
            <span className="text-cyan-400">SoftwareEngineer</span>
            {" & "}
            <span className="text-purple-400">QuantumComputing</span>
            {"/>"}
          </div>
          <p className="text-lg text-green-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Building the future with quantum circuits, systems programming, and AI. Creator of QubitVerse quantum
            simulator, Horizon programming language, and multiple open-source tools. Currently pursuing B.Tech in CS
            with AI/ML specialization.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 border border-green-400/30 rounded-lg p-4">
              <stat.icon className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400 font-mono">{stat.value}</div>
              <div className="text-sm text-green-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-mono" asChild>
            <Link href="#projects">./view_projects.sh</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono bg-transparent"
            asChild
          >
            <Link href="#contact">./contact_me.sh</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300" asChild>
            <Link href="https://github.com/Dark-CodeX" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300" asChild>
            <Link href="https://www.linkedin.com/in/tushar-chaurasia-34487728b/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300" asChild>
            <Link href="mailto:mail2tushar1@gmail.com">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-green-400" />
        </div>
      </div>
    </section>
  )
}
