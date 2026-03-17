import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, BookOpen } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "DSA/CP Coordinator",
      company: "WEBYTES",
      location: "Sonepat, Haryana",
      period: "Apr 2024 – Aug 2025",
      type: "Leadership Role",
      description:
        "Organized coding workshops and promoted data structures and competitive programming culture within the university.",
      achievements: [
        "Conducted multiple DSA workshops for 100+ students",
        "Delivered lectures on strings, linked lists, vectors, and core data structures",
        "Mentored second- and third-year Computer Science students",
        "Helped build an active competitive programming environment on campus",
      ],
      skills: ["Leadership", "Teaching", "Public Speaking", "Data Structures", "Algorithms"],
    },
    {
      title: "Event Coordinator",
      company: "VERGE",
      location: "Sonepat, Delhi-NCR",
      period: "Jan 2025 – Feb 2025",
      type: "Organizing Role",
      description:
        "Managed logistics and execution of technical events, coordinating teams, speakers, and event schedules.",
      achievements: [
        "Planned and executed technical events with multiple stakeholders",
        "Coordinated with speakers, judges, and sponsors",
        "Managed volunteer teams and event logistics",
        "Handled real-time problem solving during events",
      ],
      skills: ["Event Management", "Coordination", "Leadership", "Communication", "Operations"],
    },
    {
      title: "Project Admin",
      company: "Open Source Connect",
      location: "Remote",
      period: "Aug 2025 – Sept 2025",
      type: "Open Source Leadership",
      description:
        "Managed open-source repositories and contributor workflows for community-driven projects.",
      achievements: [
        "Managed repositories, issues, and contributor workflows",
        "Reviewed pull requests and enforced contribution guidelines",
        "Coordinated communication between maintainers and contributors",
        "Tracked progress and ensured consistent project delivery",
      ],
      skills: ["Open Source", "Git", "Project Management", "Code Review", "Community Leadership"],
    },
  ]

  const education = {
    degree: "B.Tech. in Computer Science and Engineering",
    specialization: "Artificial Intelligence and Data Science",
    university: "SRM University Delhi-NCR, Sonepat",
    period: "June 2023 – June 2027",
    sgpa: "8.739",
    status: "Pursuing",
  }

  const certifications = [
    {
      title: "Hackstasy Hackathon 2025 Finalist",
      issuer: "Microsoft, Noida",
      description: "Top 15 teams finalist with final round hosted at Microsoft, Noida",
      icon: Award,
    },
    {
      title: "Bi-Wizard Coding Contest 2022 Winner",
      issuer: "GeeksforGeeks",
      description: "Received appreciation and letter of recommendation from CEO Sandeep Jain",
      icon: Award,
    },
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford Online",
      description: "Completed Andrew Ng’s full ML specialization covering regression, classification, and modern ML workflows",
      icon: BookOpen,
    },
    {
      title: "Supervised Machine Learning: Regression & Classification",
      issuer: "DeepLearning.AI & Stanford Online",
      description: "Focused on regression models, classification algorithms, and model evaluation techniques",
      icon: BookOpen,
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI & Stanford Online",
      description: "Covered neural networks, training pipelines, and practical machine learning techniques",
      icon: BookOpen,
    },
    {
      title: "Unsupervised Learning, Recommenders & Reinforcement Learning",
      issuer: "DeepLearning.AI & Stanford Online",
      description: "Studied clustering, recommender systems, and reinforcement learning foundations",
      icon: BookOpen,
    },
    {
      title: "Python Programming Certificate",
      issuer: "IBM",
      description: "Completed Python programming course and received certificate of participation",
      icon: BookOpen,
    },
    {
      title: "Open Source Connect India 2025",
      issuer: "Open Source Connect",
      description: "Served as Project Admin for QubitVerse and managed contributor workflows",
      icon: Award,
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-400 font-mono">$ cat experience.log</h2>
          <p className="text-lg text-green-200 max-w-2xl mx-auto font-mono">
            Professional experience, education, and achievements in software engineering and leadership.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-400 font-mono">## Professional Experience</h3>
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-900/50 border-green-400/30 mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-green-400 font-mono text-xl">{exp.title}</CardTitle>
                    <div className="text-green-300 font-mono text-lg">{exp.company}</div>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <Badge variant="outline" className="border-green-400/50 text-green-300 mb-2">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-green-200 text-sm font-mono">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-green-200 text-sm font-mono">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-green-200 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-green-400 font-mono text-sm mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-green-200 text-sm flex items-start">
                        <span className="text-green-400 mr-2 mt-1">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-green-400/10 text-green-300 border-green-400/30 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-green-400 font-mono">## Education</h3>
          <Card className="bg-gray-900/50 border-green-400/30">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-green-400 font-mono text-xl">{education.degree}</CardTitle>
                  <div className="text-green-300 font-mono">Specialization: {education.specialization}</div>
                  <div className="text-green-200 font-mono">{education.university}</div>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <Badge variant="outline" className="border-green-400/50 text-green-300 mb-2">
                    {education.status}
                  </Badge>
                  <div className="text-green-200 text-sm font-mono">{education.period}</div>
                  <div className="text-green-400 font-mono font-semibold">SGPA: {education.sgpa}</div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400 font-mono">## Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-900/50 border-green-400/30">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <cert.icon className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-green-400 font-mono font-semibold mb-1">{cert.title}</h4>
                      <div className="text-green-300 font-mono text-sm mb-2">{cert.issuer}</div>
                      <p className="text-green-200 text-sm">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
