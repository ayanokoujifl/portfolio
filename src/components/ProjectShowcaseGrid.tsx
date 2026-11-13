"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Layers, Smartphone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  portfolioData,
  type Locale,
  type PortfolioProject,
  type ProjectCategory,
} from "@/data/portfolio"

function Project3DPreview({
  project,
  note,
}: {
  project: PortfolioProject
  note: string
}) {
  const models = project.models3d || []
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [animate, setAnimate] = useState(true)
  const active = models[selectedIdx]

  if (!active) return null

  return (
    <div className="mb-5 rounded-2xl border border-white/10 bg-[#070B14] p-3">
      <div className="stage-spotlight relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-white/[0.07]">
        <img
          src={animate ? active.animatedSrc : active.posterSrc}
          alt={active.label}
          loading="lazy"
          decoding="async"
          className="max-h-full w-auto object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.65)]"
        />

        <button
          type="button"
          onClick={() => setAnimate((v) => !v)}
          className="absolute bottom-2.5 right-2.5 rounded-lg border border-white/15 bg-[#060911]/85 px-2.5 py-1 font-mono text-[10px] text-slate-200 hover:border-cyan-400/50"
        >
          {animate ? "❚❚ Pause WebP" : "▶ Play 3D"}
        </button>

        <a
          href={active.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/15 px-2.5 py-1 font-mono text-[10px] text-cyan-200 hover:bg-cyan-500/25"
        >
          <span>{active.liveLabel}</span>
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {models.map((m, idx) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setSelectedIdx(idx)}
            className={`rounded-lg px-2.5 py-1 font-mono text-[10px] transition-colors ${
              idx === selectedIdx
                ? "bg-cyan-400 text-slate-950 font-semibold"
                : "border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-slate-400">{note}</p>
    </div>
  )
}

function ProjectCard({
  project,
  inspectLabel,
  architectureLabel,
  blenderNote,
}: {
  project: PortfolioProject
  inspectLabel: string
  architectureLabel: string
  blenderNote: string
}) {
  return (
    <article
      className={`glass-panel flex flex-col justify-between rounded-2xl p-6 transition-all hover:border-white/20 ${
        project.featured ? "border-emerald-500/25" : ""
      }`}
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5">
            {project.iconSrc ? (
              <img
                src={project.iconSrc}
                alt={project.title}
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 shrink-0 rounded-2xl border border-white/15 bg-[#090D16] object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                <Layers className="h-5 w-5" />
              </div>
            )}
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                {project.categoryLabel}
              </span>
              <h3 className="font-display text-lg font-bold text-white leading-snug">
                {project.title}
              </h3>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] text-slate-300">
            {project.status}
          </span>
        </div>

        {project.models3d && project.models3d.length > 0 && (
          <Project3DPreview project={project} note={blenderNote} />
        )}

        {project.staticCover && (
          <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-[#090D16]">
            <Image
              src={project.staticCover}
              alt={project.title}
              className="h-44 w-full object-cover object-top"
            />
          </div>
        )}

        <p className="text-sm leading-relaxed text-slate-200">{project.summary}</p>

        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
          <span className="block font-mono text-[10px] uppercase tracking-wider text-cyan-400">
            {architectureLabel}
          </span>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">
            {project.architectureNotes}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.primaryLink || project.secondaryLink || project.gallery) && (
          <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-4 text-xs font-semibold">
            {project.primaryLink && (
              <a
                href={project.primaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <span>{project.primaryLink.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {project.secondaryLink && (
              <a
                href={project.secondaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-300 transition-colors hover:text-white"
              >
                <span>{project.secondaryLink.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white"
                  >
                    <Smartphone className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{inspectLabel}</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-white/15 bg-[#090D16] text-slate-100">
                  <DialogHeader>
                    <DialogTitle className="font-display text-xl text-white">
                      {project.title} — UI Gallery
                    </DialogTitle>
                    <DialogDescription className="text-slate-400">
                      {project.summary}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.gallery.map((shot, idx) => (
                      <figure
                        key={idx}
                        className="overflow-hidden rounded-xl border border-white/10 bg-[#060911]"
                      >
                        <Image
                          src={shot.src}
                          alt={shot.caption}
                          className="h-auto w-full object-contain"
                        />
                        <figcaption className="border-t border-white/[0.07] px-3 py-2 font-mono text-[11px] text-slate-300">
                          {shot.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export function ProjectShowcaseGrid({
  lang,
  featuredOnly = false,
}: {
  lang: Locale
  featuredOnly?: boolean
}) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all")
  const content = portfolioData[lang]

  const list = featuredOnly
    ? content.projects.filter((p) => p.featured)
    : content.projects.filter((p) => filter === "all" || p.category === filter)

  return (
    <div className="space-y-8">
      {!featuredOnly && (
        <div className="inline-flex flex-wrap gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
          {content.projectsPage.filters.map((tab) => {
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  active
                    ? "bg-emerald-500 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      )}

      <div
        className={`grid grid-cols-1 gap-6 ${
          featuredOnly ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {list.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            inspectLabel={content.projectsPage.inspectGalleryLabel}
            architectureLabel={content.projectsPage.architectureLabel}
            blenderNote={content.projectsPage.blenderNote}
          />
        ))}
      </div>
    </div>
  )
}
