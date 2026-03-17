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
