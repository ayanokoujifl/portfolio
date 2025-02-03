"use client"

import { AtomicIcon } from "@/components/atomicIcon"
import { Header } from "@/components/header"
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function AboutMe() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1 my-12 gap-4">
        <h1 className="text-center text-3xl font-bold font-fira loop-gradient">
          Who I am
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr]  mt-6 gap-8 md:gap-2">
          <div className="flex flex-col flex-1 items-center w-full">
            <h3 className="text-center text-xl font-bold">Hard Skills</h3>
            <ul className=" flex flex-col gap-2 justify-center">
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Web Development
                </p>
                <span className="text-xs text-slate-600">
                  (Next.js, Node.js, AngularJS, VanillaJS)
                </span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Mobile Development{""}
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
                  Java{" "}
                </p>
                <span className="text-xs text-slate-600">
                  (Java EE, Java SE, Spring Boot)
                </span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  3D Design
                </p>
                <span className="text-xs text-slate-600">(Blender)</span>
              </li>
              <li className="flex flex-col w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Business Intelligence (BI)
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
            <h3 className="text-center text-xl font-bold">Soft Skills</h3>
            <ul className="w-full flex flex-col gap-2 justify-center items-center">
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon />
                  Teamwork
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Communication
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Problem Solving{" "}
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Quick Reasoning{" "}
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Efficiency
                </p>
              </li>
              <li className="w-72">
                <p className="flex items-center">
                  <AtomicIcon /> Assertiveness
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className="h-0.5 w-full bg-slate-500" />

        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Objective</h3>
          <p className="px-8 py-4 md:p-5 text-justify">
            {/* Sou um desenvolvedor de software apaixonado por tecnologia e
            inovação, focado em contribuir com soluções eficientes e escaláveis.
            Com experiência em desenvolvimento web e mobile, modelagem 3D e
            Business Intelligence, minha meta é criar aplicações robustas e
            intuitivas que gerem impacto real. Além disso, tenho forte interesse
            em práticas de CI/CD e infraestrutura moderna para otimizar fluxos
            de desenvolvimento. Busco uma posição desafiadora onde possa aplicar
            minhas habilidades, crescer profissionalmente e agregar valor ao
            time e à empresa. */}
            I am a software developer passionate about{" "}
            <span className="font-bold text-cyan-500">
              technology and innovation
            </span>
            , focused on contributing to efficient and scalable solutions. With
            experience in web and mobile development, 3D modeling, and Business
            Intelligence,{" "}
            <span className="text-cyan-500 font-bold">
              my goal is to create robust and intuitive applications that
              generate real impact.
            </span>{" "}
            Additionally, I have a strong interest in CI/CD practices and modern
            infrastructure to optimize development workflows. I seek a
            challenging position where I can apply my skills, grow
            professionally, and add value to the team and the company
          </p>
        </section>

        <div className="h-0.5 w-full bg-slate-500" />
        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Experience</h3>
          <ul className="flex flex-col gap-2  px-8 py-4 md:px-5">
            <li>
              <div>
                <h6 className="font-bold">Mobile Developer - PMMG</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- 2023 - Present"}
                </p>
                <p className="text-justify">
                  I am currently working as a mobile developer at{" "}
                  <span className="font-medium text-red-600">PMMG</span> (state
                  public security institution). I am responsible for developing
                  APIs REST that provide practicality for military personnel in
                  action and for the internal application of the PMRv (Military
                  Road Police).
                </p>
              </div>
            </li>
          </ul>
        </section>
        <div className="h-0.5 w-full bg-slate-500" />
        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Education</h3>
          <ul className="flex flex-col gap-3 w-full  px-8 py-4 md:px-5">
            <li className=" border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">
                  Information systems - university education
                </h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- 2023 - Present"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5">
                <h6 className="font-bold">IT Technician </h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- 02/2020 - 12/2022"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">
                  Course - AngularJS 16 + Spring Boot 2.7
                </h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Valdir Cezar - Udemy"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">Course - React and NodeJS</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Rocketseat"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">
                  Course - Spring Boot 4 for microsservices
                </h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- DevSuperior"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">Course - React Native with Expo</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Rocketseat"}
                </p>
              </div>
            </li>
            <li className="border-b-2 border-slate-300 pb-3">
              <div className="flex gap-1.5 flex-wrap">
                <h6 className="font-bold">Course - Excel</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- Hashtag treinamentos"}
                </p>
              </div>
            </li>
          </ul>
        </section>
        <div className="h-0.5 w-full bg-slate-500" />
        <section className="flex flex-col flex-1 items-center justify-center">
          <h3 className="text-xl font-bold">Talk with me</h3>
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
