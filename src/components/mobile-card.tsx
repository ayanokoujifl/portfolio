"use client"

import Image, { StaticImageData } from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { useState } from "react"
import { Download, ChevronRight, ExternalLink } from "lucide-react"

type Props = {
  title: string
  thumbnail: StaticImageData[]
  redirect: string
  description: string
  buttonLabel?: string
}

export function MobileCard({ title, description, thumbnail, redirect, buttonLabel }: Props) {
  const [isDialogVisible, setIsDialogVisible] = useState(false)

  return (
    <>
      <Dialog open={isDialogVisible} onOpenChange={setIsDialogVisible}>
        <DialogTrigger asChild>
          <div
            className="relative group w-full max-w-[16rem] md:max-w-[20rem] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer aspect-[9/16]"
            onClick={() => setIsDialogVisible(true)}
          >
            <div className="flex flex-col items-center border-2 border-gray-700/50 rounded-xl h-full justify-center relative overflow-hidden bg-gray-900">
              <Image
                src={thumbnail[0]}
                alt={title}
                className="h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/30 to-transparent"></div>
              
              <div className="absolute bottom-6 flex flex-col items-center z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h6 className="text-lg font-bold text-white selection:bg-transparent selection:text-cyan-800 cursor-default shadow-text text-center px-4">
                  {title}
                </h6>
                <div className="flex items-center gap-1 mt-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs font-semibold uppercase tracking-wider">Ver detalhes</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-slate-900 border-gray-800 rounded-xl flex flex-col w-[95%] md:max-w-4xl overflow-hidden p-0 gap-0">
          <DialogHeader className="p-6 pb-4 border-b border-gray-800 bg-slate-950/50">
            <DialogTitle className="text-2xl text-cyan-400 capitalize font-bold tracking-wide">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 overflow-y-auto max-h-[85vh]">
            <DialogDescription asChild>
              <div className="flex flex-col gap-8 text-gray-300">
                <div className="text-sm md:text-base leading-relaxed">{description}</div>
                
                <div className="w-full">
                  <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">Screenshots</p>
                  <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {thumbnail.map((image, index) => (
                      <div key={index} className="snap-center shrink-0 w-[65%] md:w-[40%] lg:w-[30%] relative rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-black">
                        <Image
                          src={image}
                          alt={`${title} screenshot ${index + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={redirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={
                    redirect.endsWith(".apk") ? `${title.replace(/\s+/g, '-').toLowerCase()}.apk` : undefined
                  }
                  className="flex items-center justify-center gap-2 w-full md:w-auto md:self-center py-4 px-8 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-colors duration-300 mt-2 shadow-lg hover:shadow-cyan-500/25"
                >
                  {redirect.endsWith(".apk") ? <Download size={20} /> : <ExternalLink size={20} />}
                  <span>
                    {buttonLabel || (redirect.endsWith(".apk") ? "Baixar Aplicativo" : "Acessar Projeto")}
                  </span>
                </a>
              </div>
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
