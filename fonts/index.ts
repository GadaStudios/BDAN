import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const fontDelight = localFont({
  src: "./delight/delight-vf.ttf",
  variable: "--font-delight",
  preload: true,
})

const fontAnton = localFont({
  src: "./anton/Anton-Regular.ttf",
  variable: "--font-anton",
  preload: true,
})

export const fontVariables = (className?: string) =>
  cn(fontDelight.variable, fontAnton.variable, className)
