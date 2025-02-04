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
      <a
        href={redirect}
        rel="noopener noreferrer"
        target="_blank"
        download={
          redirect.endsWith(".xlsm")
            ? "dashboard-demonstrativo.xlsm"
            : redirect.endsWith(".pbix")
            ? "dashboard-demonstrativo.pbix"
            : undefined
        }
        className="relative card-wrapper w-full md:w-[28rem] "
      >
        <div className="flex flex-col items-center border-2 border-gray-700 rounded aspect-video justify-center cursor-pointer relative card-front">
          <Image
            src={thumbnail}
            alt={title}
            className="h-full absolute top-0"
          />
          <h6 className="text-sm font-bold text-gray-100  absolute bottom-0 selection:bg-transparent selection:text-cyan-800 cursor-default shadow-text">
            {title}
          </h6>
        </div>
        <div className="absolute top-0 left-0  card-back bg-gray-100/90 flex flex-col  border-2 border-gray-700 rounded justify-center items-center cursor-pointer p-6">
          <p className=" text-justify text-slate-900 text-lg ">{description}</p>
        </div>
      </a>
    </>
  )
}
