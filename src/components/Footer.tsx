import { portfolioData, sharedProfile, type Locale } from "@/data/portfolio"

export function Footer({ lang }: { lang: Locale }) {
  const t = portfolioData[lang].footer
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.07] bg-[#04070D] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-display text-sm font-bold text-white">{sharedProfile.name}</span>
          </div>
          <p className="text-xs text-slate-400">{t.tagline}</p>
          <p className="font-mono text-[11px] text-slate-500">
            © {year} {sharedProfile.name}. {t.rights}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          <a
            href={sharedProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors hover:text-white"
          >
            GitHub ↗
          </a>
          <a
            href={sharedProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors hover:text-white"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${sharedProfile.email}`}
            className="font-mono text-slate-300 transition-colors hover:text-cyan-300"
          >
            {sharedProfile.email}
          </a>
          <a
            href={sharedProfile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 transition-colors hover:text-emerald-300"
          >
            WhatsApp ↗
          </a>
          <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
          <a href={sharedProfile.cvPtPath} download className="font-mono text-slate-400 hover:text-emerald-300">
            {t.resumePt}
          </a>
          <a href={sharedProfile.cvEnPath} download className="font-mono text-slate-400 hover:text-emerald-300">
            {t.resumeEn}
          </a>
        </div>
      </div>
    </footer>
  )
}
