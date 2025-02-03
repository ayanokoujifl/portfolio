"use client"

import { Card } from "@/components/card"
import { MobileCard } from "@/components/mobile-card"
import { Header } from "@/components/header"
import OR from "@/assets/projects/OR.png"
import Events from "@/assets/projects/events.png"
import Pokedex from "@/assets/projects/pokedex.png"

//mobile assets
import Food1 from "@/assets/projects/mobile/food/food-1.jpg"
import Food2 from "@/assets/projects/mobile/food/food-2.jpg"
import Food3 from "@/assets/projects/mobile/food/food-3.jpg"

export default function Projects() {
  return (
    <>
      <main className="flex flex-1 flex-col min-h-screen">
        <Header />
        <h1 className="text-center text-2xl font-extrabold text-cyan-600 font-fira tracking-wide shadow-text">
          Veja meus projetos
        </h1>
        <section className="flex flex-col py-4 bg-gray-100 px-5">
          <h3>Web</h3>
          <p className="text-xs text-gray-600 mb-3">
            Tenho muitas aplicações web, mas vou mostrar apenas algumas delas
            como demonstração.
          </p>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <Card
              title="Advocacia Oliveira Rosa"
              thumbnail={OR}
              redirect="https://oliveira-rosa.vercel.app"
              description="Um site desenvolvido para Advocacia Oliveira Rosa para marketing empresarial. Desenvolvido com o framework Next.js"
            />
            <Card
              title="Plataforma para aula em vídeo"
              thumbnail={Events}
              redirect="https://event-platform-s8sv.vercel.app"
              description="Um site desenvolvido para streaming de aulas em vídeo. Desenvolvi isso enquanto estudava no IFMG-sje, no ano de 2022. Desenvolvido com React.js"
            />
            <Card
              title="Pokedex"
              thumbnail={Pokedex}
              redirect="https://pokedex-teal-kappa.vercel.app"
              description="Esta é uma Pokedex, desenvolvida quando eu estava aprendendo como consumir APIs, no ano de 2021. Desenvolvido com Angular.js"
            />
          </div>
        </section>
        <section>
          <h3>Mobile</h3>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <MobileCard
              title="food delivery"
              thumbnail={[Food1, Food2, Food3]}
              redirect="../../../assets/projects/mobile/food/application-ce3fa8c8-e8dd-4c3a-938b-1464f94a614f.apk"
              description="Aplicativo desenvolvido para catálogo e delivery de alimentos. Desenvolvido com React Native."
            />
          </div>
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
