"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const DESKTOP_MAX_WAIT_MS = 1800
const MOBILE_MAX_WAIT_MS = 850

export function PagePreloader() {
  const pathname = usePathname()
  const [done, setDone] = useState(false)
  const isPt = pathname?.startsWith("/pt") ?? false

  useEffect(() => {
    if (window.__atomicPreloaderDone) {
      setDone(true)
      return
    }

    const el = document.getElementById("atomic-preloader")
    if (!el) {
      window.__atomicPreloaderDone = true
      window.__atomicLenis?.start()
      window.dispatchEvent(new CustomEvent("atomic-preloader-done"))
      setDone(true)
      return
    }

    window.__atomicLenis?.stop()

    const innerEl = el.querySelector<HTMLElement>("[data-preloader-inner]")
    const chromeEl = el.querySelector<HTMLElement>("[data-preloader-chrome]")
    const hudEl = el.querySelector<HTMLElement>("[data-preloader-hud]")
    const outerRingEl = el.querySelector<HTMLElement>("[data-preloader-ring-outer]")
    const innerRingEl = el.querySelector<HTMLElement>("[data-preloader-ring-inner]")
    const auraEl = el.querySelector<HTMLElement>("[data-preloader-aura]")
    const logoEl = el.querySelector<HTMLElement>("[data-preloader-logo]")
    const titleEl = el.querySelector<HTMLElement>("[data-preloader-title]")
    const stageEl = el.querySelector<HTMLElement>("[data-preloader-stage]")
    const barEl = el.querySelector<HTMLElement>("[data-preloader-bar]")
    const pctEl = el.querySelector<HTMLElement>("[data-preloader-pct]")

    const outerRingTween = outerRingEl
      ? gsap.to(outerRingEl, { rotate: 360, duration: 9, repeat: -1, ease: "none" })
      : null
    const innerRingTween = innerRingEl
      ? gsap.to(innerRingEl, { rotate: -360, duration: 6.5, repeat: -1, ease: "none" })
      : null

    const introTweens: gsap.core.Tween[] = []
    if (hudEl) {
      introTweens.push(gsap.from(hudEl, { scale: 0.72, opacity: 0, duration: 0.55, ease: "power3.out" }))
    }
    if (titleEl) {
      introTweens.push(gsap.from(titleEl, { yPercent: 105, duration: 0.5, ease: "power4.out" }))
    }
    if (stageEl) {
      introTweens.push(
        gsap.from(stageEl, { yPercent: 105, duration: 0.42, delay: 0.05, ease: "power3.out" })
      )
    }

    const isMobile = window.innerWidth < 768
    const maxWaitMs = isMobile ? MOBILE_MAX_WAIT_MS : DESKTOP_MAX_WAIT_MS
    const phase1Duration = isMobile ? 0.42 : 0.85
    const finishDuration = isMobile ? 0.22 : 0.42
    const exitDelay = isMobile ? 0.06 : 0.14
    const fadeDuration = isMobile ? 0.18 : 0.32
    const curtainDuration = isMobile ? 0.48 : 0.72
    const curtainPos = isMobile ? 0.1 : 0.18

    const proxy = { val: 0 }
    let phase1Done = false
    let fontsReady = isMobile
    let heroImgReady = false
    let finishing = false
    let exited = false
    let ceilingTimer: ReturnType<typeof setTimeout> | null = null
    let phase1Tween: gsap.core.Tween | null = null
    let phase2Tween: gsap.core.Tween | null = null
    let exitTl: gsap.core.Timeline | null = null

    const applyProgress = () => {
      const v = Math.max(0, Math.min(100, proxy.val))
      const ratio = v / 100

      if (pctEl) {
        pctEl.textContent = String(Math.round(v)).padStart(2, "0")
      }
      if (barEl) {
        barEl.style.transform = `scaleX(${ratio})`
      }
      if (auraEl) {
        auraEl.style.transform = `scale(${0.45 + ratio * 0.8})`
      }
      if (logoEl) {
        logoEl.style.transform = `scale(${0.86 + ratio * 0.18})`
      }
      if (stageEl) {
        if (isPt) {
          if (v <= 35) stageEl.textContent = "carregando módulos"
          else if (v <= 72) stageEl.textContent = "sincronizando 3d"
          else stageEl.textContent = "pronto"
        } else {
          if (v <= 35) stageEl.textContent = "loading modules"
          else if (v <= 72) stageEl.textContent = "syncing 3d core"
          else stageEl.textContent = "ready"
        }
      }
    }

    const playExitCurtain = () => {
      if (exited) return
      exited = true

      const fadeTargets = [innerEl, chromeEl].filter(Boolean) as HTMLElement[]
      exitTl = gsap.timeline({
        delay: exitDelay,
        onComplete: () => {
          outerRingTween?.kill()
          innerRingTween?.kill()
          setDone(true)
          requestAnimationFrame(() => {
            window.__atomicLenis?.resize()
            ScrollTrigger.refresh()
          })
        },
      })

      if (fadeTargets.length > 0) {
        exitTl.to(fadeTargets, {
          y: -22,
          scale: 0.94,
          opacity: 0,
          duration: fadeDuration,
          ease: "power3.in",
        })
      }

      exitTl.to(
        el,
        {
          yPercent: -100,
          duration: curtainDuration,
          ease: "power4.inOut",
          onStart: () => {
            window.__atomicPreloaderDone = true
            window.__atomicLenis?.start()
            window.dispatchEvent(new CustomEvent("atomic-preloader-done"))
          },
        },
        fadeTargets.length > 0 ? curtainPos : 0
      )
    }

    const finishTo100 = () => {
      if (finishing) return
      finishing = true
      if (ceilingTimer) clearTimeout(ceilingTimer)

      phase2Tween = gsap.to(proxy, {
        val: 100,
        duration: finishDuration,
        ease: "power3.inOut",
        overwrite: "auto",
        onUpdate: applyProgress,
        onComplete: playExitCurtain,
      })
    }

    const tryFinish = () => {
      if (phase1Done && fontsReady && heroImgReady) {
        finishTo100()
      }
    }

    applyProgress()

    phase1Tween = gsap.to(proxy, {
      val: 78,
      duration: phase1Duration,
      ease: "power2.out",
      onUpdate: applyProgress,
      onComplete: () => {
        phase1Done = true
        tryFinish()
      },
    })

    ceilingTimer = setTimeout(finishTo100, maxWaitMs)

    if (!isMobile && document.fonts && typeof document.fonts.ready?.then === "function") {
      document.fonts.ready
        .then(() => {
          fontsReady = true
          tryFinish()
        })
        .catch(() => {
          fontsReady = true
          tryFinish()
        })
    } else {
      fontsReady = true
    }

    const heroImg = document.querySelector<HTMLImageElement>("[data-hero-atom-poster]")
    const onImgDone = () => {
      heroImgReady = true
      tryFinish()
    }

    if (!heroImg || heroImg.complete) {
      onImgDone()
    } else {
      heroImg.addEventListener("load", onImgDone, { once: true })
      heroImg.addEventListener("error", onImgDone, { once: true })
    }

    return () => {
      if (ceilingTimer) clearTimeout(ceilingTimer)
      outerRingTween?.kill()
      innerRingTween?.kill()
      introTweens.forEach((tw) => tw.kill())
      phase1Tween?.kill()
      phase2Tween?.kill()
      exitTl?.kill()
      if (heroImg) {
        heroImg.removeEventListener("load", onImgDone)
        heroImg.removeEventListener("error", onImgDone)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (done) return null

  return (
    <div
      id="atomic-preloader"
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070C1D] text-slate-100 px-6 select-none overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(36, 228, 238, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(36, 228, 238, 0.045) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div
        aria-hidden="true"
        data-preloader-aura
        className="pointer-events-none absolute size-[420px] rounded-full bg-[#24e4ee]/15 blur-[110px] lg:size-[560px]"
      />

      <div data-preloader-inner className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        <div className="relative flex size-32 items-center justify-center sm:size-48 lg:size-56">
          <div data-preloader-hud aria-hidden="true" className="pointer-events-none absolute -inset-2 sm:-inset-3">
            <span className="absolute top-0 left-0 size-3.5 border-t border-l border-[#24e4ee]/70 sm:size-5" />
            <span className="absolute top-0 right-0 size-3.5 border-t border-r border-[#24e4ee]/70 sm:size-5" />
            <span className="absolute bottom-0 left-0 size-3.5 border-b border-l border-[#24e4ee]/70 sm:size-5" />
            <span className="absolute bottom-0 right-0 size-3.5 border-b border-r border-[#24e4ee]/70 sm:size-5" />
          </div>

          <svg
            data-preloader-ring-outer
            viewBox="0 0 140 140"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full"
          >
            <circle
              cx="70"
              cy="70"
              r="66"
              stroke="rgba(36, 228, 238, 0.45)"
              strokeWidth="1.25"
              strokeDasharray="10 6"
            />
          </svg>

          <svg
            data-preloader-ring-inner
            viewBox="0 0 110 110"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute size-[78%]"
          >
            <circle
              cx="55"
              cy="55"
              r="51"
              stroke="rgba(129, 140, 248, 0.4)"
              strokeWidth="1.15"
              strokeDasharray="4 8"
            />
          </svg>

          <img
            src="/icon.svg"
            alt=""
            width={144}
            height={144}
            data-preloader-logo
            className="relative z-10 size-16 object-contain drop-shadow-[0_0_24px_rgba(36,228,238,0.45)] sm:size-32 lg:size-36"
          />
        </div>

        <div className="space-y-1.5 text-center">
          <div className="overflow-hidden pb-1.5">
            <span
              data-preloader-title
              className="block font-fira text-xl font-semibold leading-snug tracking-tight text-[#24e4ee] sm:text-3xl lg:text-4xl"
            >
              {isPt ? "Bem-vindo ao meu Portfolio" : "Welcome to my Portfolio"}
            </span>
          </div>
          <div className="overflow-hidden pb-1">
            <span
              data-preloader-stage
              className="block text-[11px] leading-normal uppercase tracking-[0.26em] text-slate-400"
            >
              {isPt ? "carregando módulos" : "loading modules"}
            </span>
          </div>
        </div>
      </div>

      <div data-preloader-chrome className="contents">
        <span className="hidden sm:block absolute bottom-7 left-8 text-[10px] uppercase tracking-[0.26em] text-slate-500">
          LUÍS GUSTAVO · ATOMIC PORTFOLIO
        </span>

        <div className="absolute bottom-5 right-6 sm:bottom-6 sm:right-10 flex items-baseline gap-1 font-fira text-5xl sm:text-7xl font-bold tracking-tighter text-white/95 tabular-nums">
          <span data-preloader-pct>00</span>
          <span className="text-xl sm:text-2xl text-[#24e4ee]">%</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/[0.08]">
          <div
            data-preloader-bar
            className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#180370] via-[#24e4ee] to-cyan-200 shadow-[0_0_18px_#24e4ee]"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#24e4ee] to-transparent shadow-[0_0_24px_#24e4ee]"
      />
    </div>
  )
}
