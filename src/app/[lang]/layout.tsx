import { notFound } from "next/navigation"
import { Footer } from "@/components/Footer"
import { HtmlLangSync } from "@/components/HtmlLangSync"
import { Navbar } from "@/components/Navbar"
import { type Locale } from "@/data/portfolio"

function isLocale(value: string): value is Locale {
  return value === "pt" || value === "en"
}

export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <HtmlLangSync lang={lang} />
      <Navbar lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
    </div>
  )
}
