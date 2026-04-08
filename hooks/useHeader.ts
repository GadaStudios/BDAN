"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { useCountdown } from "@/hooks/useCountdown"
import { TARGET_DATE } from "@/lib/constants"

export const useHeader = () => {
  const pathname = usePathname()

  const { isExpired } = useCountdown(TARGET_DATE)

  const [hash, setHash] = React.useState<string>("")
  const [activeSection, setActiveSection] = React.useState<string>("")

  // mobile-only active state
  const [mobileActive, setMobileActive] = React.useState<string>("")

  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const [showBanner, setShowBanner] = React.useState<boolean>(true)
  const [bannerHeight, setBannerHeight] = React.useState<number>(88)

  const bannerRef = React.useRef<HTMLDivElement>(null)

  // --- hash sync
  React.useEffect(() => {
    const updateHash = () => setHash(window.location.hash)

    window.addEventListener("hashchange", updateHash)
    updateHash()

    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  // --- measure banner height
  React.useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight)
    }
  }, [])

  // --- scroll behavior (hide/show banner)
  React.useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    const threshold = 100

    const update = () => {
      const current = window.scrollY
      const diff = current - lastScrollY

      if (Math.abs(diff) < threshold) {
        ticking = false
        return
      }

      setShowBanner(diff < 0)
      lastScrollY = current
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // --- expire banner
  React.useEffect(() => {
    if (isExpired) {
      setShowBanner(false)
    }
  }, [isExpired])

  // --- intersectionObserver logic
  React.useEffect(() => {
    const sections = document.querySelectorAll("[data-section]")
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best: string | null = null
        let bestRatio = 0

        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const section = entry.target.getAttribute("data-section")
          if (!section) continue

          if (entry.intersectionRatio > bestRatio) {
            best = section
            bestRatio = entry.intersectionRatio
          }
        }

        if (best) {
          setActiveSection(best)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -40% 0px",
      }
    )

    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  // --- CLICK HANDLER (exported)
  const handleRouteItem = (
    e: React.MouseEvent<HTMLAnchorElement>,
    value: string,
    options?: { mobile?: boolean }
  ) => {
    setShowMenu(false)

    if (value.includes("#")) {
      e.preventDefault()

      const [, h] = value.split("#")
      const el = document.getElementById(h)

      if (options?.mobile) {
        // ✅ MOBILE: click-only behavior
        setMobileActive(h)
      }

      if (el) {
        requestAnimationFrame(() => {
          const header = document.querySelector("header")
          const headerHeight = header?.offsetHeight ?? 88

          const y =
            el.getBoundingClientRect().top + window.scrollY - headerHeight

          window.scrollTo({
            top: y,
            behavior: "smooth",
          })
        })
      }
    }
  }

  return {
    pathname,
    hash,

    showMenu,
    setShowMenu,

    showBanner,
    setShowBanner,

    bannerHeight,
    bannerRef,

    isExpired,

    activeSection,
    mobileActive,

    handleRouteItem,
  }
}
