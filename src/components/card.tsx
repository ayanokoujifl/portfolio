import Image, { StaticImageData } from "next/image"

type Props = {
  title: string
  thumbnail: StaticImageData
  redirect: string
  description: string
}

export function Card({ title, thumbnail, redirect, description }: Props) {
  return (
    <>
      <div
        className="relative card-wrapper"
        onClick={() => window.open(redirect, "_blank")}
      >
        <div className="flex flex-col items-center border-2 border-gray-700 rounded w-[28rem] aspect-video justify-center cursor-pointer relative card-front">
          <Image
            src={thumbnail}
            alt={title}
            className="h-full absolute top-0"
          />
          <h6 className="text-xs font-bold text-gray-300  absolute bottom-0 selection:bg-transparent selection:text-cyan-800 cursor-default shadow-text">
            {title}
          </h6>
        </div>
        <div className="absolute top-0 left-0  card-back bg-gray-100/90 flex flex-col items-center border-2 border-gray-700 rounded justify-center cursor-pointer p-6">
          <p className="text-justify text-slate-900 text-lg ">{description}</p>
        </div>
      </div>
    </>
  )
}
