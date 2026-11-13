import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, FileDown } from "lucide-react"
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
  const isPt = lang === "pt"

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Minimalist Centered Atomic Hero — Refined 3bd8f43 Aesthetic */}
      <section className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-5xl flex-col items-center justify-center px-4 py-12 text-center">
        <div className="cursor-default space-y-2">
          <p className="text-2xl font-bold tracking-wide text-gray-900 md:text-3xl">
            {isPt ? "Olá! Eu sou " : "Hi! I’m "}
            <span className="font-extrabold text-cyan-600">Luís Gustavo</span>
            {isPt ? ", " : ", "}
            <span className="tracking-[1.5px]">{isPt ? "Engenheiro de Software" : "Owner"}</span>
            {isPt ? " & criador de" : " and creator of"}
          </p>
          <h1 className="font-fira text-2xl font-light text-cyan-500 md:text-4xl">
            {"<dev atomic journey/>"}
          </h1>
          <p className="mx-auto max-w-2xl pt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
            {t.hero.summary}
          </p>
        </div>

        {/* Classic Hairline Links */}
        <div className="my-6 flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
          <Link
            href={`/${lang}/projects`}
            className="select-none border-b-2 border-cyan-500 font-medium text-gray-900 transition-all duration-150 ease-in-out hover:border-transparent hover:font-bold hover:text-cyan-600"
          >
            {isPt ? "ver meus projetos" : "see my projects"}
          </Link>
          <div className="h-5 w-px bg-gray-900" />
          <Link
            href={`/${lang}/aboutme`}
            className="select-none border-b-2 border-cyan-500 font-medium text-gray-900 transition-all duration-150 ease-in-out hover:border-transparent hover:font-bold hover:text-cyan-600"
          >
            {isPt ? "sobre mim" : "about me"}
          </Link>
          <div className="hidden h-5 w-px bg-gray-900 sm:block" />
          <a
            href={cvHref}
            download
            className="inline-flex select-none items-center gap-1.5 border-b-2 border-[#180370]/40 font-medium text-[#180370] transition-all duration-150 ease-in-out hover:border-transparent hover:font-bold hover:text-cyan-600"
          >
            <FileDown className="size-4" />
            <span>{isPt ? "baixar currículo" : "download resume"}</span>
          </a>
        </div>

        {/* Custom 3D Rotating Atom (transparent animated WebP extracted & optimized from Blender render) */}
        <div className="my-2 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center p-2">
            <div className="pointer-events-none absolute inset-6 rounded-full bg-[#24e4ee]/15 blur-2xl" />
            <picture className="relative z-10 block">
              <source
                media="(prefers-reduced-motion: reduce)"
                srcSet="/media/atomic-3d-poster.webp"
              />
              <img
                src="/media/atomic-3d.webp"
                alt={isPt ? "Átomo 3D rotacionando — marca dev_atomic_journey" : "Rotating 3D Atom — dev_atomic_journey mark"}
                width={320}
                height={320}
                fetchPriority="high"
                decoding="async"
                className="size-64 sm:size-80 object-contain drop-shadow-[0_14px_24px_rgba(24,3,112,0.14)]"
              />
            </picture>
          </div>

          {/* Crisp 3-metric monospace line */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600">
            {t.hero.metrics.map((m) => (
              <div key={m.label} className="flex items-center gap-1.5">
                <span className="font-bold text-[#180370]">{m.value}</span>
                <span className="text-slate-500">· {m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Light Highlights Below the Fold */}
      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                {t.homeSections.featuredEyebrow}
              </span>
              <h2 className="mt-1 font-fira text-2xl font-bold text-gray-900">
                {t.homeSections.featuredTitle}
              </h2>
            </div>
            <Link
              href={`/${lang}/projects`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 hover:text-cyan-500"
            >
              <span>{t.homeSections.viewAllProjects}</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.projects
              .filter((p) => p.featured)
              .map((project) => (
                <article
                  key={project.id}
                  className="carousel-bg flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wide text-cyan-700">
                        {project.categoryLabel}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
          </div>

          {/* Concise Experience Snapshot */}
          <div className="border-t border-slate-200 pt-10">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                  {t.homeSections.experiencePreviewEyebrow}
                </span>
                <h2 className="mt-1 font-fira text-2xl font-bold text-gray-900">
                  {t.homeSections.experiencePreviewTitle}
                </h2>
              </div>
              <Link
                href={`/${lang}/aboutme`}
                className="text-xs font-bold text-[#180370] hover:text-cyan-600"
              >
                {t.homeSections.fullResumeCta}
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {t.experiences.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-gray-900">{exp.company}</h3>
                    <span className="text-xs font-semibold text-cyan-700">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#180370]">{exp.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {exp.highlights[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
