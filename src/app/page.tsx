"use client"
import { Header } from "@/components/header"
import { useRouter } from "next/navigation"
import colors from "tailwindcss/colors"
export default function Home() {
  const route = useRouter()

  return (
    <>
      <main
        className="min-h-screen bg-gray-100 flex 
      flex-col overflow-hidden"
      >
        <Header />
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="cursor-default">
            <p className="text-2xl font-bold text-gray-900 tracking-wide text-center ">
              Hi! I’m{" "}
              <span className="text-cyan-600 font-extrabold">Luís Gustavo</span>
              , <span className="tracking-[2px]">Owner </span>
              and creator of
            </p>
            <p className="text-2xl md:text-3xl font-extralight text-cyan-500 text-center ">
              {"<dev atomic journey/>"}
            </p>
          </div>
          <div className="flex gap-4 my-4">
            <p className="border-b-2 border-cyan-500 cursor-pointer hover:border-none hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold">
              see my projects
            </p>
            <div className="h-6 w-px bg-gray-900" />
            <p
              className="border-b-2 border-cyan-500 cursor-pointer hover:border-none hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold select-none"
              onClick={() => route.push("/aboutme")}
              contentEditable={false}
            >
              about me
            </p>
          </div>
          <video autoPlay loop muted width={500} preload="none">
            <source src="/animation.webm" type="video/mp4" />
          </video>
        </div>
      </main>
    </>
  )
}
