import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isActivePath(path: string, pathname: string): boolean {
  if (typeof window === "undefined") return false

  const hash = window.location.hash // e.g. "#about"

  // Handle hash routes
  if (path.includes("#")) {
    const [, targetHash] = path.split("#")
    return hash === `#${targetHash}`
  }

  // Handle normal routes
  if (path === "/") {
    return pathname === "/" && !hash
  }

  return pathname.startsWith(path)
}
