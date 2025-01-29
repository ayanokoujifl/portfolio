import { Box, Layers2 } from "lucide-react"
import Image from "next/image"
import Atomic from "@/assets/atomic.png"
import { DropdownHeader } from "./dropdown-header"

export function Header() {
  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/dev-atomic-journey"
          className="text-xs text-slate-400/90 flex items-center gap-2"
          target="_blank"
        >
          <Image src={Atomic} alt="atomic.png" className="size-10" priority />
          @dev_atomic_journey
        </a>
      </div>
      <div className="hidden md:flex gap-3">
        <span className="cursor-pointer text-gray-900 hover:font-semibold hover:text-cyan-600 transition-all ease-out duration-100">
          EN
        </span>
        <DropdownHeader icon={Box} />
      </div>
      <div className="md:hidden block">
        <DropdownHeader icon={Layers2} />
      </div>
    </div>
  )
}
