import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { FileDown, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { AtomicIcon } from "@/components/AtomicIcon"
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
    <div className="bg-gray-100 text-gray-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 sm:px-6">
        {/* Heading + CV Download Buttons — Restores 3bd8f43 .loop-gradient */}
        <section className="space-y-4 text-center">
          <h1 className="loop-gradient font-fira text-3xl font-bold sm:text-4xl">
            {lang === "pt" ? "Quem eu sou" : "Who I am"}
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.aboutPage.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={sharedProfile.cvPtPath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-600/40 bg-white px-4 py-2.5 text-xs font-bold text-cyan-800 shadow-sm transition-all hover:border-cyan-500 hover:bg-cyan-50"
            >
              <FileDown className="size-4 text-cyan-600" />
              <span>{t.aboutPage.downloadPtLabel}</span>
            </a>
            <a
              href={sharedProfile.cvEnPath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[#180370]/30 bg-white px-4 py-2.5 text-xs font-bold text-[#180370] shadow-sm transition-all hover:border-[#180370] hover:bg-slate-50"
            >
              <FileDown className="size-4" />
              <span>{t.aboutPage.downloadEnLabel}</span>
            </a>
          </div>
        </section>

        {/* Skills Matrix with Classic <AtomicIcon /> Bullets */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
            {t.aboutPage.skillsHeading}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.stackGroups.map((group) => (
              <div key={group.name} className="space-y-2">
                <p className="flex items-center text-sm font-bold text-gray-900">
                  <AtomicIcon />
                  {group.name}
                </p>
                <p className="pl-7 text-xs leading-relaxed text-slate-600">
                  ({group.items.join(", ")})
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-0.5 w-full bg-slate-300" />

        {/* Work Experience Timeline (3bd8f43 Border-Bottom Clean Rhythm) */}
        <section className="space-y-6">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            {t.aboutPage.experienceHeading}
          </h2>
          <ul className="space-y-5">
            {t.experiences.map((exp) => (
              <li
                key={`${exp.company}-${exp.period}`}
                className="border-b-2 border-slate-300 pb-5"
              >
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-base font-bold text-gray-900">{exp.company}</h3>
                    <span className="text-xs font-semibold text-cyan-700">
                      — {exp.role}
                      {exp.mode ? ` (${exp.mode})` : ""}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-[#180370]">{exp.period}</span> ·{" "}
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-slate-700 sm:text-sm">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Education, Certifications & Languages */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-base font-bold text-gray-900">
              {t.aboutPage.educationHeading}
            </h2>
            <div className="space-y-3">
              {t.education.map((edu) => (
                <div key={edu.institution} className="border-l-2 border-cyan-500 pl-3">
                  <h3 className="text-xs font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-xs text-slate-600">{edu.institution}</p>
                  <p className="text-[11px] text-slate-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-base font-bold text-gray-900">
              {t.aboutPage.certificationsHeading}
            </h2>
            <ul className="space-y-2 text-xs leading-relaxed text-slate-700">
              {t.certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <AtomicIcon className="size-4 mt-0.5 shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-base font-bold text-gray-900">
              {t.aboutPage.languagesHeading}
            </h2>
            <div className="space-y-2.5">
              {t.languages.map((item) => (
                <div key={item.name} className="border-b border-slate-200 pb-2 last:border-b-0">
                  <p className="text-xs font-bold text-gray-900">{item.name}</p>
                  <p className="text-[11px] text-slate-600">{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-0.5 w-full bg-slate-300" />

        {/* Talk With Me Strip — Direct Signature Style from 3bd8f43 */}
        <section className="flex flex-col items-center justify-center py-2">
          <h3 className="text-xl font-bold text-gray-900">
            {lang === "pt" ? "Fale comigo" : "Talk with me"}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 py-4 text-xs sm:text-sm">
            <a
              href="https://www.instagram.com/dev_atomic_journey"
              className="flex items-center gap-1.5 text-slate-500 transition-colors duration-100 hover:font-bold hover:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-4" />
              <span>@dev_atomic_journey</span>
            </a>
            <a
              href={sharedProfile.githubUrl}
              className="flex items-center gap-1.5 text-slate-500 transition-colors duration-100 hover:font-bold hover:text-slate-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              <span>ayanokoujifl</span>
            </a>
            <a
              href={sharedProfile.linkedinUrl}
              className="flex items-center gap-1.5 text-slate-500 transition-colors duration-100 hover:font-bold hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-4" />
              <span>luis-gustavo-dev</span>
            </a>
            <a
              href={`mailto:${sharedProfile.email}`}
              className="flex items-center gap-1.5 text-slate-500 transition-colors duration-100 hover:font-bold hover:text-red-600"
            >
              <Mail className="size-4" />
              <span>{sharedProfile.email}</span>
            </a>
            <a
              href={`${sharedProfile.whatsappUrl}?text=Ol%C3%A1%2C%20tudo%20bem%3F`}
              className="flex items-center gap-1.5 text-slate-500 transition-colors duration-100 hover:font-bold hover:text-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="size-4" />
              <span>{sharedProfile.phoneDisplay}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
