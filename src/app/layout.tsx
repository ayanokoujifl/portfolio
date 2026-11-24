import type { Metadata } from "next"
import { Fira_Mono, JetBrains_Mono } from "next/font/google"
import { MotionProvider } from "@/components/MotionProvider"
import { sharedProfile } from "@/data/portfolio"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const firaMono = Fira_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(sharedProfile.portfolioDomain),
  title: `Atomic Portfolio — ${sharedProfile.name}`,
  description:
    "Portfolio of Luís Gustavo Leite — Mobile (Kotlin/KMP), Backend (Java/Spring Boot), Next.js, Astro & 3D.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.className} ${jetBrainsMono.variable} ${firaMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
