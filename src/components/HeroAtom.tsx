"use client"

import { useEffect, useRef, useState } from "react"

export function HeroAtom({ isPt }: { isPt: boolean }) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [isSafari, setIsSafari] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [useSafariWebp, setUseSafariWebp] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    let rafId = 0
    let safariImg: HTMLImageElement | null = null
    let cancelled = false

    const startAnimation = () => {
      rafId = requestAnimationFrame(() => {
        if (cancelled) return
        const safari = /^((?!chrome|chromium|android|crios|fxios).)*safari/i.test(
          navigator.userAgent
        )
        setIsSafari(safari)
        setShouldAnimate(true)

        if (safari) {
          safariImg = new window.Image()
          safariImg.onload = () => {
            if (!cancelled) {
              setUseSafariWebp(true)
            }
          }
          safariImg.src = "/media/atomic-3d.webp?v=3"
        }
      })
    }

    if (window.__atomicPreloaderDone) {
      startAnimation()
    } else {
      window.addEventListener("atomic-preloader-done", startAnimation, { once: true })
    }

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener("atomic-preloader-done", startAnimation)
      if (safariImg) {
        safariImg.onload = null
        safariImg = null
      }
    }
  }, [])

  useEffect(() => {
    if (!shouldAnimate || isSafari) return
    const el = videoRef.current
    if (!el) return
    if (el.readyState >= 2) {
      setVideoReady(true)
    }
    void el.play().catch(() => {})
  }, [shouldAnimate, isSafari])

  const handleReady = () => {
    setVideoReady(true)
  }

  const altText = isPt
    ? "Átomo 3D rotacionando — marca dev_atomic_journey"
    : "Rotating 3D Atom — dev_atomic_journey mark"

  return (
    <div className="relative z-10 size-64 sm:size-80">
      <img
        src={useSafariWebp ? "/media/atomic-3d.webp?v=3" : "/media/atomic-3d-poster-sm.webp"}
        srcSet={
          useSafariWebp
            ? undefined
            : "/media/atomic-3d-poster-sm.webp 256w, /media/atomic-3d-poster.webp 320w"
        }
        sizes={useSafariWebp ? undefined : "(max-width: 639px) 128px, 320px"}
        alt={altText}
        width={320}
        height={320}
        fetchPriority="high"
        decoding="async"
        data-hero-atom-poster
        className={`size-full object-contain drop-shadow-[0_14px_24px_rgba(24,3,112,0.14)] transition-opacity duration-300 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldAnimate && !isSafari && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedData={handleReady}
          onPlaying={handleReady}
          className={`pointer-events-none absolute inset-0 size-full object-contain drop-shadow-[0_14px_24px_rgba(24,3,112,0.14)] transition-opacity duration-300 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/media/atomic-3d.webm" type="video/webm" />
        </video>
      )}
    </div>
  )
}
