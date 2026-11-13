export function AtomicIcon({ className = "size-5 mr-2 shrink-0" }: { className?: string }) {
  return (
    <img
      src="/icon.svg"
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      className={className}
    />
  )
}
