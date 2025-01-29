"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Box, Icon, LucideIcon, LucideProps } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"

type Props = {
  icon: LucideIcon
}

export function DropdownHeader({ icon: Icon }: Props) {
  const router = useRouter()

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
          Go to...
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/")}>
          Home page
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/projects")}>
          Projects
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/aboutme")}>
          About me
        </DropdownMenuItem>
        <DropdownMenuItem>Contact me</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
