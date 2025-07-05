"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Heart, Github, Linkedin, Instagram, Youtube, Coffee, PenTool } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header with sketchy title */}
      <div className="text-center mb-16 relative">
        <h1 className="handwritten text-6xl md:text-7xl font-bold mb-6 text-amber-900 relative">
          Let's Connect!
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-72 h-3 bg-yellow-200 opacity-50 transform -rotate-1"></div>
        </h1>

        <div className="flex justify-center items-center space-x-3 text-xl mb-8">
          <Heart className="w-5 h-5 text-amber-600 wiggle-draw" fill="currentColor" />
          <span className="handwritten text-amber-800">I'd love to hear from you</span>
          <Heart className="w-5 h-5 text-amber-600 wiggle-draw" fill="currentColor" />
        </div>

        <p className="text-lg text-amber-700 max-w-2xl mx-auto leading-relaxed handwritten">
          Whether you want to collaborate on a project, chat about design, or just say hello - my inbox is always open!
          Drop me a line and let's create something amazing together ✨
        </p>

        {/* Sketchy decorative elements */}
        <div className="absolute top-10 left-10 w-8 h-1 bg-amber-400 transform rotate-45 opacity-60"></div>
        <div className="absolute top-20 right-20 w-6 h-6 border-2 border-amber-500 transform -rotate-12 opacity-40"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="craft-card p-8 sketch-shadow relative">
          <div className="absolute top-4 left-4">
            <PenTool className="w-6 h-6 text-amber-600 wiggle-draw" />
          </div>

          <h2 className="handwritten text-3xl font-bold text-amber-900 mb-6 ml-8">Send Me a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block handwritten text-sm font-medium text-amber-800 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="sketch-button bg-amber-50 border-2 border-amber-600 focus:border-amber-800 handwritten"
                  placeholder="What should I call you?"
                />
              </div>
              <div>
                <label htmlFor="email" className="block handwritten text-sm font-medium text-amber-800 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="sketch-button bg-amber-50 border-2 border-amber-600 focus:border-amber-800 handwritten"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block handwritten text-sm font-medium text-amber-800 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="sketch-button bg-amber-50 border-2 border-amber-600 focus:border-amber-800 handwritten"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block handwritten text-sm font-medium text-amber-800 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="sketch-button bg-amber-50 border-2 border-amber-600 focus:border-amber-800 handwritten resize-none"
                placeholder="Tell me about your project, ideas, or just say hi! I love hearing from creative people ✨"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sketch-button handwritten text-lg bg-amber-200 text-amber-900 border-2 border-amber-800 hover:bg-amber-300"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>

          {/* Sketchy corner decoration */}
          <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-amber-400 transform rotate-45 opacity-30"></div>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="craft-card p-8 sketch-shadow relative">
            <div className="absolute top-4 left-4">
              <Coffee className="w-6 h-6 text-amber-600 wiggle-draw" />
            </div>

            <h2 className="handwritten text-3xl font-bold text-amber-900 mb-6 ml-8">Get In Touch</h2>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "priscilla.ye@gmail.com", color: "bg-pink-100" },
                { icon: MapPin, label: "Location", value: "TX, USA", color: "bg-green-100" },
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center border-2 border-amber-600 sketch-shadow`}
                  >
                    <contact.icon className="w-6 h-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="handwritten font-semibold text-amber-900">{contact.label}</h3>
                    <p className="text-amber-700">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="craft-card p-8 sketch-shadow relative">
            <h2 className="handwritten text-3xl font-bold text-amber-900 mb-6">Find Me Online</h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/ScriptKitKat" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/priscillaye" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/priscillatheye" },
                { icon: Youtube, label: "YouTube", href: "https://youtube.com/@itsprye" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-16 sketch-button bg-amber-100 text-amber-800 border-2 border-amber-600 hover:bg-amber-200 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href={social.href} target="_blank" className="flex flex-col items-center space-y-1">
                    <social.icon className="w-6 h-6" />
                    <span className="handwritten text-sm font-medium">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>

            {/* Sketchy underline */}
            <div className="absolute bottom-4 left-8 right-8 h-1">
              <svg viewBox="0 0 200 8" className="w-full h-full">
                <path d="M10,4 Q50,1 100,4 T190,4" stroke="#D2691E" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>

          {/* Fun CTA */}
          <div className="craft-card p-6 sketch-shadow bg-gradient-to-r from-amber-50 to-yellow-50 relative">
            <div className="text-center">
              <div className="text-4xl mb-3">☕</div>
              <h3 className="handwritten text-xl font-bold text-amber-900 mb-2">Coffee Chat?</h3>
              <p className="text-sm text-amber-700 mb-4 handwritten">
                I'm always up for a virtual coffee chat about design, development, or creative projects!
              </p>
              <Button
                size="sm"
                className="sketch-button handwritten bg-amber-300 text-amber-900 border-2 border-amber-800 hover:bg-amber-400"
                asChild
              >
                <Link href="mailto:priscilla.ye@gmail.com?subject=Coffee Chat">Let's Chat!</Link>
              </Button>
            </div>

            {/* Sketchy decorative corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-400 transform -rotate-12"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 transform rotate-12"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400 transform rotate-12"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400 transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
