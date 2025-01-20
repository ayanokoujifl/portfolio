import Image from "next/image"
import Atomic from "@/assets/atomic.png"
import { Box, Brain } from "lucide-react"
import colors from "tailwindcss/colors"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-between p-3">
          <div>
            <Image src={Atomic} alt="atomic.png" className="size-24" />
          </div>
          <div className="hidden md:flex gap-3">
            <span>EN</span>
            <span className="text-gray-900 hover:text-cyan-400 hover:cursor-pointer transition-all ease-in-out duration-200">
              <Box />
            </span>
          </div>
          <div className="md:hidden block">
            <Brain size={24} strokeWidth={2} color={colors.gray[900]} />
          </div>
        </div>
        <div></div>
      </main>
    </>
  )
}
