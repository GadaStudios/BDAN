"use client"
import Link from "next/link"
import Image from "next/image"
import { buttonVariants } from "@/ui/button"
import { Container } from "@/components/container"
import { useHeader } from "@/hooks/useHeader"

export const HeroSection = (
  props: React.ComponentPropsWithoutRef<"section">
) => {
  const { handleRouteItem } = useHeader()

  return (
    <section {...props}>
      <Container size="sm" className="flex flex-col gap-23">
        <div className="flex flex-col gap-4 md:gap-10 lg:flex-row">
          <h1 className="text-[40px] leading-11 font-normal -tracking-[1.5%] text-secondary-dark md:text-6xl md:leading-18 lg:text-[80px] lg:leading-20">
            Unlock Bitcoin Adoption Through Design
          </h1>
          <div className="flex max-w-[426px] flex-col gap-10">
            <p className="text-lg leading-6 text-primary-dark-active md:text-2xl md:leading-7">
              BDAN trains African designers to create sovereign, human-centred
              Bitcoin experiences for the next wave of users through open,
              decentralized design.
            </p>

            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <Link
                href="/#application-process"
                onClick={(e) => handleRouteItem(e, "/#application-process")}
                className={buttonVariants({
                  className: "flex-1",
                  variant: "default",
                })}
              >
                Apply to Pilot Cohort
              </Link>
              <Link
                target="_blank"
                href="https://discord.gg/j2TceZg45e"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                John Discord
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/illustration/hero-illustration.svg"
            alt="Unlock Bitcoin Adoption Through Design"
            width={1024}
            height={298}
            priority
            quality={100}
          />
        </div>
      </Container>
    </section>
  )
}
