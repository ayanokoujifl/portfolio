import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Outfit } from "next/font/google"
import { sharedProfile } from "@/data/portfolio"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(sharedProfile.portfolioDomain),
  title: `${sharedProfile.name} | Software Engineer`,
  description:
    "Software Engineering Portfolio & Resume — Kotlin, Java/Spring Boot, Next.js, Astro & Hexagonal Architecture.",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetBrainsMono.variable} bg-[#060911] font-sans text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
