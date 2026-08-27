import { Card } from "@/components/card"
import { MobileCard } from "@/components/mobile-card"
import { Header } from "@/components/header"

// Web assets
import WalletAgent from "@/assets/projects/wallet-agent.png"
import MinhaEscalaLP from "@/assets/projects/minha-escala.png"
import OR from "@/assets/projects/OR.png"
import Events from "@/assets/projects/events.png"
import Pokedex from "@/assets/projects/pokedex.png"

// Mobile assets - Minha Escala
import MinhaEscalaHome from "@/assets/projects/mobile/minhaescala/home-screen.jpeg"
import MinhaEscalaFinancial from "@/assets/projects/mobile/minhaescala/home-financial.jpeg"
import MinhaEscalaPlantao from "@/assets/projects/mobile/minhaescala/plantao-form.jpeg"
import MinhaEscalaCompromissoForm from "@/assets/projects/mobile/minhaescala/compromisso-form.jpeg"
import MinhaEscalaCompromissoSheet from "@/assets/projects/mobile/minhaescala/compromisso-bottom-sheet.jpeg"
import MinhaEscalaOcorrenciasList from "@/assets/projects/mobile/minhaescala/ocorrencias-list.jpeg"
import MinhaEscalaOcorrenciaSheet from "@/assets/projects/mobile/minhaescala/ocorrencia-bottom-sheet.jpeg"

// Mobile assets - Food & CPE
import Food1 from "@/assets/projects/mobile/food/food-1.jpg"
import Food2 from "@/assets/projects/mobile/food/food-2.jpg"
import Food3 from "@/assets/projects/mobile/food/food-3.jpg"

import Cpe1 from "@/assets/projects/mobile/cpe/cpe-1.jpg"
import Cpe2 from "@/assets/projects/mobile/cpe/cpe-2.jpg"
import Cpe3 from "@/assets/projects/mobile/cpe/cpe-3.jpg"
import Cpe4 from "@/assets/projects/mobile/cpe/cpe-4.jpg"
import Cpe5 from "@/assets/projects/mobile/cpe/cpe-5.jpg"

// BI & Backend assets
import Excel from "@/assets/projects/BI/excel.png"
import PowerBI from "@/assets/projects/BI/powerbi.jpg"
import Spring from "@/assets/projects/spring.png"

export default function Projects() {
  return (
    <>
      <main className="flex flex-1 flex-col min-h-screen bg-slate-50">
        <Header />
        
        <div className="flex flex-col items-center justify-center py-12 px-5 bg-gradient-to-b from-slate-100 to-slate-50">
          <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 font-fira tracking-tight mb-4 drop-shadow-sm">
            My Projects Portfolio
          </h1>
          <p className="text-slate-500 max-w-2xl text-center text-sm md:text-base">
            Here you will find a curated selection of some of the best projects I've built, ranging from scalable web applications to performant mobile apps.
          </p>
        </div>

        <section className="flex flex-col py-12 px-5 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-bold text-slate-800">Web Development</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            
            <div className="flex flex-1 flex-wrap justify-center gap-6 lg:gap-10">
              <Card
                title="Wallet Agent"
                thumbnail={WalletAgent}
                redirect="https://wallet-agent.ayanokoujifl.com?utm_source=portfolio&utm_medium=web&utm_campaign=portfolio_showcase"
                description="Landing page built for Wallet Agent, an intelligent AI-assisted financial management and workflow platform. Developed with Next.js focusing on high conversion and modern UI."
              />
              <Card
                title="Minha Escala - Landing Page"
                thumbnail={MinhaEscalaLP}
                redirect="https://minha-escala.ayanokoujifl.com?utm_source=portfolio&utm_medium=web&utm_campaign=portfolio_showcase"
                description="Official landing page for the Minha Escala mobile app, presenting shift scheduling, financial analytics, and incident tracking features for shift workers and security personnel."
              />
              <Card
                title="Advocacia Oliveira Rosa"
                thumbnail={OR}
                redirect="https://oliveira-rosa.vercel.app"
                description="A landing page built for Advocacia Oliveira Rosa for enterprise marketing. Developed with Next.js focusing on SEO and high performance."
              />
              <Card
                title="Video Class Platform"
                thumbnail={Events}
                redirect="https://event-platform-s8sv.vercel.app"
                description="A streaming platform built for video classes during my studies at IFMG-SJE in 2022. Features include real-time interactions and modern UI. Developed with React.js."
              />
              <Card
                title="Pokedex"
                thumbnail={Pokedex}
                redirect="https://pokedex-teal-kappa.vercel.app"
                description="A comprehensive Pokedex application built while learning to consume external APIs in 2021. Features detailed Pokemon stats. Developed with Angular.js."
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col py-12 px-5 md:px-12 bg-slate-100/50 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-slate-800">Mobile Applications</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <p className="text-sm md:text-base text-slate-600 mb-10 max-w-3xl">
              I have deep experience covering the entire mobile development lifecycle—from UI design and architecture to App Store publishing. These examples include apps developed for the Specialized Policing Command (CPE), shift management, and consumer services.
            </p>
            
            <div className="flex flex-1 flex-wrap justify-center gap-6 lg:gap-10">
              <MobileCard
                title="Minha Escala"
                thumbnail={[
                  MinhaEscalaHome,
                  MinhaEscalaFinancial,
                  MinhaEscalaPlantao,
                  MinhaEscalaCompromissoForm,
                  MinhaEscalaCompromissoSheet,
                  MinhaEscalaOcorrenciasList,
                  MinhaEscalaOcorrenciaSheet,
                ]}
                redirect="https://minha-escala.ayanokoujifl.com?utm_source=portfolio&utm_medium=mobile_card&utm_campaign=portfolio_showcase"
                buttonLabel="Visit Landing Page"
                description="A comprehensive mobile app for shift workers and security forces to manage work shifts, financial projections, appointment schedules, and operational incident logs. Built with React Native."
              />
              <MobileCard
                title="CPE Dashboard"
                thumbnail={[Cpe1, Cpe2, Cpe3, Cpe4, Cpe5]}
                redirect="https://play.google.com/store/apps/details?id=com.app.cpe"
                buttonLabel="View on Google Play"
                description="A restricted-use app for the military featuring statistical analysis and reporting for the Specialized Policing Command. I am the sole maintainer since 2023. Built securely with React Native and Expo."
              />
              <MobileCard
                title="Food Delivery"
                thumbnail={[Food1, Food2, Food3]}
                redirect="/downloads/food-delivery.apk"
                description="A complete catalog and food delivery application. It allows users to browse categories, add items to a cart, review the summary, and send the order directly via WhatsApp. Built with React Native."
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col py-12 px-5 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-slate-800">Business Intelligence</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <p className="text-sm md:text-base text-slate-600 mb-10 max-w-3xl">
              I've built two graphic visualizations to demonstrate my skills in dashboard creation using Excel and PowerBI.
            </p>
            
            <div className="flex flex-1 flex-wrap justify-center gap-6 lg:gap-10">
              <Card
                title="Excel - Dashboard"
                thumbnail={Excel}
                redirect="/downloads/demonstracao.xlsm"
                description="Excel dashboard, demonstrative project for portfolio."
              />
              <Card
                title="Power BI - Dashboard"
                thumbnail={PowerBI}
                redirect="/downloads/demonstrativo.pbix"
                description="Power BI dashboard, demonstrative project for portfolio."
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col py-12 px-5 md:px-12 bg-slate-100/50 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both mb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-slate-800">3D Projects</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <div className="flex flex-1 flex-wrap justify-center items-center gap-8 lg:gap-12 mt-6">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200">
                <p className="text-sm text-slate-600 select-none mb-3 font-medium text-center">
                  A 3D modeled Atom representing the
                  <span className="text-cyan-500 font-fira font-bold ml-1">
                    {"<Dev Atomic/>"}
                  </span> brand
                </p>
                <div className="rounded-lg overflow-hidden border border-slate-100 shadow-inner">
                  <video autoPlay loop muted playsInline preload="metadata" width={400} className="hover:scale-105 transition-transform duration-500">
                    <source src="/animation.webm" type="video/webm" />
                  </video>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200">
                <p className="text-sm text-slate-600 select-none mb-3 font-medium text-center">
                  3D modeled Robot
                </p>
                <div className="rounded-lg overflow-hidden border border-slate-100 shadow-inner">
                  <video autoPlay loop muted playsInline preload="metadata" width={400} className="hover:scale-105 transition-transform duration-500">
                    <source src="/robot-animation.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col py-12 px-5 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-slate-800">Backend</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            
            <div className="flex flex-1 flex-wrap justify-center gap-6 lg:gap-10 mb-8">
              <Card
                title="Java - Spring Boot"
                thumbnail={Spring}
                redirect="https://github.com/ayanokoujifl?tab=repositories&q=&type=public&language=java&sort="
                description="My Java - Spring Boot projects can be found on my Github."
              />
            </div>
            
            <p className="text-sm md:text-base text-slate-600 select-none text-center max-w-4xl mx-auto bg-slate-100 p-6 rounded-xl border border-slate-200">
              My backend projects built with Java - Spring Boot are mostly in private repositories on my{" "}
              <a
                href="https://github.com/ayanokoujifl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-500 font-bold underline transition-colors"
              >
                github
              </a>
              . They generally consist of{" "}
              <span className="text-cyan-600 font-bold">microservices</span> with
              JWT authentication.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
