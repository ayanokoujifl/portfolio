"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileDown, Layers2, X } from "lucide-react"
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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-gray-100/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href={`/${lang}`}
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-2.5 text-xs text-slate-500 transition-colors hover:text-cyan-700"
        >
          <img
            src="/icon.svg"
            alt="Atomic LG logo"
            width={40}
            height={40}
            className="size-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight">
            <span className="block font-bold text-gray-900 group-hover:text-cyan-700">
              {sharedProfile.name}
            </span>
            <span className="block text-[11px] text-slate-400">@dev_atomic_journey</span>
          </div>
        </Link>

        {/* Desktop Minimalist Nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {links.map((item) => {
            const active = isActive(item.href, item.exact)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 py-0.5 text-xs font-semibold transition-all duration-150 ${
                  active
                    ? "border-cyan-500 text-cyan-700"
                    : "border-transparent text-slate-700 hover:border-cyan-400 hover:text-cyan-700"
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <div className="h-4 w-px bg-slate-300" />

          <a
            href={cvHref}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm transition-all hover:border-cyan-500 hover:text-cyan-700"
          >
            <FileDown className="size-3.5 text-cyan-600" />
            <span>{t.downloadCv}</span>
          </a>

          <Link
            href={switchedPath}
            aria-label={`Switch language to ${targetLang.toUpperCase()}`}
            className="cursor-pointer text-xs font-bold text-gray-900 transition-colors hover:text-cyan-600"
          >
            {lang.toUpperCase()} → {t.switchToLabel}
          </Link>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={switchedPath}
            aria-label={`Switch language to ${targetLang.toUpperCase()}`}
            className="rounded border border-slate-300 bg-white px-2 py-1 text-xs font-bold text-gray-900 hover:border-cyan-500 hover:text-cyan-700"
          >
            {t.switchToLabel}
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`inline-flex size-9 items-center justify-center rounded-lg border border-slate-300 bg-white transition-colors ${
              mobileOpen ? "text-cyan-500 border-cyan-400" : "text-gray-900 hover:text-cyan-600"
            }`}
          >
            {mobileOpen ? <X className="size-5" /> : <Layers2 className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 space-y-2 md:hidden shadow-md">
          {links.map((item) => {
            const active = isActive(item.href, item.exact)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-cyan-50 text-cyan-700 font-bold"
                    : "text-slate-700 hover:bg-slate-100"
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
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-50 px-3 py-2 text-xs font-bold text-cyan-800"
          >
            <FileDown className="size-4" />
            <span>{t.downloadCv}</span>
          </a>
        </div>
      )}
    </header>
  )
}
