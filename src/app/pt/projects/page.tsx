import { Card } from "@/components/card"
import { MobileCard } from "@/components/mobile-card"
import { Header } from "@/components/header"
import OR from "@/assets/projects/OR.png"
import Events from "@/assets/projects/events.png"
import Pokedex from "@/assets/projects/pokedex.png"

// mobile assets
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
import Spring from "@/assets/projects/spring.png"

export default function Projects() {
  return (
    <>
      <main className="flex flex-1 flex-col min-h-screen bg-slate-50">
        <Header />
        
        <div className="flex flex-col items-center justify-center py-12 px-5 bg-gradient-to-b from-slate-100 to-slate-50">
          <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 font-fira tracking-tight mb-4 drop-shadow-sm">
            Meu Portfólio de Projetos
          </h1>
          <p className="text-slate-500 max-w-2xl text-center text-sm md:text-base">
            Aqui você encontrará uma seleção cuidadosa de alguns dos melhores projetos que já construí, desde aplicações web escaláveis até aplicativos móveis de alta performance.
          </p>
        </div>

        <section className="flex flex-col py-12 px-5 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-bold text-slate-800">Desenvolvimento Web</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            
            <div className="flex flex-1 flex-wrap justify-center gap-6 lg:gap-10">
              <Card
                title="Advocacia Oliveira Rosa"
                thumbnail={OR}
                redirect="https://oliveira-rosa.vercel.app"
                description="Uma landing page desenvolvida para a Advocacia Oliveira Rosa, focada em marketing empresarial. Criada com Next.js, priorizando SEO e alta performance."
              />
              <Card
                title="Plataforma de Aulas em Vídeo"
                thumbnail={Events}
                redirect="https://event-platform-s8sv.vercel.app"
                description="Uma plataforma de streaming para aulas em vídeo desenvolvida durante meus estudos no IFMG-SJE em 2022. Conta com interações em tempo real e interface moderna. Feita com React.js."
              />
              <Card
                title="Pokedex"
                thumbnail={Pokedex}
                redirect="https://pokedex-teal-kappa.vercel.app"
                description="Uma aplicação Pokedex completa desenvolvida em 2021 durante meus estudos sobre consumo de APIs externas. Exibe atributos detalhados dos Pokémon. Feita com Angular.js."
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col py-12 px-5 md:px-12 bg-slate-100/50 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-slate-800">Aplicações Móveis</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <p className="text-sm md:text-base text-slate-600 mb-10 max-w-3xl">
              Tenho sólida experiência abrangendo todo o ciclo de vida do desenvolvimento móvel — desde a concepção e design da interface até a publicação nas lojas de aplicativos. Os projetos incluem apps desenvolvidos para o Comando de Policiamento Especializado (CPE) e serviços ao consumidor.
            </p>
            
            <div className="flex flex-1 flex-wrap justify-center gap-6 lg:gap-10">
              <MobileCard
                title="Food Delivery"
                thumbnail={[Food1, Food2, Food3]}
                redirect="/downloads/food-delivery.apk"
                description="Aplicativo completo para catálogo e delivery de alimentos. Permite navegação por categorias, adição de múltiplos itens ao carrinho e envio direto do pedido via WhatsApp. Desenvolvido com React Native."
              />
              <MobileCard
                title="Dashboard CPE"
                thumbnail={[Cpe1, Cpe2, Cpe3, Cpe4, Cpe5]}
                redirect="https://play.google.com/store/apps/details?id=com.app.cpe"
                description="Aplicativo de uso restrito militar, apresentando análises estatísticas e relatórios para o Comando de Policiamento Especializado. Sou o único mantenedor desde 2023. Construído de forma segura com React Native e Expo."
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col py-12 px-5 md:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-slate-800">Inteligência de negócios - BI</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <p className="text-sm md:text-base text-slate-600 mb-10 max-w-3xl">
              Construí duas visualizações gráficas com intuito demonstrativo das minhas habilidades em construção de dashboards nas plataformas Excel e PowerBI.
            </p>
            
            <div className="flex flex-1 flex-wrap justify-center gap-6 lg:gap-10">
              <Card
                title="Excel - Dashboard"
                thumbnail={Excel}
                redirect="/downloads/demonstracao.xlsm"
                description="Dashboard em Excel, demonstrativo para portfólio."
              />
              <Card
                title="Power BI - Dashboard"
                thumbnail={PowerBI}
                redirect="/downloads/demonstrativo.pbix"
                description="Visualização gráfica em Power BI, demonstrativo para portfólio."
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col py-12 px-5 md:px-12 bg-slate-100/50 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both mb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-bold text-slate-800">Projetos 3D</h3>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <div className="flex flex-1 flex-wrap justify-center items-center gap-8 lg:gap-12 mt-6">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200">
                <p className="text-sm text-slate-600 select-none mb-3 font-medium text-center">
                  Átomo modelado em 3D para representar a marca
                  <span className="text-cyan-500 font-fira font-bold ml-1">
                    {"<Dev Atomic/>"}
                  </span>
                </p>
                <div className="rounded-lg overflow-hidden border border-slate-100 shadow-inner">
                  <video autoPlay loop muted playsInline preload="metadata" width={400} className="hover:scale-105 transition-transform duration-500">
                    <source src="/animation.webm" type="video/webm" />
                  </video>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200">
                <p className="text-sm text-slate-600 select-none mb-3 font-medium text-center">
                  Robô modelado em 3D
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
                description="Projetos feitos com Java - Spring Boot se encontram no meu github."
              />
            </div>
            
            <p className="text-sm md:text-base text-slate-600 select-none text-center max-w-4xl mx-auto bg-slate-100 p-6 rounded-xl border border-slate-200">
              Meus projetos backend feitos com Java - Spring Boot se encontram em
              repositórios privados (na sua maioria) no meu{" "}
              <a
                href="https://github.com/ayanokoujifl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-500 font-bold underline transition-colors"
              >
                github
              </a>
              . Consistem, no geral, em{" "}
              <span className="text-cyan-600 font-bold">microserviços</span> com
              autenticação JWT.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
