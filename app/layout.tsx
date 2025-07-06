import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter, Kalam, Caveat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
})
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
})

export const metadata: Metadata = {
  title: "Priscilla Ye's Portfolio",
  description: "A personal portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${kalam.variable} ${caveat.variable}`}>
        {/* SVG Filters for rough effects */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence baseFrequency="0.04" numOctaves="5" result="noise" seed="1" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
            </filter>
            <filter id="pencilTexture" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise" seed="2" />
              <feColorMatrix in="noise" type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 .5 .5 .7 .7 .9 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="multiply" />
            </filter>
          </defs>
        </svg>

        <div className="min-h-screen paper-texture">
          <Navigation />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  )
}
