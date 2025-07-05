import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, Sparkles, Scissors, Paintbrush } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Sketchy E-Commerce",
      description: "A hand-drawn aesthetic online store that feels like shopping in an artist's studio ✏️",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "Canvas API"],
      github: "https://github.com/yourusername/sketchy-ecommerce",
      demo: "https://sketchy-ecommerce-demo.com",
      category: "Web App",
      featured: true,
      sketch: "🛍️",
    },
    {
      title: "Craft Task Manager",
      description: "A productivity app that looks like it's made from paper and craft supplies 📝",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Paper.js"],
      github: "https://github.com/yourusername/craft-tasks",
      demo: "https://craft-tasks-demo.com",
      category: "Web App",
      featured: true,
      sketch: "📋",
    },
    {
      title: "Doodle Weather",
      description: "Weather forecasts presented with hand-drawn illustrations and sketchy animations ☀️",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "OpenWeather API", "SVG Animations"],
      github: "https://github.com/yourusername/doodle-weather",
      demo: "https://doodle-weather-demo.com",
      category: "Web App",
      featured: false,
      sketch: "🌤️",
    },
    {
      title: "Artisan Portfolio",
      description: "A portfolio template for artists and makers with authentic craft aesthetics 🎨",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Gatsby", "Contentful", "CSS Animations"],
      github: "https://github.com/yourusername/artisan-portfolio",
      demo: "https://artisan-portfolio-demo.com",
      category: "Template",
      featured: false,
      sketch: "🖼️",
    },
    {
      title: "Mindful Sketches",
      description: "A meditation app with hand-drawn mandalas and calming sketch animations 🧘‍♀️",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Expo", "SVG", "Audio API"],
      github: "https://github.com/yourusername/mindful-sketches",
      demo: "https://mindful-sketches-demo.com",
      category: "Mobile App",
      featured: true,
      sketch: "🕯️",
    },
    {
      title: "Craft Blog Theme",
      description: "A WordPress theme that looks like pages from an artist's journal 📖",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["WordPress", "PHP", "SCSS", "jQuery"],
      github: "https://github.com/yourusername/craft-blog",
      demo: "https://craft-blog-demo.com",
      category: "Theme",
      featured: false,
      sketch: "📝",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header with sketchy title */}
      <div className="text-center mb-16 relative">
        <h1 className="handwritten text-6xl md:text-7xl font-bold mb-6 text-amber-900 relative">
          My Creative Projects
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-80 h-3 bg-yellow-200 opacity-50 transform -rotate-1"></div>
        </h1>

        <div className="flex justify-center items-center space-x-3 text-xl mb-8">
          <Paintbrush className="w-5 h-5 text-amber-600 wiggle-draw" />
          <span className="handwritten text-amber-800">Sketching ideas into digital reality</span>
          <Scissors className="w-5 h-5 text-amber-600 wiggle-draw" />
        </div>

        {/* Sketchy decorative elements */}
        <div className="absolute top-10 left-20 w-12 h-1 bg-amber-400 transform rotate-12 opacity-60"></div>
        <div className="absolute top-20 right-16 w-8 h-8 border-2 border-amber-500 rounded-full transform -rotate-12 opacity-40"></div>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="handwritten text-4xl font-bold text-center mb-12 text-amber-900 relative flex items-center justify-center">
          <Star className="w-6 h-6 mr-3 text-amber-600 wiggle-draw" fill="currentColor" />
          Featured Work
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1">
            <svg viewBox="0 0 200 8" className="w-full h-full">
              <path d="M10,4 Q50,1 100,4 T190,4" stroke="#D2691E" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="craft-card overflow-hidden sketch-shadow hover:scale-105 transition-all duration-300 relative"
              style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="handwritten bg-amber-200 text-amber-900 border-2 border-amber-700 transform rotate-2">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4 text-3xl">{project.sketch}</div>
              </div>

              <div className="p-6">
                <h3 className="handwritten text-2xl font-bold text-amber-900 mb-2 flex items-center">
                  {project.title}
                  <Sparkles className="w-4 h-4 ml-2 text-amber-600" />
                </h3>
                <p className="text-amber-700 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="handwritten text-xs bg-amber-100 text-amber-800 border border-amber-600 transform hover:rotate-1 transition-transform"
                      style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="sketch-button handwritten bg-amber-200 text-amber-900 border-2 border-amber-800 hover:bg-amber-300"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="sketch-button handwritten bg-transparent text-amber-800 border-2 border-amber-600 hover:bg-amber-50"
                    asChild
                  >
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Sketchy corner decoration */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-amber-400 transform rotate-45 opacity-40"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="handwritten text-4xl font-bold text-center mb-12 text-amber-900 relative">
          More Creative Work
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-56 h-1">
            <svg viewBox="0 0 224 8" className="w-full h-full">
              <path d="M10,4 Q56,1 112,4 T214,4" stroke="#D2691E" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="craft-card overflow-hidden sketch-shadow hover:scale-105 transition-all duration-300 relative"
              style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="handwritten text-xs bg-white/90 text-amber-800 border border-amber-600">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-3 left-3 text-2xl">{project.sketch}</div>
              </div>

              <div className="p-4">
                <h3 className="handwritten text-lg font-semibold text-amber-900 mb-2">{project.title}</h3>
                <p className="text-sm text-amber-700 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="handwritten text-xs bg-amber-100 text-amber-700 border border-amber-500"
                      style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="handwritten text-xs bg-amber-50 text-amber-600 border border-amber-400"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="sketch-button handwritten text-xs flex-1 bg-transparent border border-amber-600 text-amber-800 hover:bg-amber-50"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="sketch-button handwritten text-xs flex-1 bg-transparent border border-amber-600 text-amber-800 hover:bg-amber-50"
                    asChild
                  >
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Random sketchy decoration */}
              <div
                className="absolute w-2 h-2 bg-amber-400 opacity-60"
                style={{
                  bottom: `${10 + Math.random() * 20}%`,
                  right: `${10 + Math.random() * 20}%`,
                  transform: `rotate(${Math.random() * 90}deg)`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
