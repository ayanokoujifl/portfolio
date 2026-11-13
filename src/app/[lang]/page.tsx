import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight, FileDown, MapPin } from "lucide-react"
import { ProjectShowcaseGrid } from "@/components/ProjectShowcaseGrid"
import { portfolioData, sharedProfile, type Locale } from "@/data/portfolio"

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
    title: meta.homeTitle,
    description: meta.homeDescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
      },
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const t = portfolioData[lang]
  const cvHref = lang === "pt" ? sharedProfile.cvPtPath : sharedProfile.cvEnPath

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-16 sm:py-24">
        <div className="studio-grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[90vw] max-w-4xl -translate-x-1/2 bg-gradient-to-b from-emerald-500/15 via-cyan-500/10 to-transparent blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-6 lg:col-span-8">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{t.hero.badge}</span>
            </div>

            <div className="space-y-3">
              <p className="font-display text-lg font-semibold text-cyan-300 sm:text-xl">
                {t.hero.greeting}
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white leading-[1.06] sm:text-5xl lg:text-6xl">
                {t.hero.roleTitle}
              </h1>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t.hero.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={`/${lang}/projects`}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/20 transition-all hover:bg-emerald-400"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={`/${lang}/aboutme`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>

              <a
                href={cvHref}
                download
                className="inline-flex items-center gap-1.5 rounded-xl px-4 py-3 font-mono text-xs text-emerald-300 transition-colors hover:bg-white/[0.04] hover:text-emerald-200"
              >
                <FileDown className="h-4 w-4" />
                <span>{t.hero.cvCta}</span>
              </a>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {t.hero.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl font-bold text-white">{m.value}</div>
                  <div className="mt-0.5 text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel rounded-3xl p-5 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-4">
                <img
                  src={sharedProfile.avatarSrc}
                  alt={sharedProfile.name}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-2xl border-2 border-emerald-400/50 object-cover"
                />
                <div>
                  <h2 className="font-display text-lg font-bold text-white">
                    {sharedProfile.name}
                  </h2>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{sharedProfile.location}</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2.5 border-t border-white/[0.08] pt-4 text-xs">
                <a
                  href={`mailto:${sharedProfile.email}`}
                  className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 font-mono text-slate-200 transition-colors hover:border-white/20"
                >
                  <span>{sharedProfile.email}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400" />
                </a>
                <a
                  href={sharedProfile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 text-slate-200 transition-colors hover:border-white/20"
                >
                  <span>github.com/ayanokoujifl</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </a>
                <a
                  href={sharedProfile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5 text-slate-200 transition-colors hover:border-white/20"
                >
                  <span>linkedin.com/in/luis-gustavo-dev</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              {t.homeSections.featuredEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
              {t.homeSections.featuredTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              {t.homeSections.featuredSubtitle}
            </p>
          </div>
          <Link
            href={`/${lang}/projects`}
            className="shrink-0 font-mono text-xs font-semibold text-cyan-300 hover:text-cyan-200"
          >
            {t.homeSections.viewAllProjects}
          </Link>
        </div>

        <ProjectShowcaseGrid lang={lang} featuredOnly />
      </section>

      {/* Stack Matrix */}
      <section className="border-y border-white/[0.06] bg-[#080C16]/70 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              {t.homeSections.stackEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
              {t.homeSections.stackTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              {t.homeSections.stackSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {t.stackGroups.map((group) => (
              <div key={group.name} className="glass-panel rounded-2xl p-6">
                <h3 className="font-display text-base font-bold text-white">{group.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              {t.homeSections.experiencePreviewEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
              {t.homeSections.experiencePreviewTitle}
            </h2>
          </div>
          <Link
            href={`/${lang}/aboutme`}
            className="font-mono text-xs font-semibold text-emerald-400 hover:text-emerald-300"
          >
            {t.homeSections.fullResumeCta}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {t.experiences.map((exp) => (
            <article key={exp.company} className="glass-panel rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-white">{exp.company}</h3>
                <span className="font-mono text-xs text-emerald-400">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-cyan-300">{exp.role}</p>
              <p className="mt-0.5 font-mono text-[11px] text-slate-400">{exp.location}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {exp.highlights[0]}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
