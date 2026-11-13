import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight, Award, Briefcase, FileDown, GraduationCap, Languages } from "lucide-react"
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
    title: meta.aboutTitle,
    description: meta.aboutDescription,
    alternates: {
      canonical: `/${lang}/aboutme`,
      languages: {
        "pt-BR": "/pt/aboutme",
        en: "/en/aboutme",
      },
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const t = portfolioData[lang]

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      {/* Intro & PDF Actions */}
      <section className="glass-panel rounded-3xl p-6 sm:p-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              {t.aboutPage.eyebrow}
            </p>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {t.aboutPage.title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300">
              {t.aboutPage.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={sharedProfile.cvPtPath}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 sm:text-sm"
              >
                <FileDown className="h-4 w-4" />
                <span>{t.aboutPage.downloadPtLabel}</span>
              </a>
              <a
                href={sharedProfile.cvEnPath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-xs font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-white/[0.09] sm:text-sm"
              >
                <FileDown className="h-4 w-4 text-cyan-400" />
                <span>{t.aboutPage.downloadEnLabel}</span>
              </a>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-[#060911]/80 p-5 text-xs lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              {t.aboutPage.directContactHeading}
            </p>
            <a
              href={`mailto:${sharedProfile.email}`}
              className="flex items-center justify-between font-mono text-cyan-300 hover:underline"
            >
              <span>{sharedProfile.email}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={sharedProfile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-emerald-300 hover:underline"
            >
              <span>{sharedProfile.phoneDisplay}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={sharedProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-slate-200 hover:text-white"
            >
              <span>LinkedIn · luis-gustavo-dev</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={sharedProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-slate-200 hover:text-white"
            >
              <span>GitHub · ayanokoujifl</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <Briefcase className="h-5 w-5 text-emerald-400" />
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {t.aboutPage.experienceHeading}
          </h2>
        </div>

        <div className="space-y-5">
          {t.experiences.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="glass-panel rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-sm font-semibold text-cyan-300">
                    {exp.role}
                    {exp.mode ? ` · ${exp.mode}` : ""}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-300">
                    {exp.period}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] text-slate-400">
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 border-t border-white/[0.07] pt-4 text-sm text-slate-300">
                {exp.highlights.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education, Certifications, Languages */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="glass-panel rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            <h2 className="font-display text-lg font-bold text-white">
              {t.aboutPage.educationHeading}
            </h2>
          </div>
          <div className="space-y-4">
            {t.education.map((edu) => (
              <div key={edu.institution} className="border-l-2 border-cyan-500/40 pl-3.5">
                <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                <p className="text-xs text-slate-300">{edu.institution}</p>
                <p className="mt-0.5 font-mono text-[11px] text-slate-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-400" />
            <h2 className="font-display text-lg font-bold text-white">
              {t.aboutPage.certificationsHeading}
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            {t.certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2.5 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <div className="mb-4 flex items-center gap-2">
            <Languages className="h-5 w-5 text-cyan-400" />
            <h2 className="font-display text-lg font-bold text-white">
              {t.aboutPage.languagesHeading}
            </h2>
          </div>
          <div className="space-y-3">
            {t.languages.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3"
              >
                <div className="text-sm font-bold text-white">{item.name}</div>
                <div className="text-xs text-slate-400">{item.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="space-y-6">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          {t.aboutPage.skillsHeading}
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {t.stackGroups.map((group) => (
            <div key={group.name} className="glass-panel rounded-2xl p-6">
              <h3 className="font-display text-base font-bold text-white">{group.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
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
      </section>
    </div>
  )
}
