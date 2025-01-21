"use client"
import { useEffect, useState } from "react"

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 24, y: e.clientY - 32 })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return (
    <>
      <div
        className="size-8 bg-slate-900/30 rounded-full"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </>
  )
}
