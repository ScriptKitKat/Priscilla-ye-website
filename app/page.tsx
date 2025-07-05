import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Instagram, Youtube, Computer, Star, Coffee, Pencil, Brush } from "lucide-react"
import Link from "next/link"

import me from "@/app/assets/image.png"


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 relative">
        <div className="container mx-auto text-center relative">
          {/* Sketchy decorative elements */}
          <div className="absolute top-10 left-10 wiggle-draw">
            <Star className="w-8 h-8 text-amber-600 transform rotate-12" />
            <div className="absolute -top-2 -left-2 w-12 h-12 border-2 border-amber-400 rounded-full transform rotate-45 opacity-30"></div>
          </div>
          <div className="absolute top-20 right-20 wiggle-draw" style={{ animationDelay: "1s" }}>
            <Pencil className="w-6 h-6 text-amber-700 transform -rotate-45" />
          </div>
          <div className="absolute bottom-32 left-20 wiggle-draw" style={{ animationDelay: "2s" }}>
            <Brush className="w-7 h-7 text-amber-600 transform rotate-30" />
          </div>

          {/* Sketchy lines and doodles */}
          <div className="absolute top-32 right-10 w-20 h-1 bg-amber-400 transform rotate-12 opacity-60"></div>
          <div className="absolute bottom-40 right-32 w-16 h-1 bg-amber-500 transform -rotate-6 opacity-40"></div>

          <div className="relative">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center">
                <Avatar className="w-36 h-36 sketch-shadow border-4 border-amber-800 bg-amber-50">
                  <AvatarImage src={me.src} alt="Priscilla" />
                  <AvatarFallback className="text-4xl handwritten bg-amber-100 text-amber-900">PY</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <h1 className="handwritten text-5xl md:text-7xl font-bold mb-6 text-amber-900 relative">
            <span className="relative">
              Hello there!
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-200 opacity-50 transform -rotate-1"></div>
            </span>
            <br />
            <span className="text-amber-700 relative">
              I'm Priscilla Ye
              <div className="absolute -bottom-1 left-0 right-0 h-2 bg-amber-200 opacity-60 transform rotate-1"></div>
            </span>
          </h1>

          <div className="relative max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-amber-800 leading-relaxed handwritten font-medium">
              ✏️ Creative developer & designer who loves creating excellence ✨
            </p>
            {/* Underline doodle */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1">
              <svg viewBox="0 0 200 10" className="w-full h-full">
                <path d="M10,5 Q50,2 100,5 T190,5" stroke="#D2691E" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="sketch-button handwritten text-lg px-8 py-3 bg-amber-200 text-amber-900 border-2 border-amber-800 hover:bg-amber-300"
              asChild
            >
              <Link href="/projects">
                <Computer className="w-5 h-5 mr-2" />
                Check Out My Work
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="sketch-button handwritten text-lg px-8 py-3 bg-transparent text-amber-800 border-2 border-amber-600 hover:bg-amber-50"
              asChild
            >
              <Link href="/about">
                <Coffee className="w-5 h-5 mr-2" />
                Get to Know Me
              </Link>
            </Button>
          </div>

          {/* Social Links with sketchy style */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/ScriptKitKat/", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/priscillaye/", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/priscillatheye/", label: "Instagram" },
              { icon: Youtube, href: "https://www.youtube.com/@itsprye", label: "YouTube" },
            ].map((social, index) => (
              <div key={index} className="relative group">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-14 h-14 sketch-button bg-amber-100 text-amber-800 border-2 border-amber-600 hover:bg-amber-200 group-hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <Link href={social.href} target="_blank">
                    <social.icon className="w-6 h-6" />
                  </Link>
                </Button>
                {/* Sketchy label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="handwritten text-sm text-amber-700 whitespace-nowrap">{social.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sketchy decorative border at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 opacity-30">
            <svg viewBox="0 0 400 10" className="w-full h-full">
              <path d="M0,5 Q100,2 200,5 T400,5" stroke="#8B4513" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick intro section */}
      <section className="py-16 px-4 bg-amber-50/50 relative">
        <div className="container mx-auto text-center">
          {/* Paper tear effect */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-white opacity-80">
            <svg viewBox="0 0 400 20" className="w-full h-full">
              <path d="M0,10 Q100,5 200,10 T400,10 L400,20 L0,20 Z" fill="#FFFEF7" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="handwritten text-4xl font-bold text-amber-900 mb-8 relative">
              What I Love Creating
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1">
                <svg viewBox="0 0 200 8" className="w-full h-full">
                  <path d="M10,4 Q50,1 100,4 T190,4" stroke="#D2691E" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Experiences",
                  description: "Crafting digital spaces that feel warm & inviting",
                  icon: "🎨",
                },
                {
                  title: "User Interfaces",
                  description: "Designing with empathy & attention to detail",
                  icon: "✨",
                },
                {
                  title: "Creative Code",
                  description: "Bringing artistic visions to life through programming",
                  icon: "💻",
                },
              ].map((item, index) => (
                <div key={index} className="craft-card p-6 sketch-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="handwritten text-xl font-semibold text-amber-900 mb-3">{item.title}</h3>
                  <p className="text-amber-700 leading-relaxed">{item.description}</p>
                  {/* Sketchy corner decoration */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400 transform rotate-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
