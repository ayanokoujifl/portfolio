"use client"

import { AtomicIcon } from "@/components/atomicIcon"
import { Header } from "@/components/header"
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function AboutMe() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 my-12 gap-4">
        <h1 className="text-center text-3xl font-bold loop-gradient">
          Quem eu sou
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr]  mt-6 gap-8 md:gap-2">
          <div className="flex flex-col flex-1 items-center w-full">
            <h3 className="text-center text-xl font-bold">
              Competências Técnicas
            </h3>
            <ul className="flex flex-col gap-2 justify-center">
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Desenvolvimento Web
                </p>
                <span className="text-xs text-slate-600">
                  (Next.js, Node.js, AngularJS, VanillaJS)
                </span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Desenvolvimento Mobile
                </p>
                <span className="text-xs text-slate-600">
                  (React Native, Kotlin)
                </span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Javascript / Typescript
                </p>
                <span className="text-xs text-slate-600">(Node.js)</span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Java
                </p>
                <span className="text-xs text-slate-600">
                  (Java EE, Java SE, Spring Boot)
                </span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Design 3D
                </p>
                <span className="text-xs text-slate-600">(Blender)</span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Inteligência de Negócios (BI)
                </p>
                <span className="text-xs text-slate-600">
                  (Power BI, Excel)
                </span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  CI/CD
                </p>
                <span className="text-xs text-slate-600">
                  (Docker, Kafka, Kubernetes)
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1  items-center w-full">
            <h3 className="text-center text-xl font-bold">
              Competências Interpessoais
            </h3>
            <ul className="w-full flex flex-col gap-2 justify-center items-center">
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Resolução de Problemas
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Trabalho em Equipe
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Comunicação
                </p>
              </li>

              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Raciocínio Rápido
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Eficiência
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Assertividade
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className="h-0.5 w-full bg-slate-500" />

        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Objetivo</h3>
          <p className="px-8 py-4 md:p-5 text-justify">
            Sou um desenvolvedor de software apaixonado por{" "}
            <span className="font-bold text-cyan-500">
              tecnologia e inovação
            </span>
            , focado em contribuir para soluções eficientes e escaláveis. Com
            experiência em desenvolvimento web e mobile, modelagem 3D e Business
            Intelligence,{" "}
            <span className="text-cyan-500 font-bold">
              meu objetivo é criar aplicações robustas e intuitivas que gerem
              impacto real.
            </span>{" "}
            Além disso, tenho um forte interesse em práticas de CI/CD e
            infraestrutura moderna para otimizar fluxos de trabalho de
            desenvolvimento. Busco uma posição desafiadora onde eu possa aplicar
            minhas habilidades, crescer profissionalmente e agregar valor à
            equipe e à empresa.
          </p>
        </section>

        <div className="h-0.5 w-full bg-slate-500" />
        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Experiência</h3>
          <ul className="flex flex-col gap-2  px-8 py-4 md:px-5">
            <li>
              <div>
                <h6 className="font-bold">Desenvolvedor Mobile - PMMG</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- 2023 - Presente"}
                </p>
                <p className="text-justify">
                  Atualmente, estou trabalhando como desenvolvedor mobile na{" "}
                  <span className="font-medium text-red-600">PMMG</span> (orgão
                  estadual de fiscalização e segurança pública). Sou responsável
                  por desenvolver APIs REST que proporcionam praticidade para o
                  policial militar em ação e para a aplicação interna da PMRv
                  (Polícia Militar Rodoviária).
                </p>
              </div>
            </li>
          </ul>
        </section>
        <div className="h-0.5 w-full bg-slate-500" />
        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Educação</h3>
          <ul className="flex flex-col gap-3 w-full px-8 py-4 md:px-5">
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">
                  Sistemas de Informação - Ensino Superior
                </h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- 2023 - Presente"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5">
                <h6 className="font-bold">Técnico em Informática</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- 02/2020 - 12/2022"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">
                  Curso - AngularJS 16 + Spring Boot 2.7
                </h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Valdir Cezar - Udemy"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">Curso - React e NodeJS</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Rocketseat"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">
                  Curso - Spring Boot 4 para Microsserviços
                </h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- DevSuperior"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">Curso - React Native com Expo</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Rocketseat"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">Curso - Excel</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Hashtag Treinamentos"}
                </p>
              </div>
            </li>
          </ul>
        </section>
        <div className="h-0.5 w-full bg-slate-500" />
        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Contate-me </h3>
          <div className="flex flex-1 py-3 gap-5 justify-center md:items-center flex-col md:flex-row items-start">
            <a
              href="https://www.instagram.com/dev_atomic_journey"
              className="flex items-center gap-0.5 text-slate-400 hover:text-purple-500 duration-100 ease-in transition-colors cursor-pointer hover:font-bold"
              target="_blank"
            >
              <Instagram />
              <span>@dev_atomic_journey</span>
            </a>
            <a
              href="https://github.com/dev-atomic-journey"
              className="flex items-center gap-0.5 text-slate-400 hover:text-slate-900 duration-100 ease-in transition-colors cursor-pointer hover:font-bold"
              target="_blank"
            >
              <Github />
              <span>dev-atomic-journey</span>
            </a>
            <a
              href="https://linkedin.com/in/luis-gustavo-dev"
              className="flex items-center gap-0.5 text-slate-400 hover:text-blue-600 hover:font-bold duration-100 ease-in transition-colors cursor-pointer"
              target="_blank"
            >
              <Linkedin />
              <span>luis-gustavo-dev</span>
            </a>
            <a
              href="mailto:devatomicjourney@gmail.com"
              className="flex items-center gap-0.5 text-slate-400 hover:text-red-600 hover:font-bold duration-100 ease-in transition-colors cursor-pointer"
              target="_blank"
            >
              <Mail />
              <span>@devatomicjourney</span>
            </a>
            <a
              href="https://wa.me/5538997569902?text=Ol%C3%A1%2C%20tudo%20bem%3F"
              className="flex items-center gap-0.5 text-slate-400 hover:text-green-500 hover:font-bold duration-100 ease-in transition-colors cursor-pointer"
              target="_blank"
            >
              <Phone />
              <span>Luís Gustavo</span>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
