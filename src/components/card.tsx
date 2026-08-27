import Image, { StaticImageData } from "next/image"

type Props = {
  title: string
  thumbnail: StaticImageData
  redirect: string
  description: string
}

export function Card({ title, thumbnail, redirect, description }: Props) {
  return (
    <a
      href={redirect}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-full md:w-[28rem] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer block"
    >
      <div className="flex flex-col items-center border-2 border-gray-700/50 rounded-xl aspect-video justify-center relative overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          sizes="(max-width: 768px) 100vw, 448px"
          className="h-full w-full object-cover absolute top-0 group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
        
        <h6 className="text-sm font-bold text-gray-100 absolute bottom-3 selection:bg-transparent selection:text-cyan-800 cursor-default shadow-text z-10 transition-transform duration-500 group-hover:-translate-y-2">
          {title}
        </h6>
      </div>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md opacity-0 group-hover:opacity-100 flex flex-col items-center border-2 border-cyan-500/30 rounded-xl justify-center p-6 transition-all duration-500 ease-in-out">
        <p className="text-justify text-gray-100 text-sm md:text-base font-medium drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {description}
        </p>
      </div>
    </a>
  )
}
