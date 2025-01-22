import { Cube } from "@/components/cube"
import { Cursor } from "@/components/cursor"
import { Header } from "@/components/header"
import { Box, Layers2 } from "lucide-react"
import Image from "next/image"
import colors from "tailwindcss/colors"
export default function Home() {
  return (
    <>
      <main
        className="min-h-screen bg-gray-100 flex 
      flex-col"
      >
        <Cursor />

        <Header />
        <div className="flex flex-col flex-1 items-center justify-center">
          <div>
            <p
              className="text-2xl font-extrabold text-transparent tracking-wide text-center cursor-default"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: colors.gray[900],
              }}
            >
              Hi! I’m <span className="text-gray-900">Luís Gustavo</span>, Owner
              and creator of
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-cyan-500 text-center cursor-default">
              {"<dev atomic journey/>"}
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <p>see my projects</p>
            <p>contact me</p>
          </div>
          <Cube />
        </div>
      </main>
    </>
  )
}
