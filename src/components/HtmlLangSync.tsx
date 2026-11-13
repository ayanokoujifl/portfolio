"use client"

import { useEffect } from "react"
import type { Locale } from "@/data/portfolio"

export function HtmlLangSync({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
  }, [lang])

  return null
}
