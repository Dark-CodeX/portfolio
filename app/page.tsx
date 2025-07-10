import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TechBackground } from "@/components/tech-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <TechBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      <Footer />
      </main>
    </div>
  )
}
