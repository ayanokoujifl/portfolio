"use client"

import { Card } from "@/components/card"
import { Header } from "@/components/header"
import OR from "@/assets/projects/OR.png"
import Events from "@/assets/projects/events.png"
import Pokedex from "@/assets/projects/pokedex.png"
import { MobileCard } from "@/components/mobile-card"

//mobile assets
import Food1 from "@/assets/projects/mobile/food/food-1.jpg"
import Food2 from "@/assets/projects/mobile/food/food-2.jpg"
import Food3 from "@/assets/projects/mobile/food/food-3.jpg"

import Cpe1 from "@/assets/projects/mobile/cpe/cpe-1.jpg"
import Cpe2 from "@/assets/projects/mobile/cpe/cpe-2.jpg"
import Cpe3 from "@/assets/projects/mobile/cpe/cpe-3.jpg"
import Cpe4 from "@/assets/projects/mobile/cpe/cpe-4.jpg"
import Cpe5 from "@/assets/projects/mobile/cpe/cpe-5.jpg"

import Excel from "@/assets/projects/BI/excel.png"
import PowerBI from "@/assets/projects/BI/powerbi.jpg"

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
        <section className="flex flex-col py-4 bg-gray-100 px-5 mb-4">
          <h3>Mobile</h3>
          <p className="text-xs text-gray-600 mb-3">
            I have experience from designing to publishing applications in
            stores. applications, experience acquired in the Police Command
            Specialized (CPE). Here are some examples of applications developed
            for me.
          </p>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <MobileCard
              title="food delivery"
              thumbnail={[Food1, Food2, Food3]}
              redirect="../../../assets/projects/mobile/food/application-ce3fa8c8-e8dd-4c3a-938b-1464f94a614f.apk"
              description="Application developed for catalog and food delivery. Contains functionality for category selection, addition of multiple foods, storage of data relating to orders in the shopping bag, and finally the function of sending the order via Whatsapp to the store number. Developed with React Native."
            />
            <MobileCard
              title="CPE"
              thumbnail={[Cpe1, Cpe2, Cpe3, Cpe4, Cpe5]}
              redirect="https://play.google.com/store/apps/details?id=com.app.cpe"
              description="This application is restricted for military use, contains statistical functionalities and reports from the Specialized Policing Command, it is a project that I have maintained since 2023 and I am the only developer responsible for this project. I cannot provide full access to the application to third parties as it contains confidential information. It was also developed with React Native and Expo."
            />
          </div>
        </section>
        <section className="flex flex-col py-4 bg-gray-100 px-5 mb-4">
          <h3>BI</h3>
          <p className="text-xs text-gray-600 mb-3">
            I built two graphical visualizations to demonstrate the my skills in
            building dashboards on platforms like Excel and PowerBI.
          </p>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <Card
              title="Excel - Dashboard"
              description="Excel Dashboard, for portfolio demonstration"
              thumbnail={Excel}
              redirect="../../../assets/projects/BI/demonstracao.xlsm"
            />
            <Card
              title="Power BI - Dashboard"
              description="Graphical visualization in Power BI, portfolio statement"
              thumbnail={PowerBI}
              redirect="../../../assets/projects/BI/demonstrativo.pbix"
            />
          </div>
        </section>
        <section className="flex flex-col py-4 bg-gray-100 px-5 mb-4">
          <h3>3D</h3>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <div>
              <p className="text-xs text-slate-600 select-none">
                This is an Atom modeled in 3D to represent the
                <span className="text-cyan-500 font-fira font-bold">
                  {" "}
                  {"<Dev Atomic/>"}
                </span>
              </p>
              <div>
                <video autoPlay loop muted width={500} preload="none">
                  <source src="/animation.webm" type="video/mp4" />
                </video>
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-600 select-none">
                A robot modeled in 3D
              </p>
              <div>
                <video autoPlay loop muted width={500} preload="none">
                  <source src="/robot-animation.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
