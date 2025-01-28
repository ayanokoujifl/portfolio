import { AtomicIcon } from "@/components/atomicIcon"
import { Header } from "@/components/header"

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
          <h3 className="text-xl font-bold">Experience</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <div>
                <h6 className="font-bold">Mobile Developer - PMMG</h6>
                <p className="text-sm text-slate-600 font-light font-jetbrains">
                  {"- 2023 - Present"}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  dolore aut. Aspernatur a doloribus alias nisi dolorum facere
                  ducimus totam accusamus asperiores, itaque eius, quod
                  veritatis sit vitae, dignissimos saepe.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
