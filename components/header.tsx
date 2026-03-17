"use client"
import React from "react"
import Link from "next/link"
import { Route } from "next"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Container } from "./container"
import { Button, buttonVariants } from "@/ui/button"
import { siteConfig } from "@/config/site.config"
import { NAVIGATION_ROUTES } from "@/lib/constants"
import { useResponsiveJsx } from "@/hooks/responsive"
import { cn } from "@/lib/utils"

export const Header = () => {
  const pathname = usePathname()
  const breakpoints = useResponsiveJsx([600, 900, 1200])

  const lastScrollY = React.useRef<number>(0)
  const [hash, setHash] = React.useState<string>("")
  const [visible, setVisible] = React.useState<boolean>(true)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // small threshold to prevent jitter
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return

      if (currentScrollY < lastScrollY.current) {
        // scrolling up → show
        setVisible(true)
      } else {
        // scrolling down → hide
        setVisible(false)
      }

      // always show near top
      if (currentScrollY < 100) {
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const updateHash = () => setHash(window.location.hash)

    updateHash()
    window.addEventListener("hashchange", updateHash)

    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  const isActivePath = (path: string) => {
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

  return (
    <header
      className={[
        "sticky top-0 left-0 z-50 w-full bg-background/90 py-6 backdrop-blur-md md:py-12",
        "transition-transform duration-300 ease-in-out",
        visible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-8 items-center justify-between gap-4 md:h-[48px]">
          <Link href="/">
            <Image
              src="/favicon.svg"
              alt={siteConfig.title}
              width={41}
              height={48}
              priority
              quality={100}
              className="h-8 w-[28] md:h-[48px] md:w-[41px]"
            />
          </Link>

          {breakpoints >= 2 ? (
            <div className="flex items-center">
              {NAVIGATION_ROUTES.map((route) => {
                const isActive = isActivePath(route.value)

                return (
                  <Link
                    key={route.label}
                    href={route.value as Route}
                    onClick={() => {
                      if (route.value.includes("#")) {
                        const [, h] = route.value.split("#")
                        setHash(`#${h}`)
                      } else {
                        setHash("")
                      }
                    }}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:
                        !isActive &&
                        "font-normal text-primary-dark-active hover:border-primary-dark-hover",
                    })}
                  >
                    {route.label}
                  </Link>
                )
              })}
            </div>
          ) : (
            breakpoints <= 1 && (
              <div className="flex items-center">
                <Button variant="ghost" size="icon-sm">
                  <svg
                    width="24"
                    height="16"
                    viewBox="0 0 24 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                  >
                    <path
                      d="M0 16V13.3333H24V16H0ZM12 9.33333V6.66667H24V9.33333H12ZM5.33333 2.66667V0H24V2.66667H5.33333Z"
                      className="fill-secondary-dark"
                    />
                  </svg>
                </Button>
              </div>
            )
          )}
          {/* {breakpoints === 0 && (
            <Button variant="ghost" size="sm">
              Mobile View
            </Button>
          )}
          {breakpoints === 1 && (
            <Button variant="ghost" size="sm">
              Tablet View
            </Button>
          )}
          {breakpoints === 2 && (
            <Button variant="ghost" size="sm">
              Desktop View
            </Button>
          )}
          {breakpoints === 3 && (
            <Button variant="ghost" size="sm">
              LargeDesktop View
            </Button>
          )} */}
        </div>
      </Container>
    </header>
  )
}
