"use client"

import { Card } from "@/components/card"
import { Header } from "@/components/header"
import OR from "@/assets/projects/OR.png"
import Events from "@/assets/projects/events.png"
import Pokedex from "@/assets/projects/pokedex.png"

export default function Projects() {
  return (
    <>
      <main className="flex flex-1 flex-col min-h-screen">
        <Header />
        <h1 className="text-center text-2xl font-extrabold text-cyan-600 font-fira tracking-wide">
          Look at my projects
        </h1>
        <section className="flex flex-col py-4 bg-gray-100 px-5">
          <h3>Web</h3>
          <p className="text-xs text-gray-600 mb-3">
            I've done a lot of web projects, but I'll just show some of them as
            a demonstration
          </p>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <Card
              title="Advocacia Oliveira Rosa"
              thumbnail={OR}
              redirect="https://oliveira-rosa.vercel.app"
              description="A Website developed for Advocacia Oliveira Rosa to enterprise marketing. Developed with framework Next.js"
            />
            <Card
              title="Platform for video class"
              thumbnail={Events}
              redirect="https://event-platform-s8sv.vercel.app"
              description="A Website developed for streaming of videos classes. I developed that when I was studying in the IFMG-sje, on the year 2022. Developed with React.js"
            />
            <Card
              title="Pokedex"
              thumbnail={Pokedex}
              redirect="https://pokedex-teal-kappa.vercel.app"
              description="This is a Pokedex, developed when I was learning how to consume APIs, on the year 2021. Developed with Angular.js"
            />
          </div>
        </section>
        <section>
          <h3>Mobile</h3>
        </section>
        <section>
          <h3>BI</h3>
        </section>
        <section>
          <h3>3D</h3>
        </section>
      </main>
    </>
  )
}
