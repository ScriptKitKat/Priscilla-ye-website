"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart, Home, User, Briefcase, Mail, Palette } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Palette },
    // { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 sketch-nav">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center wiggle-draw border-2 border-amber-800 relative">
              <Heart className="w-6 h-6 text-amber-800" fill="currentColor" />
              {/* Sketch lines around logo */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-amber-600 transform -rotate-12"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-amber-600 transform rotate-12"></div>
            </div>
            <span className="handwritten text-2xl font-bold text-amber-900 doodle-line">Priscilla Ye</span>
          </Link>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`sketch-button handwritten text-base font-medium ${
                    isActive
                      ? "bg-amber-200 text-amber-900 border-amber-800"
                      : "text-amber-800 hover:bg-amber-100 border-amber-600"
                  }`}
                >
                  <Link href={item.href} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              )
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={`sketch-button ${
                    isActive ? "bg-amber-200 border-amber-800" : "border-amber-600 hover:bg-amber-100"
                  }`}
                >
                  <Link href={item.href}>
                    <Icon className="w-4 h-4" />
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
