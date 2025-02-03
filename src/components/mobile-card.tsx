import Image, { StaticImageData } from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { useRef, useState } from "react"

type Props = {
  title: string
  thumbnail: StaticImageData[]
  redirect: string
  description: string
}

export function MobileCard({ title, description, thumbnail, redirect }: Props) {
  const [isDialogVisible, setIsDialogVisible] = useState(false)

  return (
    <>
      <Dialog open={isDialogVisible} onOpenChange={setIsDialogVisible}>
        <DialogTrigger
          className="relative card-wrapper w-full md:w-[32rem] "
          asChild
          onClick={() => setIsDialogVisible(true)}
        >
          <div className="flex flex-col items-center border-2 border-gray-700 rounded aspect-video justify-center cursor-pointer relative card-front">
            <div className="flex flex-1 h-full w-full">
              {thumbnail.map((image, index) => (
                <Image
                  src={image}
                  alt={title}
                  className="w-1/3 h-full"
                  key={index}
                />
              ))}
            </div>
            <h6 className="text-xs font-bold text-gray-300  absolute bottom-0 selection:bg-transparent selection:text-cyan-800 cursor-default shadow-text">
              {title}
            </h6>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-slate-100 rounded flex flex-1 flex-col justify-center items-center w-2/3">
          <DialogHeader>
            <DialogTitle className="text-lg text-cyan-600 capitalize shadow-slate-text">
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div>
              <div className="mb-3 text-slate-700">{description}</div>
              <div className="flex flex-1 gap-8 justify-center">
                {thumbnail.map((image, index) => (
                  <Image
                    src={image}
                    alt={title}
                    className="w-32 object-contain"
                    key={index}
                  />
                ))}
              </div>
              <a
                href={redirect}
                target="_blank"
                rel="noopener noreferrer"
                download={
                  redirect.endsWith(".apk") ? "food-delivery.apk" : undefined
                }
                className="text-center text-slate-900 cursor-pointer hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold select-none mt-4 w-full block"
              >
                Faça o download do app aqui
              </a>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}
