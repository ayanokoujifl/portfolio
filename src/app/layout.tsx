import type { Metadata } from "next"
import { JetBrains_Mono, Fira_Mono } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata: Metadata = {
  title: "Atomic portfolio",
  description: "Portofolio of Luís Gustavo",
  icons: {
    icon: "/icon.png",
  },
}

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})
const firaSans = Fira_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fira-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetBrainsMono.className} ${firaSans.variable} antialiased bg-gray-100`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
