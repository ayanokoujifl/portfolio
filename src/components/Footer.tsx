import { portfolioData, sharedProfile, type Locale } from "@/data/portfolio"

export function Footer({ lang }: { lang: Locale }) {
  const t = portfolioData[lang].footer
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-gray-100 py-8 text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <img src="/icon.svg" alt="" aria-hidden="true" width={18} height={18} className="size-4" />
            <span className="text-xs font-bold text-gray-900">
              {sharedProfile.name} · @dev_atomic_journey
            </span>
          </div>
          <p className="text-xs text-slate-500">{t.tagline}</p>
          <p className="text-[11px] text-slate-400">
            © {year} {sharedProfile.name}. {t.rights}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <a
            href={sharedProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-colors hover:text-gray-900 hover:font-semibold"
          >
            GitHub ↗
          </a>
          <a
            href={sharedProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-colors hover:text-blue-600 hover:font-semibold"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${sharedProfile.email}`}
            className="text-slate-600 transition-colors hover:text-cyan-700 hover:font-semibold"
          >
            {sharedProfile.email}
          </a>
          <a
            href={sharedProfile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-colors hover:text-green-600 hover:font-semibold"
          >
            WhatsApp ↗
          </a>
          <span className="hidden h-3 w-px bg-slate-300 sm:inline-block" />
          <a href={sharedProfile.cvPtPath} download className="text-cyan-700 hover:underline">
            {t.resumePt}
          </a>
          <a href={sharedProfile.cvEnPath} download className="text-cyan-700 hover:underline">
            {t.resumeEn}
          </a>
        </div>
      </div>
    </footer>
  )
}
