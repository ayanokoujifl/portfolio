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
        <h1 className="text-center text-2xl font-extrabold text-cyan-600 font-fira tracking-wide shadow-text">
          Veja meus projetos
        </h1>
        <section className="flex flex-col py-4 bg-gray-100 px-5 mb-4">
          <h3>Web</h3>
          <p className="text-xs text-gray-600 mb-3">
            Tenho diversas aplicações web, mas vou mostrar apenas algumas delas
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
        <section className="flex flex-col py-4 bg-gray-100 px-5 mb-4">
          <h3>Aplicações móveis</h3>
          <p className="text-xs text-gray-600 mb-3">
            Tenho experiência do design à publicação dos apps nas lojas de
            aplicativos, experiência adquirida no Comando de Policiamento
            Especializado (CPE). Aqui vão alguns exemplos de apps desenvolvidos
            por mim
          </p>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <MobileCard
              title="food delivery"
              thumbnail={[Food1, Food2, Food3]}
              redirect="../../../assets/projects/mobile/food/application-ce3fa8c8-e8dd-4c3a-938b-1464f94a614f.apk"
              description="Aplicativo desenvolvido para catálogo e delivery de alimentos.Contém funcionalidades de seleção de categoria, adição de múltiplos alimentos, storage de dados referentes a pedidos na sacola de compras, por fim a função de enviar o pedido via Whatsapp para o número da loja. Desenvolvido com React Native."
            />
            <MobileCard
              title="CPE"
              thumbnail={[Cpe1, Cpe2, Cpe3, Cpe4, Cpe5]}
              redirect="https://play.google.com/store/apps/details?id=com.app.cpe"
              description="Este aplicativo é restrito para uso militar, contém funcionalidades estatísticas e relatórios do Comando de Policiamento Especializado, é um projeto que mantenho desde 2023 e sou o único desenvolvedor responsável por esse projeto. Não posso disponilibizar acesso total ao aplicativo para terceiros pois contém informações sigilosas. Foi também desenvolvido com React Native e Expo."
            />
          </div>
        </section>
        <section className="flex flex-col py-4 bg-gray-100 px-5 mb-4">
          <h3>Inteligência de negócios - BI</h3>
          <p className="text-xs text-gray-600 mb-3">
            Construí duas vizualizações gráficas com intuito demonstrativo das
            minhas habilidades em construção de dashboards nas plataformas Excel
            e PowerBI.
          </p>
          <div className="flex flex-1 flex-wrap justify-center  gap-4 lg:gap-8">
            <Card
              title="Excel - Dashboard"
              description="Dashboard em Excel, demonstrativo para portfólio"
              thumbnail={Excel}
              redirect="../../../assets/projects/BI/demonstracao.xlsm"
            />
            <Card
              title="Power BI - Dashboard"
              description="Visualização gráfica em Power BI, demonstrativo para portfólio"
              thumbnail={PowerBI}
              redirect="../../../assets/projects/BI/demonstrativo.pbix"
            />
          </div>
        </section>
        <section className="flex flex-col py-4 bg-gray-100 px-5 mb-4">
          <h3>3D</h3>
          <div className="flex flex-1 flex-wrap justify-center items-center gap-4 lg:gap-8">
            <div>
              <p className="text-xs text-slate-600 select-none">
                Esse é um Átomo modelado em 3D para representar a marca
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
              <div>
                <p className="text-xs text-slate-600 select-none">
                  Robô modelado em 3D
                </p>
                <div>
                  <video autoPlay loop muted width={500} preload="none">
                    <source src="/robot-animation.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="flex flex-col py-10 bg-gray-100 px-8 mb-4">
          <h3>Backend</h3>
          <p className="text-sm text-slate-600 select-none">
            Meus projetos backend feitos com Java - Spring Boot se encontram em
            repositórios privados (na sua maioria) no meu{" "}
            <a
              href="https://github.com/ayanokoujifl"
              className="text-slate-900 font-medium underline"
            >
              github
            </a>
            . Consistem, no geral, em{" "}
            <span className="text-cyan-500">microserviços</span> com
            autenticação JWT
          </p>
        </section>
      </main>
    </>
  )
}
