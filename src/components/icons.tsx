type IconProps = {
  className?: string
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}
