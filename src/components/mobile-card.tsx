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

  const dialogRef = useRef(null)

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
        <DialogContent className="bg-slate-100" ref={dialogRef}>
          <DialogHeader>
            <DialogTitle className="text-lg text-cyan-600 capitalize shadow-slate-text">
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div>
              <div>{description}</div>
              <div className="flex flex-1 gap-8 justify-center">
                {thumbnail.map((image, index) => (
                  <Popover
                    key={index}
                    onOpenChange={() => {
                      dialogRef.style.opacity = "0.3"
                    }}
                  >
                    <PopoverTrigger asChild>
                      <Image
                        src={image}
                        alt={title}
                        className="w-32 object-contain"
                      />
                    </PopoverTrigger>
                    <PopoverContent className="bg-slate-300 justify-center flex items-center w-72 absolute bottom-1/2">
                      <Image
                        src={image}
                        alt={title}
                        className="object-contain h-full"
                      />
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
              <p
                onClick={() => window.open(redirect, "_blank")}
                className="text-center text-slate-900 cursor-pointer hover:text-cyan-500 transition-colors ease-in-out duration-150 hover:font-bold select-none mt-4"
              >
                Faça o download do app aqui
              </p>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  )
}
