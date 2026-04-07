"use client"
import React from "react"
import Link from "next/link"
import { Route } from "next"
import Image from "next/image"
import { GoMegaphone } from "react-icons/go"
import { usePathname } from "next/navigation"

import { Container } from "./container"
import { cn, isActivePath } from "@/lib/utils"
import { useCountdown } from "@/hooks/countdown"
import { siteConfig } from "@/config/site.config"
import { Button, buttonVariants } from "@/ui/button"
import { NAVIGATION_ROUTES, TARGET_DATE } from "@/lib/constants"

export const Header = () => {
  const pathname = usePathname()

  const { isExpired } = useCountdown(TARGET_DATE)
  const [hash, setHash] = React.useState<string>("")
  const [showMenu, setShowMenu] = React.useState<boolean>(true)

  React.useEffect(() => {
    const updateHash = () => setHash(window.location.hash)

    window.addEventListener("hashchange", updateHash)
    updateHash()

    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  return (
    <header className="sticky top-0 left-0 z-50 w-full">
      {!isExpired && (
        <Link
          href="/#application-process"
          className="flex flex-1 flex-col items-start justify-center gap-4 bg-secondary p-6 md:flex-row md:items-center"
        >
          <div className="flex items-start gap-3">
            <GoMegaphone className="mt-0.5 size-4 text-accent-light-active" />

            <p className="flex-1 text-sm font-light text-primary-hover sm:text-base">
              Applications for the pilot cohort are now open and closes on April
              26th, 2026. The cohort kicks off on May 11th.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="hidden! h-10! bg-transparent text-background shadow-none hover:bg-accent-light-hover/30 active:bg-accent-light-active/30 md:inline-flex!"
          >
            <span>Apply Now</span>
          </Button>
        </Link>
      )}

      <nav
        className={cn(
          "bg-background/90 py-6 backdrop-blur-md md:py-8",
          showMenu && "bg-primary backdrop-blur-none"
        )}
      >
        <Container className="flex h-8 items-center justify-between gap-4 md:h-[48px]">
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

          <div className="hidden items-center lg:flex">
            {NAVIGATION_ROUTES.map((route) => {
              const isActive = isActivePath(route.value, pathname, hash)

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

          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon-sm"
              className=""
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <svg viewBox="0 0 32 32" fill="none" className="size-5">
                  <path
                    d="M6.5719 8.79086L8.45752 6.90524L25.4281 23.8758L23.5425 25.7614L6.5719 8.79086Z"
                    className="fill-secondary-dark"
                  />
                  <path
                    d="M23.5424 6.90525L25.428 8.79086L8.45742 25.7614L6.5718 23.8758L23.5424 6.90525Z"
                    className="fill-secondary-dark"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 16" fill="none" className="size-5">
                  <path
                    d="M0 16V13.3333H24V16H0ZM12 9.33333V6.66667H24V9.33333H12ZM5.33333 2.66667V0H24V2.66667H5.33333Z"
                    className="fill-secondary-dark"
                  />
                </svg>
              )}
            </Button>
          </div>
        </Container>
      </nav>

      {showMenu && (
        <div className="absolute top-full left-0 flex h-dvh w-full lg:hidden">
          <div className="flex w-full flex-col bg-primary p-5 md:p-8">
            {NAVIGATION_ROUTES.map((route) => {
              const isActive = isActivePath(route.value, pathname, hash)

              return (
                <Link
                  key={route.label}
                  href={route.value as Route}
                  onClick={() => {
                    setShowMenu(!showMenu)
                    if (route.value.includes("#")) {
                      const [, h] = route.value.split("#")
                      setHash(`#${h}`)
                    } else {
                      setHash("")
                    }
                  }}
                  className={buttonVariants({
                    variant: isActive ? "outline" : "ghost",
                    size: "sm",
                    className:
                      "w-full justify-start bg-transparent shadow-none",
                  })}
                >
                  {route.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
