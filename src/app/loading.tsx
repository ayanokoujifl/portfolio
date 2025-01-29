export default function Loading() {
  return (
    <main className="flex flex-1 min-h-screen items-center justify-center">
      <div className="flex gap-4">
        <span className="size-3 rounded-full bg-cyan-500 loading" />
        <span className="size-3 rounded-full bg-cyan-500 loading" />
        <span className="size-3 rounded-full bg-cyan-500 loading" />
      </div>
    </main>
  )
}
