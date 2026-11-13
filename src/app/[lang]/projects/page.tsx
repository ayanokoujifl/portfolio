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
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
          {t.eyebrow}
        </p>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
          {t.subtitle}
        </p>
      </div>

      <ProjectShowcaseGrid lang={lang} />
    </div>
  )
}
