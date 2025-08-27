import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navbar/Navbar"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Zykus",
  description: "Discover timeless elegance and sophisticated style with our curated collection of premium clothing.",
  generator: "v0.app",
  keywords: ["luxury fashion", "premium clothing", "designer wear", "elegant style"],
  openGraph: {
    title: "Zykus - Premium Fashion",
    description: "Discover timeless elegance and sophisticated style",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}