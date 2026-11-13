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
    <div className="mb-4 rounded-xl border border-slate-200 bg-slate-950 p-2.5 shadow-inner">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 via-[#0b1533] to-slate-950">
        <img
          src={animate ? active.animatedSrc : active.posterSrc}
          alt={active.label}
          loading="lazy"
          decoding="async"
          className="max-h-full w-auto object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]"
        />

        <button
          type="button"
          onClick={() => setAnimate((v) => !v)}
          className="absolute bottom-2 right-2 rounded border border-white/20 bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-200 hover:border-cyan-400"
        >
          {animate ? "❚❚ Pause" : "▶ Play 3D"}
        </button>

        <a
          href={active.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded border border-cyan-400/40 bg-cyan-500/20 px-2 py-0.5 text-[10px] font-semibold text-cyan-200 hover:bg-cyan-500/35"
        >
          <span>{active.liveLabel}</span>
          <ArrowUpRight className="size-3" />
        </a>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {models.map((m, idx) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setSelectedIdx(idx)}
            className={`rounded px-2 py-1 text-[10px] transition-colors ${
              idx === selectedIdx
                ? "bg-cyan-500 font-bold text-slate-950"
                : "border border-slate-700 bg-slate-900 text-slate-300 hover:text-white"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="mt-1.5 text-[10px] text-slate-400">{note}</p>
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
      className={`carousel-bg flex flex-col justify-between rounded-xl border bg-white p-5 shadow-md hover:shadow-cyan-500/15 transition-all duration-300 ${
        project.featured ? "border-cyan-500/45" : "border-slate-200"
      }`}
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.iconSrc ? (
              <img
                src={project.iconSrc}
                alt={project.title}
                width={48}
                height={48}
                loading="lazy"
                className={`size-12 shrink-0 rounded-xl border p-1.5 object-contain shadow-sm ${
                  project.darkIconBg
                    ? "border-slate-800 bg-[#0B1736]"
                    : "border-slate-200 bg-slate-50"
                }`}
              />
            ) : (
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-50 text-cyan-700">
                <Layers className="size-5" />
              </div>
            )}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-cyan-700">
                {project.categoryLabel}
              </span>
              <h3 className="text-base font-bold leading-snug text-gray-900">
                {project.title}
              </h3>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-800">
            {project.status}
          </span>
        </div>

        {project.models3d && project.models3d.length > 0 && (
          <Project3DPreview project={project} note={blenderNote} />
        )}

        {project.staticCover && (
          <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-video">
            <Image
              src={project.staticCover}
              alt={project.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={Boolean(project.featured)}
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}

        <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
          {project.summary}
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-[#180370]">
            {architectureLabel}
          </span>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            {project.architectureNotes}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.primaryLink || project.secondaryLink || project.gallery) && (
          <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-3.5 text-xs font-bold">
            {project.primaryLink && (
              <a
                href={project.primaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-700 transition-colors hover:text-cyan-500"
              >
                <span>{project.primaryLink.label}</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            )}

            {project.secondaryLink && (
              <a
                href={project.secondaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-700 transition-colors hover:text-[#180370]"
              >
                <span>{project.secondaryLink.label}</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-50 px-3 py-1.5 text-[11px] font-bold text-cyan-800 transition-colors hover:bg-cyan-100"
                  >
                    <Smartphone className="size-3.5 text-cyan-700" />
                    <span>{inspectLabel}</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto border-slate-200 bg-slate-50 text-gray-900">
                  <DialogHeader>
                    <DialogTitle className="font-fira text-xl font-bold text-cyan-700">
                      {project.title} — UI Gallery
                    </DialogTitle>
                    <DialogDescription className="text-slate-600">
                      {project.summary}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.gallery.map((shot, idx) => (
                      <figure
                        key={idx}
                        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                      >
                        <Image
                          src={shot.src}
                          alt={shot.caption}
                          className="h-auto w-full object-contain"
                        />
                        <figcaption className="border-t border-slate-200 px-3 py-2 text-[11px] text-slate-700">
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

export function ProjectShowcaseGrid({ lang }: { lang: Locale }) {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all")
  const content = portfolioData[lang]

  const list = content.projects.filter(
    (p) => filter === "all" || p.category === filter
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
          {content.projectsPage.filters.map((tab) => {
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
                  active
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
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
