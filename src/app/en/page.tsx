import { Header } from "@/components/header"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="cursor-default">
          <p className="text-2xl font-bold text-gray-900 tracking-wide text-center">
            Hi! I’m{" "}
            <span className="text-cyan-600 font-extrabold">Luís Gustavo</span>
            , <span className="tracking-[2px]">Owner </span>
            and creator of
          </p>
          <p className="text-2xl md:text-3xl font-extralight text-cyan-500 text-center">
            {"<dev atomic journey/>"}
          </p>
        </div>
        <div className="flex gap-4 my-4">
          <Link
            href="/en/projects"
            className="border-b-2 border-cyan-500 cursor-pointer hover:border-transparent hover:text-cyan-500 transition-all ease-in-out duration-150 hover:font-bold select-none"
          >
            see my projects
          </Link>
          <div className="h-6 w-px bg-gray-900" />
          <Link
            href="/en/aboutme"
            className="border-b-2 border-cyan-500 cursor-pointer hover:border-transparent hover:text-cyan-500 transition-all ease-in-out duration-150 hover:font-bold select-none"
          >
            about me
          </Link>
        </div>
        <video autoPlay loop muted playsInline preload="metadata" width={500}>
          <source src="/animation.webm" type="video/webm" />
        </video>
      </div>
    </main>
  )
}
