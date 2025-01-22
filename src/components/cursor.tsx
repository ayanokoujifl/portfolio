"use client"
import { useEffect, useState } from "react"

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return (
    <>
      <div
        className="size-8 cursor-none bg-slate-900/80 rounded-full after:content-[''] after:absolute after:w-2 after:h-2 after:bg-slate-200/80 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </>
  )
}
