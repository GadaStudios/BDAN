import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isActivePath(
  path: string,
  pathname: string,
  hash: string
): boolean {
  const hasHash = hash && hash.length > 0

  if (path.includes("#")) {
    if (!hasHash) return false
    return path.endsWith(hash)
  }

  if (path === "/") {
    return pathname === "/" && !hasHash
  }

  return pathname.startsWith(path)
}

export type Countdown = {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export function getCountdown(targetDate: Date): Countdown {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    }
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired: false,
  }
}
