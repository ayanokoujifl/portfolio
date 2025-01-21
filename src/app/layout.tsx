import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Atomic portfolio",
  description: "Portofolio of Luís Gustavo",
  icons: {
    icon: "/icon.png",
  },
}

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jetBrainsMono.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
