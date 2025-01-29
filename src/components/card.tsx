import Image, { StaticImageData } from "next/image"

type Props = {
  title: string
  thumbnail: StaticImageData
  redirect: string
}

export function Card({ title, thumbnail, redirect }: Props) {
  return (
    <>
      <div className="flex flex-col items-center border-2 border-slate-900 rounded w-64 h-48 justify-center relative cursor-pointer">
        <Image src={thumbnail} alt={title} className="size-24" />
        <h6 className="text-xs font-bold text-gray-400  absolute bottom-0 selection:bg-transparent selection:text-cyan-800 cursor-default ">
          {title}
        </h6>
      </div>
    </>
  )
}
