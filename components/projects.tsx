import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Terminal, Cpu, Code, Zap } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "QubitVerse",
      subtitle: "Quantum Computer Circuit Simulator",
      description:
        "Interactive quantum circuit simulator with 17+ quantum gates, built with C++ backend and React frontend. Visualizes quantum state transformations and makes quantum mechanics accessible to students and researchers.",
      icon: Cpu,
      technologies: ["C++", "Node.js", "ReactJS", "React-Konva", "Quantum Computing"],
      features: [
        "17+ quantum gate operations",
        "Interactive circuit design",
        "Real-time state visualization",
        "Educational quantum mechanics tool",
      ],
      githubUrl: "https://github.com/Dark-CodeX/QubitVerse",
      status: "Stable",
    },
    {
      title: "Horizon",
      subtitle: "Memory-Safe Programming Language",
      description:
        "A fast, memory-safe programming language combining C++ flexibility with Rust-like safety. Features innovative memory management system with heap<T>, unique ownership, and move semantics.",
      icon: Code,
      technologies: ["C++", "Compiler Design", "Memory Management", "Language Design"],
      features: [
        "Hybrid C++/Rust design philosophy",
        "Custom memory management system",
        "Prevents duplicate pointers",
        "Automatic cleanup with heap<T>",
      ],
      githubUrl: "https://github.com/Dark-CodeX/Horizon",
      status: "In Development",
    },
    {
      title: "runcpp",
      subtitle: "Advanced Build System",
      description:
        "Custom-made build system for large C++ projects with multi-compiler support, dependency management, and GUI client. Features custom lexer and parser for configuration files.",
      icon: Terminal,
      technologies: ["C++", "Node.js", "Electron.js", "Build Systems"],
      features: [
        "Multi-compiler support (g++, clang++, MSVC)",
        "Automatic dependency management",
        "Custom lexer and parser",
        "Cross-platform GUI client",
      ],
      githubUrl: "https://github.com/Dark-CodeX/runcpp",
      status: "Stable",
    },
    {
      title: "openutils",
      subtitle: "C++ Utility Library",
      description:
        "Comprehensive C++ utility library with 10,000+ lines of code. Includes optimized data structures, string manipulation, date-time support, and chunk I/O operations.",
      icon: Zap,
      technologies: ["C++", "Data Structures", "Algorithms", "Performance Optimization"],
      features: [
        "Optimized data structures",
        "String manipulation utilities",
        "Date-time support",
        "Cross-platform compatibility",
      ],
      githubUrl: "https://github.com/Dark-CodeX/openutils",
      status: "Stable",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400 font-mono">$ ls -la projects/</h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto font-mono">
            Innovative projects spanning quantum computing, systems programming, and developer tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <project.icon className="h-8 w-8 text-green-400" />
                    <div>
                      <CardTitle className="text-green-400 font-mono">{project.title}</CardTitle>
                      <CardDescription className="text-green-300 font-mono text-sm">{project.subtitle}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-green-400/50 text-green-300 text-xs">
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-green-200 text-sm leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="text-green-400 font-mono text-sm mb-2">Key Features:</h4>
                  <ul className="text-green-200 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-400 mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-green-400/10 text-green-300 border-green-400/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono bg-transparent"
                    asChild
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-mono bg-transparent"
            asChild
          >
            <Link href="https://github.com/Dark-CodeX" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
