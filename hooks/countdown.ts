import { useEffect, useState } from "react"
import { getCountdown, Countdown } from "@/lib/utils"

export function useCountdown(targetDate: Date) {
  const [time, setTime] = useState<Countdown>(getCountdown(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return time
}
