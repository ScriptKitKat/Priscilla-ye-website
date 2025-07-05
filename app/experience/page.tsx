import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Briefcase, GraduationCap, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Creative Developer",
      company: "Dreamy Digital Studio",
      period: "2022 - Present",
      description:
        "Leading the development of whimsical web experiences for creative agencies and artists. Specializing in interactive animations and user-centered design.",
      achievements: [
        "Increased client satisfaction by 40% through improved UX design",
        "Led a team of 5 developers on major creative projects",
        "Implemented accessibility standards across all projects",
      ],
      type: "work",
    },
    {
      title: "Full Stack Developer",
      company: "Artisan Web Co.",
      period: "2020 - 2022",
      description:
        "Crafted beautiful, functional websites for small businesses and creative professionals. Focused on performance optimization and delightful user experiences.",
      achievements: [
        "Built 25+ custom websites with 99% client retention",
        "Reduced average page load time by 60%",
        "Mentored 3 junior developers",
      ],
      type: "work",
    },
    {
      title: "Junior Developer & Designer",
      company: "Creative Collective",
      period: "2019 - 2020",
      description:
        "Started my journey combining code and creativity, working on diverse projects from e-commerce to portfolio sites.",
      achievements: [
        "Contributed to 15+ successful project launches",
        "Learned modern web technologies and design principles",
        "Collaborated with designers and clients daily",
      ],
      type: "work",
    },
  ]

  const education = [
    {
      title: "Bachelor of Science in Computer Science and Business",
      company: "University of Texas at Austin",
      description:
        "Studied the intersection of technology and business. Specialized in interactive media and user experience design.",
      achievements: [
        "Graduated Magna Cum Laude",
        "Senior thesis on accessible web design",
        "President of Digital Arts Student Society",
      ],
      type: "education",
    },
  ]

  const certifications = [
    "Google UX Design Professional Certificate",
    "AWS Certified Developer Associate",
    "Adobe Certified Expert (Photoshop & Illustrator)",
    "Accessibility Specialist Certification",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="handwritten text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          My Journey
        </h1>
        <div className="flex justify-center items-center space-x-2 text-xl mb-8">
          <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
          <span className="text-gray-600">Growing through creativity & code</span>
          <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
        </div>
        <Button
          size="lg"
          className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 cute-shadow font-fredoka"
          asChild
        >
          <Link href="/resume.pdf" target="_blank">
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Work Experience */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-fredoka text-3xl font-bold text-gray-800 flex items-center mb-8">
            <Briefcase className="w-6 h-6 mr-3 text-purple-500" />
            Work Experience
          </h2>

          {experiences.map((exp, index) => (
            <Card key={index} className="artsy-card cute-shadow rounded-3xl border-0">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="font-fredoka text-xl text-gray-800">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-purple-600">{exp.company}</CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 border-0 rounded-full">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Education */}
          <Card className="artsy-card cute-shadow rounded-3xl border-0">
            <CardHeader>
              <CardTitle className="font-fredoka text-xl text-gray-800 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-500" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-800">{edu.title}</h3>
                  <p className="text-purple-600 font-medium">{edu.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                  <p className="text-sm text-gray-600 mb-3">{edu.description}</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="artsy-card cute-shadow rounded-3xl border-0">
            <CardHeader>
              <CardTitle className="font-fredoka text-xl text-gray-800 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Summary */}
          <Card className="artsy-card cute-shadow rounded-3xl border-0">
            <CardHeader>
              <CardTitle className="font-fredoka text-xl text-gray-800">Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Next.js", "TypeScript", "Tailwind"].map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs rounded-full bg-pink-100 text-gray-700 border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Design</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Figma", "Adobe CC", "UI/UX", "Prototyping"].map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs rounded-full bg-purple-100 text-gray-700 border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Node.js", "Python", "PostgreSQL", "AWS"].map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs rounded-full bg-blue-100 text-gray-700 border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
