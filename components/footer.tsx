import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-green-400/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-green-400 font-mono mb-4">
              <Terminal className="h-6 w-6" />
              <span className="text-lg font-bold">tushar@portfolio</span>
            </div>
            <p className="text-green-200 mb-4 font-mono text-sm">
              Software Engineer passionate about quantum computing, systems programming, and building innovative
              solutions.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300" asChild>
                <Link href="https://github.com/Dark-CodeX" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300" asChild>
                <Link href="https://www.linkedin.com/in/tushar-chaurasia-34487728b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300" asChild>
                <Link href="mailto:mail2tushar1@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300" asChild>
                <Link href="https://stackexchange.com/users/19414262/darth-codex" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400 font-mono">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="#about"
                className="block text-green-200 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ~/about
              </Link>
              <Link
                href="#projects"
                className="block text-green-200 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ~/projects
              </Link>
              <Link
                href="#skills"
                className="block text-green-200 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ~/skills
              </Link>
              <Link
                href="#experience"
                className="block text-green-200 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ~/experience
              </Link>
              <Link
                href="#contact"
                className="block text-green-200 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ~/contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400 font-mono">Specializations</h3>
            <ul className="space-y-2 text-green-200 font-mono text-sm">
              <li>Quantum Computing</li>
              <li>Systems Programming</li>
              <li>Compiler Design</li>
              <li>Machine Learning</li>
              <li>Open Source Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 font-mono text-sm">
              &copy; {currentYear} Tushar Chaurasia. All rights reserved.
            </p>
            <p className="text-green-200 font-mono text-sm mt-2 md:mt-0">
              Built with Next.js, TypeScript & passion for code
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
