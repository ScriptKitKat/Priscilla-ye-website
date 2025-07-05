import { Badge } from "@/components/ui/badge"
import { Camera, Music, Gamepad2, BookOpen, Palette, Code, Heart, Coffee, Book } from "lucide-react"

export default function About() {
  const hobbies = [
    {
      name: "Birdwatching",
      icon: Camera,
      description: "Identifying feathered friends in their natural habitat 🌲",
      doodle: "🐦",
    },
    {
      name: "Vlogging",
      icon: Music,
      description: "Sharing my adventures through video storytelling 🎥",
      doodle: "🎬",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Cozy indie adventures & Solitaire 🎮",
      doodle: "🕹️",
    },
    {
      name: "Reading",
      icon: BookOpen,
      description: "Getting lost in fantasy worlds 📚",
      doodle: "📖",
    },
    {
      name: "Coding",
      icon: Code,
      description: "Building digital dreams into reality 💻",
      doodle: "⌨️",
    },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Figma",
    "Sketch",
    "Photoshop",
    "Illustrator",
    "UI/UX Design",
    "Photography",
    "Watercolor",
    "Digital Art",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header with sketchy title */}
      <div className="text-center mb-16 relative">
        <h1 className="handwritten text-6xl md:text-7xl font-bold mb-6 text-amber-900 relative">
          About Me
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-yellow-200 opacity-60 transform -rotate-1"></div>
        </h1>

        <div className="flex justify-center items-center space-x-3 text-2xl mb-8">
          <Heart className="w-6 h-6 text-amber-600 wiggle-draw" fill="currentColor" />
          <span className="handwritten text-amber-800">Nice to meet you!</span>
          <Heart className="w-6 h-6 text-amber-600 wiggle-draw" fill="currentColor" />
        </div>

        {/* Sketchy decorative elements */}
        <div className="absolute top-0 left-10 w-8 h-8 border-2 border-amber-400 rounded-full transform rotate-12 opacity-40"></div>
        <div className="absolute top-10 right-20 w-6 h-6 border-2 border-amber-500 transform rotate-45 opacity-30"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Personal Story */}
        <div className="space-y-8">
          <div className="craft-card p-8 sketch-shadow relative">
            <div className="absolute top-4 left-4">
              <Coffee className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="handwritten text-3xl font-bold text-amber-900 mb-6 ml-8">My Story</h2>
            <div className="space-y-4 text-amber-800 leading-relaxed">
              <p>
                Hey there! I’m a builder, birdwatcher, and big believer that technology can (and should) make the world a better place. 
                My journey started with curiosity—tinkering with code, wondering how things worked, and dreaming up ways to solve problems
                with tech.
              </p>
              <p>
                When I'm not coding, you'll find me with birdwatching, set on identifying birbs, or vlogging
                fun videos. I believe that excellence comes with breaks too.
              </p>
              <p>
                I'm passionate about creating inclusive and excellent digital experiences. Every project
                is an opportunity to solve problems well and make someone's day a little brighter! ✨
              </p>
            </div>

            {/* Sketchy corner decorations */}
            <div className="absolute bottom-4 right-4 w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <path
                  d="M4,4 Q16,8 28,4 Q24,16 28,28 Q16,24 4,28 Q8,16 4,4"
                  stroke="#D2691E"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Skills with craft aesthetic */}
          <div className="craft-card p-8 sketch-shadow relative">
            <div className="absolute top-4 left-4">
              <Palette className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="handwritten text-3xl font-bold text-amber-900 mb-6 ml-8">My Toolkit</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="handwritten text-sm px-3 py-1 bg-amber-100 text-amber-800 border-2 border-amber-600 transform hover:rotate-1 transition-transform"
                  style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Sketchy underline */}
            <div className="absolute bottom-4 left-8 right-8 h-1">
              <svg viewBox="0 0 200 8" className="w-full h-full">
                <path d="M10,4 Q50,1 100,4 T190,4" stroke="#D2691E" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hobbies Grid */}
        <div>
          <h2 className="handwritten text-4xl font-bold text-center mb-8 text-amber-900 relative">
            Things I Love
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1">
              <svg viewBox="0 0 128 8" className="w-full h-full">
                <path d="M8,4 Q32,1 64,4 T120,4" stroke="#D2691E" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="craft-card p-6 sketch-shadow hover:scale-105 transition-all duration-300 cursor-pointer relative"
                style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{hobby.doodle}</div>
                  <h3 className="handwritten text-xl font-semibold text-amber-900 mb-2">{hobby.name}</h3>
                  <p className="text-sm text-amber-700">{hobby.description}</p>
                </div>

                {/* Random sketchy decorations */}
                <div
                  className="absolute w-3 h-3 border-2 border-amber-400 opacity-40"
                  style={{
                    top: `${10 + Math.random() * 20}%`,
                    right: `${10 + Math.random() * 20}%`,
                    transform: `rotate(${Math.random() * 90}deg)`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fun Facts with paper texture */}
      <div className="craft-card p-8 sketch-shadow mt-16 relative">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Book className="w-8 h-8 text-amber-600 wiggle-draw" />
        </div>

        <h2 className="handwritten text-3xl font-bold text-amber-900 text-center mb-8 mt-4">
          My favorite Bible Verses
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              emoji: "📖",
              fact: "Work willingily at whatever you do, as though you were working for the Lord rather than for people. - Colossians 3:23",
            },
            {
              emoji: "🙏",
              fact: "Seek the Kingdom of God above all else, and live righteously, and he will give you everything you need. - Matthew 6:33",
            },
            {
              emoji: "💡",
              fact: "Your word is a lamp to guide my feet and a light for my path. - Psalm 119:105",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="text-5xl mb-4">{item.emoji}</div>
              <p className="text-amber-800 leading-relaxed handwritten text-lg">{item.fact}</p>

              {/* Sketchy speech bubble tail */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <svg width="20" height="10" viewBox="0 0 20 10">
                  <path d="M10,0 L15,10 L5,10 Z" fill="#FFFEF7" stroke="#8B4513" strokeWidth="1" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Sketchy border decoration */}
        <div className="absolute inset-4 border-2 border-amber-300 opacity-30 transform rotate-1 rounded-lg"></div>
      </div>
    </div>
  )
}
