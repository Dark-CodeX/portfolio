import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Brain, Award, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Systems Programming",
      icon: Code,
      skills: [
        { name: "C++", level: 95, years: "10+" },
        { name: "C", level: 90, years: "8+" },
        { name: "Linux/Unix", level: 85, years: "6+" },
        { name: "Memory Management", level: 90, years: "5+" },
      ],
    },
    {
      title: "Web Technologies",
      icon: Wrench,
      skills: [
        { name: "JavaScript/Node.js", level: 85, years: "4+" },
        { name: "React/ReactJS", level: 80, years: "3+" },
        { name: "Python", level: 85, years: "5+" },
        { name: "Git/GitHub", level: 95, years: "8+" },
      ],
    },
    {
      title: "Specialized Domains",
      icon: Brain,
      skills: [
        { name: "Quantum Computing", level: 80, years: "2+" },
        { name: "Machine Learning", level: 75, years: "3+" },
        { name: "Compiler Design", level: 85, years: "2+" },
        { name: "Algorithm Design", level: 90, years: "8+" },
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: Database,
      skills: [
        { name: "Visual Studio/VS Code", level: 90, years: "6+" },
        { name: "MySQL/RDBMS", level: 75, years: "3+" },
        { name: "Pandas/NumPy", level: 80, years: "3+" },
        { name: "Jupyter Notebook", level: 85, years: "3+" },
      ],
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "3000+ Stack Exchange Reputation",
      description: "Active contributor helping developers globally",
    },
    {
      icon: Users,
      title: "58,000+ Developers Helped",
      description: "Through Stack Overflow answers and open-source projects",
    },
    {
      icon: Code,
      title: "15+ Open Source Projects",
      description: "Including quantum simulators and programming languages",
    },
    { icon: Brain, title: "GeeksforGeeks Recognition", description: "Winner of Bi-Wizard Coding Contest 2022" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400 font-mono">$ cat /proc/skills</h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto font-mono">
            Technical expertise built over 7+ years of passionate programming and system design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-900/50 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400 font-mono flex items-center">
                  <category.icon className="h-6 w-6 mr-2" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-green-300 font-mono">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-green-400/50 text-green-300 text-xs">
                          {skill.years}
                        </Badge>
                        <span className="text-sm text-green-200 font-mono">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800">
                      <div
                        className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </Progress>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6 text-green-400 font-mono">$ grep -r "achievements" career/</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <achievement.icon className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-green-300 font-mono font-semibold">{achievement.title}</h4>
                  <p className="text-green-200 text-sm mt-1">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages Proficiency */}
        <div className="mt-12 bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-green-400 font-mono">$ ./language_proficiency.sh</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 font-mono">C++</div>
              <div className="text-green-300 text-sm">Expert</div>
              <div className="text-green-200 text-xs">10+ years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 font-mono">Python</div>
              <div className="text-green-300 text-sm">Advanced</div>
              <div className="text-green-200 text-xs">5+ years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 font-mono">JS</div>
              <div className="text-green-300 text-sm">Advanced</div>
              <div className="text-green-200 text-xs">4+ years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 font-mono">C</div>
              <div className="text-green-300 text-sm">Advanced</div>
              <div className="text-green-200 text-xs">8+ years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
