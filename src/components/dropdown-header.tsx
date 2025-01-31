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
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

type Props = {
  icon: LucideIcon
}

export function DropdownHeader({ icon: Icon }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const [language, route] = pathname.split("/").slice(1)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <span
          className={clsx(
            "text-gray-900 hover:text-cyan-400 hover:cursor-pointer transition-all ease-in-out duration-200 active:text-cyan-400",
            isOpen && "text-cyan-400"
          )}
        >
          <Icon onClick={() => setIsOpen(!isOpen)} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 relative right-4">
        <DropdownMenuLabel className="font-fira cursor-default selection:bg-transparent">
          {language === "pt" ? "Ir para..." : "Go to..."}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/" + language)}>
          {language === "pt" ? "Página inicial" : "Home page"}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            const url = `/${language}/projects`
            router.replace(url)
          }}
        >
          {language === "pt" ? "Projetos" : "Projects"}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            console.log(language)
            const url = `/${language}/aboutme`
            router.replace(url)
          }}
        >
          {language === "pt" ? "Sobre mim" : "About me"}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="md:hidden block"
          onClick={() => {
            const url = `/${language === "en" ? "pt" : "en"}/${route}`
            router.replace(url)
          }}
        >
          {language === "pt" ? "Alterar idioma" : "Toggle language"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
