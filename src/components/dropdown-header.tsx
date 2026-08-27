"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import clsx from "clsx"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

type Props = {
  icon: LucideIcon
}

export function DropdownHeader({ icon: Icon }: Props) {
  const pathname = usePathname()
  const [language, route] = pathname.split("/").slice(1)
  const [isOpen, setIsOpen] = useState(false)

  const homeUrl = `/${language}`
  const projectsUrl = `/${language}/projects`
  const aboutMeUrl = `/${language}/aboutme`
  const toggleLangUrl = `/${language === "en" ? "pt" : "en"}/${route ? route : ""}`

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <span
          className={clsx(
            "text-gray-900 hover:text-cyan-400 hover:cursor-pointer transition-all ease-in-out duration-200 active:text-cyan-400",
            isOpen && "text-cyan-400"
          )}
        >
          <Icon />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 relative right-4">
        <DropdownMenuLabel className="font-fira cursor-default selection:bg-transparent">
          {language === "pt" ? "Ir para..." : "Go to..."}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={homeUrl} className="w-full cursor-pointer">
            {language === "pt" ? "Página inicial" : "Home page"}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={projectsUrl} className="w-full cursor-pointer">
            {language === "pt" ? "Projetos" : "Projects"}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={aboutMeUrl} className="w-full cursor-pointer">
            {language === "pt" ? "Sobre mim" : "About me"}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="md:hidden">
          <Link href={toggleLangUrl} className="w-full cursor-pointer">
            {language === "pt" ? "Alterar idioma" : "Toggle language"}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
