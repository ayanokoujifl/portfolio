"use client"
import { Header } from "@/components/header"
import { usePathname, useRouter } from "next/navigation"
import colors from "tailwindcss/colors"
import Loading from "./loading"
import { Github, Instagram } from "lucide-react"

export default function Home() {
  const route = useRouter()
  const pathname = usePathname()

  return (
    <>
      <main
        className="min-h-screen flex 
      flex-col overflow-hidden"
      >
        <Header />
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="cursor-default">
            <p className="text-2xl font-bold text-gray-900 tracking-wide text-center ">
              Olá! Eu sou{" "}
              <span className="text-cyan-600 font-extrabold">Luís Gustavo</span>
              , <span className="tracking-[2px]">dono </span>e criador do
            </p>
            <p className="text-2xl md:text-3xl font-extralight text-cyan-500 text-center ">
              {"<dev atomic journey/>"}
            </p>
          </div>
          <div className="flex gap-4 my-4">
            <p
              className="border-b-2 border-cyan-500 cursor-pointer hover:border-none hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold select-none"
              onClick={() => route.push(pathname + "/projects")}
              contentEditable={false}
            >
              Veja meus projetos
            </p>
            <div className="h-6 w-px bg-gray-900" />
            <p
              className="border-b-2 border-cyan-500 cursor-pointer hover:border-none hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold select-none"
              onClick={() => route.push(pathname + "/aboutme")}
              contentEditable={false}
            >
              Sobre mim
            </p>
          </div>
          <video autoPlay loop muted width={500} preload="none">
            <source src="/animation.webm" type="video/mp4" />
          </video>
        </div>
        <footer className="flex gap-3 pb-3 items-center justify-center">
          <div className="flex items-center gap-0.5 text-slate-400 text-xs hover:text-cyan-500 duration-100 ease-in transition-colors cursor-pointer">
            <Instagram size={16} />
            <span>@dev_atomic_journey</span>
          </div>
          <div className="flex items-center gap-0.5 text-slate-400 text-xs hover:text-cyan-500 duration-100 ease-in transition-colors cursor-pointer">
            <Github size={16} />
            <span>dev-atomic-journey</span>
          </div>
          <div></div>
        </footer>
      </main>
    </>
  )
}
