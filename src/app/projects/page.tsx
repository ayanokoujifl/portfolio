"use client"

import { Card } from "@/components/card"
import { Header } from "@/components/header"
import Atomic from "@/assets/atomic.png"

export default function Projects() {
  return (
    <>
      <main className="flex flex-1 flex-col min-h-screen">
        <Header />
        <h1 className="text-center text-2xl font-extrabold text-cyan-600 font-fira tracking-wide">
          Look at my projects
        </h1>
        <section className="flex flex-col py-4 bg-gray-100 px-3">
          <h3>Web</h3>
          <div className="flex flex-1 flex-wrap justify-between">
            <Card
              title="Advocacia Oliveira Rosa"
              thumbnail={Atomic}
              redirect=""
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
