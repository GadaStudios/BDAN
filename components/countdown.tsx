"use client"
import { useCountdown } from "@/hooks/useCountdown"
import { TARGET_DATE } from "@/lib/constants"

export const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE)

  const format = (n: number) => String(n).padStart(2, "0")

  return (
    <div className="flex items-center justify-between gap-6 md:gap-8">
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col text-center">
          <h1 className="text-3xl leading-none font-medium sm:text-4xl md:text-[40px] lg:text-5xl">
            {format(item.value)}
          </h1>
          <p className="text-xs leading-none font-medium text-accent-light-active sm:text-sm md:text-base lg:text-lg">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}
