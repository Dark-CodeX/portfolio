import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Zap, Code, Award, Users, BookOpen } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "Quantum Computing",
      description:
        "Building QubitVerse - a quantum circuit simulator with 17+ quantum gates and interactive visualization.",
    },
    {
      icon: Code,
      title: "Language Design",
      description:
        "Created Horizon - a memory-safe programming language combining C++ flexibility with Rust-like safety.",
    },
    {
      icon: Zap,
      title: "Systems Programming",
      description: "Developed runcpp build system and openutils library with 10,000+ lines of optimized C++ code.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Helped 60,000+ developers globally through Stack Overflow contributions and open-source projects.",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Winner of Bi-Wizard Coding Contest 2022 with appreciation from GeeksforGeeks CEO.",
    },
    {
      icon: BookOpen,
      title: "Education & Teaching",
      description: "DSA/CP Coordinator organizing workshops and teaching data structures to engineering students.",
    },
  ]

  const technologies = [
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Linux",
    "Git",
    "Quantum Computing",
    "Machine Learning",
    "Data Structures",
    "Algorithms",
    "System Design",
    "Memory Management",
    "Compiler Design",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400 font-mono">{"$"} cat about_me.md</h2>
          <div className="bg-gray-900 border border-green-400/30 rounded-lg p-6 text-left max-w-4xl mx-auto">
            <div className="font-mono text-green-300 space-y-2">
              <div className="text-green-400"># About Tushar Chaurasia</div>
              <div></div>
              <div>## Summary</div>
              <div className="text-green-200">
                Passionate software engineer with 7+ years of programming experience since age 13. Currently pursuing
                B.Tech in Computer Science with AI/ML specialization (SGPA: 8.42). Active open-source contributor with
                expertise in quantum computing, systems programming, and advanced C++.
              </div>
              <div></div>
              <div>## Current Focus</div>
              <div className="text-green-200">
                - Building QubitVerse: Quantum Computer Circuit Simulator
                <br />- Developing Horizon: Memory-safe programming language
                <br />- Contributing to open-source projects and helping developers globally
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-400 font-mono">## Professional Profile</h3>
            <p className="text-green-200 mb-4">
              Started as a curious student who loved building things with code at age 13. Over the years, I've developed
              expertise in quantum computing, systems programming, and advanced C++ development.
            </p>
            <p className="text-green-200 mb-4">
              I specialize in creating innovative solutions from quantum simulators to programming languages. When I'm
              not coding, you can find me contributing to open source projects, helping developers on Stack Overflow, or
              exploring new frontiers in quantum computing.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-lg border-2 border-green-400/50 overflow-hidden bg-gray-900/50 flex items-center justify-center">
              <img
                src="full_image.jpeg?height=256&width=256"
                alt="Tushar Chaurasia - Professional Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-400/30 hover:border-green-400/50 transition-colors"
            >
              <CardContent className="pt-6">
                <highlight.icon className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2 text-green-400 font-mono">{highlight.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">$ grep -r "technologies" skills/</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="border-green-400/50 text-green-300 hover:bg-green-400/10">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
