import { Box, Layers2 } from "lucide-react"
import Image from "next/image"
import Atomic from "@/assets/atomic.png"

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
        <span className="cursor-pointer text-gray-900 hover:font-medium hover:text-cyan-600 transition-all ease-out duration-100">
          EN
        </span>
        <span className="text-gray-900 hover:text-cyan-400 hover:cursor-pointer transition-all ease-in-out duration-200">
          <Box />
        </span>
      </div>
      <div className="md:hidden block">
        <span className="text-gray-900 active:text-cyan-400 transition-all ease-in duration-150">
          <Layers2 size={28} strokeWidth={2} />
        </span>
      </div>
    </div>
  )
}
