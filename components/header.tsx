"use client"
import Link from "next/link"
import { Route } from "next"
import Image from "next/image"
import { motion } from "framer-motion"
import { BsMegaphone } from "react-icons/bs"

import { cn } from "@/lib/utils"
import { Container } from "./container"
import { useHeader } from "@/hooks/useHeader"
import { siteConfig } from "@/config/site.config"
import { NAVIGATION_ROUTES } from "@/lib/constants"
import { Button, buttonVariants } from "@/ui/button"

export const Header = () => {
  const {
    pathname,
    showMenu,
    setShowMenu,
    showBanner,
    bannerHeight,
    bannerRef,
    isExpired,
    activeSection,
    mobileActive,
    handleRouteItem,
  } = useHeader()

  const getIsActive = (routeValue: string, isMobile?: boolean) => {
    if (routeValue === "/") {
      return isMobile ? mobileActive === "home" : activeSection === ""
    }

    if (routeValue.includes("#")) {
      const sectionId = routeValue.split("#")[1]

      return isMobile ? mobileActive === sectionId : activeSection === sectionId
    }

    return pathname === routeValue
  }

  return (
    <>
      {!isExpired && (
        <motion.div
          ref={bannerRef}
          animate={{
            height: showBanner ? bannerHeight : 0,
          }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-0 left-0 z-50 w-full"
        >
          <Link
            href="/#process"
            onClick={(e) => handleRouteItem(e, "/#process")}
            className="flex h-22 flex-1 flex-col items-start justify-center gap-4 bg-secondary px-4 py-4 md:flex-row md:items-center md:px-6"
          >
            <div className="flex items-start gap-3">
              <BsMegaphone className="mt-0.5 size-4 text-accent-light-active md:mt-1" />

              <p className="flex-1 text-[12.5px] font-medium text-primary-hover sm:text-sm sm:font-light md:text-base">
                Applications for the pilot cohort are now open and closes on
                April 26th, 2026. The cohort kicks off on May 11th.
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
        </motion.div>
      )}
      <motion.header
        animate={{
          top: !isExpired && showBanner ? bannerHeight : 0,
        }}
        initial={false}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="fixed left-0 z-50 w-full"
      >
        <nav
          className={cn(
            "flex h-22 items-center justify-center bg-background",
            showMenu && "bg-primary"
          )}
        >
          <Container className="flex items-center justify-between gap-4">
            <Link href="/#home" onClick={(e) => handleRouteItem(e, "/#home")}>
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
                const isActive = getIsActive(route.value)

                return (
                  <Link
                    key={route.label}
                    href={route.value as Route}
                    onClick={(e) => handleRouteItem(e, route.value)}
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
            <div className="flex w-full flex-col bg-primary px-5 py-4 md:px-8">
              {NAVIGATION_ROUTES.map((route) => {
                const isActive = getIsActive(route.value, true)

                return (
                  <Link
                    key={route.label}
                    href={route.value as Route}
                    onClick={(e) =>
                      handleRouteItem(e, route.value, { mobile: true })
                    }
                    className={cn(
                      "border border-transparent p-4 font-normal tracking-wide text-primary-dark-active hover:border-border",
                      {
                        "border-accent font-semibold text-accent hover:border-accent-active":
                          isActive,
                      }
                    )}
                  >
                    <span>{route.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </motion.header>
    </>
  )
}
