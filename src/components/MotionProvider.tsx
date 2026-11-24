"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type Lenis from "lenis"
import "lenis/dist/lenis.css"
import { PagePreloader } from "@/components/PagePreloader"

declare global {
  interface Window {
    __atomicLenis?: Lenis
    __atomicPreloaderDone?: boolean
  }
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!window.matchMedia("(pointer: fine)").matches) {
      delete window.__atomicLenis
      return
    }

    let cancelled = false
    let lenisInstance: Lenis | null = null
    let tick: ((time: number) => void) | null = null

    void import("lenis").then(({ default: LenisCtor }) => {
      if (cancelled) return

      const lenis = new LenisCtor({
        lerp: 0.065,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.35,
      })

      lenisInstance = lenis
      window.__atomicLenis = lenis

      if (!window.__atomicPreloaderDone) {
        lenis.stop()
      }

      lenis.on("scroll", ScrollTrigger.update)

      tick = (time: number) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
    })

    return () => {
      cancelled = true
      if (tick) gsap.ticker.remove(tick)
      if (lenisInstance) lenisInstance.destroy()
      delete window.__atomicLenis
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (window.__atomicLenis) {
      window.__atomicLenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }

    const scrollProgressEl = document.querySelector<HTMLElement>("[data-scroll-progress]")
    if (scrollProgressEl) {
      scrollProgressEl.style.transform = "scaleX(0)"
    }

    let cleanupPreloaderListener: (() => void) | null = null
    let rafId = 0

    const ctx = gsap.context(() => {
      const playEntrance = () => {
        const heroStagger = document.querySelectorAll<HTMLElement>("[data-hero-stagger]")
        if (heroStagger.length > 0) {
          gsap.from(heroStagger, {
            y: 32,
            opacity: 0,
            duration: 0.8,
            stagger: 0.09,
            ease: "power3.out",
            clearProps: "transform,opacity",
          })
        }

        const heroAtom = document.querySelector<HTMLElement>("[data-hero-atom]")
        if (heroAtom) {
          gsap.from(heroAtom, {
            scale: 0.94,
            y: 18,
            duration: 0.85,
            delay: 0.05,
            ease: "power3.out",
            clearProps: "transform",
          })
        }
      }

      const setupScrollTriggers = () => {
        if (scrollProgressEl) {
          gsap.to(scrollProgressEl, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.25,
            },
          })
        }

        const mm = gsap.matchMedia()
        mm.add("(min-width: 768px)", () => {
          const atomEl = document.querySelector<HTMLElement>("[data-hero-atom]")
          const copyEl = document.querySelector<HTMLElement>("[data-hero-copy]")
          const heroSection = document.querySelector<HTMLElement>("[data-hero-section]")
          if (!heroSection) return

          if (atomEl) {
            gsap.to(atomEl, {
              y: -46,
              scale: 0.95,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 1.0,
              },
            })
          }

          if (copyEl) {
            gsap.to(copyEl, {
              y: -28,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 1.0,
              },
            })
          }
        })

        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 34,
            opacity: 0,
            duration: 0.78,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          })
        })

        document.querySelectorAll<HTMLElement>("[data-stagger-group]").forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]")
          if (items.length === 0) return

          gsap.from(items, {
            y: 36,
            scale: 0.97,
            opacity: 0,
            duration: 0.72,
            stagger: 0.09,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: group,
              start: "top 88%",
              once: true,
            },
          })
        })
      }

      const startMotionAfterBoot = () => {
        playEntrance()
        rafId = requestAnimationFrame(() => {
          ctx.add(() => setupScrollTriggers())
          window.__atomicLenis?.resize()
          ScrollTrigger.refresh()
        })
      }

      if (window.__atomicPreloaderDone) {
        startMotionAfterBoot()
      } else {
        const onReady = () => {
          cleanupPreloaderListener = null
          ctx.add(() => startMotionAfterBoot())
        }
        window.addEventListener("atomic-preloader-done", onReady, { once: true })
        cleanupPreloaderListener = () => {
          window.removeEventListener("atomic-preloader-done", onReady)
        }
      }
    })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (cleanupPreloaderListener) cleanupPreloaderListener()
      ctx.revert()
    }
  }, [pathname])

  return (
    <>
      <PagePreloader />
      <div aria-hidden="true" className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none">
        <div
          data-scroll-progress
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#180370] via-[#24e4ee] to-cyan-400 shadow-[0_0_10px_rgba(36,228,238,0.7)]"
        />
      </div>
      {children}
    </>
  )
}
