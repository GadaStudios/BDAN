"use client"
import React from "react"
import Link from "next/link"
import { Route } from "next"
import { FaDiscord, FaYoutube } from "react-icons/fa"
import { usePathname } from "next/navigation"

import { Container } from "./container"
import { cn, isActivePath } from "@/lib/utils"
import { buttonVariants } from "@/ui/button"
import { NAVIGATION_ROUTES } from "@/lib/constants"
import Image from "next/image"
import { siteConfig } from "@/config/site.config"
import { RiTwitterXLine } from "react-icons/ri"
import { FaGithub } from "react-icons/fa6"

const footerSocials = [
  {
    title: "Discord",
    icon: FaDiscord,
    url: "https://discord.gg/j2TceZg45e",
  },
  {
    title: "Twitter",
    icon: RiTwitterXLine,
    url: "https://x.com/BDAN_Bitcoin",
  },
  {
    title: "YouTube",
    icon: FaYoutube,
  },
  {
    title: "Github",
    icon: FaGithub,
    url: "https://github.com/GadaStudios/BDAN",
  },
]

export const Footer = () => {
  const pathname = usePathname()
  const [hash, setHash] = React.useState<string>("")

  React.useEffect(() => {
    const updateHash = () => setHash(window.location.hash)

    updateHash()
    window.addEventListener("hashchange", updateHash)

    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  return (
    <footer className="overflow-x-clip">
      <div className="relative h-10 bg-secondary before:absolute before:left-[10%] before:h-full before:w-[20%] before:bg-[#F9F3E7] after:absolute after:right-0 after:h-full after:w-[30%] after:bg-[#F9F3E7] md:h-16" />
      <div className="bg-secondary">
        <Container className="flex flex-col gap-8 pt-12 pb-8 md:pt-14 lg:pt-24">
          <div className="grid gap-10 border-b border-primary-active lg:grid-cols-3">
            <div className="col-span-2 flex flex-col justify-between gap-8 md:gap-8">
              <div className="flex flex-col">
                <div className="bg-[#00264D] p-6 md:p-8">
                  <div className="flex max-w-[540px] flex-col gap-4 md:gap-8">
                    <Image
                      src="/footer-logo.svg"
                      alt=""
                      width={400}
                      height={0}
                      className="h-auto"
                    />
                    <p className="text-primary-hover">
                      BDAN trains African designers to create sovereign,
                      human-centered Bitcoin experiences for the next wave of
                      users through open, decentralized design.
                    </p>
                  </div>
                </div>
                <div className="py-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
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
                            className: cn(
                              "flex-1 justify-start md:justify-center",
                              !isActive &&
                                "font-normal text-primary-hover hover:border-primary-hover hover:bg-transparent"
                            ),
                          })}
                        >
                          {route.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="hidden h-[142px] items-end justify-between md:flex">
                <div className="relative mt-auto h-full flex-1">
                  <Image
                    src="/illustration/footer-illustration-left-1.svg"
                    alt="left-illustration-1"
                    fill
                  />
                </div>
                <div className="relative mt-auto h-full flex-1">
                  <Image
                    src="/illustration/footer-illustration-left-2.svg"
                    alt="left-illustration-2"
                    fill
                  />
                </div>
                <div className="relative mt-auto h-full flex-1">
                  <Image
                    src="/illustration/footer-illustration-left-3.svg"
                    alt="left-illustration-3"
                    fill
                  />
                </div>
                <div className="relative mt-auto h-full flex-1">
                  <Image
                    src="/illustration/footer-illustration-left-4.svg"
                    alt="left-illustration-4"
                    fill
                  />
                </div>
              </div>

              <div className="flex h-[93px] md:hidden">
                <div className="relative mt-auto h-full flex-1">
                  <Image
                    src="/illustration/footer-illustration-mobile.svg"
                    alt="left-illustration-1"
                    fill
                  />
                </div>
              </div>
            </div>

            <Image
              src="/illustration/footer-illustration-right.svg"
              alt="footer-illustration-right"
              width={334}
              height={465}
              className="hidden lg:block"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-primary-hover">
              Copyright 2026 - All rights reserved - {siteConfig.name}
            </p>

            <div className="flex items-center gap-4">
              {footerSocials.map((social) => {
                const Comp = social.url ? Link : "span"
                return (
                  <Comp
                    key={social.title}
                    href={social.url as Route}
                    title={social.title}
                    target="_blank"
                  >
                    <social.icon className="size-6 text-accent" />
                  </Comp>
                )
              })}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
