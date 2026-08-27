"use client"

import Atomic from "@/assets/atomic.png"
import { Box, Layers2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownHeader } from "./dropdown-header"

export function Header() {
  const pathname = usePathname()
  const [language, route] = pathname.split("/").slice(1)
  const targetLanguage = language === "en" ? "pt" : "en"
  const targetUrl = `/${targetLanguage}/${route ? route : ""}`

  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/dev-atomic-journey"
          className="text-xs text-slate-400/90 flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Atomic} alt="atomic.png" className="size-10" width={40} height={40} priority />
          @dev_atomic_journey
        </a>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <Link
          href={targetUrl}
          className="cursor-pointer text-gray-900 hover:font-semibold hover:text-cyan-600 transition-all ease-out duration-100"
        >
          {pathname.startsWith("/en") ? "EN" : "PT"}
        </Link>
        <DropdownHeader icon={Box} />
      </div>
      <div className="md:hidden block">
        <DropdownHeader icon={Layers2} />
      </div>
    </div>
  )
}
