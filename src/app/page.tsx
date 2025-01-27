import { Cube } from "@/components/cube"
import { Header } from "@/components/header"
import { Box, Layers2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import colors from "tailwindcss/colors"
export default function Home() {
  return (
    <>
      <main
        className="min-h-screen bg-gray-100 flex 
      flex-col"
      >
        <Header />
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="cursor-default">
            <p
              className="text-2xl font-extrabold text-transparent tracking-wide text-center "
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: colors.gray[900],
              }}
            >
              Hi! I’m <span className="text-gray-900">Luís Gustavo</span>, Owner
              and creator of
            </p>
            <p className="text-2xl md:text-3xl font-extrabold text-cyan-500 text-center ">
              {"<dev atomic journey/>"}
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <p className="border-b-2 border-cyan-500 cursor-pointer hover:border-none hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold">
              see my projects
            </p>
            <div className="h-6 w-px bg-gray-900" />
            <p className="border-b-2 border-cyan-500 cursor-pointer hover:border-none hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold">
              about me
            </p>
          </div>
          <Cube />
        </div>
      </main>
    </>
  )
}
