import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectShowcaseGrid } from "@/components/ProjectShowcaseGrid"
import { portfolioData, type Locale } from "@/data/portfolio"

function isLocale(value: string): value is Locale {
  return value === "pt" || value === "en"
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const meta = portfolioData[lang].meta
  return {
    title: meta.projectsTitle,
    description: meta.projectsDescription,
    alternates: {
      canonical: `/${lang}/projects`,
      languages: {
        "pt-BR": "/pt/projects",
        en: "/en/projects",
      },
    },
  }
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const t = portfolioData[lang].projectsPage

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <div className="bg-gradient-to-b from-gray-100 to-slate-50 px-5 py-12 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">
          {t.eyebrow}
        </p>
        <h1 className="mt-2 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text font-fira text-3xl font-extrabold tracking-tight text-transparent drop-shadow-sm sm:text-4xl">
          {t.title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          {t.subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <ProjectShowcaseGrid lang={lang} />
      </div>
    </div>
  )
}
