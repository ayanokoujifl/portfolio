"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileDown, Globe, Menu, X } from "lucide-react"
import { portfolioData, sharedProfile, type Locale } from "@/data/portfolio"

export function Navbar({ lang }: { lang: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const t = portfolioData[lang].nav

  const targetLang: Locale = lang === "pt" ? "en" : "pt"
  const switchedPath = pathname?.replace(/^\/(pt|en)/, `/${targetLang}`) || `/${targetLang}`
  const cvHref = lang === "pt" ? sharedProfile.cvPtPath : sharedProfile.cvEnPath

  const links = [
    { href: `/${lang}`, label: t.home, exact: true },
    { href: `/${lang}/projects`, label: t.projects, exact: false },
    { href: `/${lang}/aboutme`, label: t.about, exact: false },
  ]

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : Boolean(pathname?.startsWith(href))

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#060911]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Identity */}
        <Link
          href={`/${lang}`}
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-3 shrink-0"
        >
          <img
            src={sharedProfile.avatarSrc}
            alt={sharedProfile.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-white/15 object-cover transition-colors group-hover:border-emerald-400/60"
          />
          <div className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-tight text-white">
              {sharedProfile.name}
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-emerald-400/90">
              {sharedProfile.handle}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {links.map((item) => {
            const active = isActive(item.href, item.exact)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href={switchedPath}
            aria-label={`Switch language to ${targetLang.toUpperCase()}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-slate-300 transition-colors hover:border-white/25 hover:text-white"
          >
            <Globe className="h-3.5 w-3.5 text-cyan-400" />
            <span>{t.switchToLabel}</span>
          </Link>

          <a
            href={cvHref}
            download
            className="hidden items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/15 transition-all hover:bg-emerald-400 sm:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>{t.downloadCv}</span>
          </a>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:bg-white/[0.09] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/[0.07] bg-[#080C16]/98 px-4 py-4 space-y-1.5 md:hidden">
          {links.map((item) => {
            const active = isActive(item.href, item.exact)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href={cvHref}
            download
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950"
          >
            <FileDown className="h-4 w-4" />
            <span>{t.downloadCv}</span>
          </a>
        </div>
      )}
    </header>
  )
}
