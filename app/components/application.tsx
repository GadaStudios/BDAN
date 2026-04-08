import Image from "next/image"
import { Container } from "@/components/container"
import { buttonVariants } from "@/ui/button"
import Link from "next/link"
import { Countdown } from "@/components/countdown"

const applicationProcess = [
  {
    title: "Design Challenge",
    description:
      "Depending on your track (UI/UX, Graphic/Motion, Brand/Communication), you’ll get a focused Bitcoin-native design brief.",
  },
  {
    title: "Submit Application",
    description:
      "Fill out the form and tell us who you are, why Bitcoin matters to you, and what design skills you bring to the fight for adoption.",
  },
  {
    title: "Portfolio Review",
    description:
      "We review your application, portfolio, and submitted challenge to find a fit. No gatekeeping, just real evaluation.",
  },
  {
    title: "Shortlist Interview",
    description:
      "Top candidates get a 20–30 min 1:1 call with the BDAN team. We want to hear your fire and make sure we’re a fit.",
  },
  {
    title: "Acceptance",
    description:
      "If you’re accepted, you’ll hear back within 2 weeks of applying. Further inforamtion will be sent then. Welcome to the network!",
  },
]

export const ApplicationSection = (
  props: React.ComponentPropsWithoutRef<"section">
) => {
  return (
    <section {...props}>
      <Container className="relative">
        <div className="relative h-10 bg-background before:absolute before:left-[13%] before:h-full before:w-[50%] before:bg-secondary md:h-16" />
        <div className="bg-secondary">
          <Container
            size="sm"
            className="flex flex-col gap-8 py-12 md:py-14 lg:py-24"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex max-w-[609px] flex-col gap-4 md:gap-8">
                <h2 className="text-3xl leading-9 text-primary-light md:text-4xl md:leading-11 lg:text-5xl lg:leading-13">
                  Application Process
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="text-primary-hover">
                    If you believe Bitcoin adoption starts with better design,
                    this is your entry point. BDAN is building a merit-based
                    cohort of African designers shaping how Bitcoin is
                    experienced across the continent. Limited spots. Serious
                    builders only.
                  </p>
                  <p className="text-primary-hover">
                    Here’s howto join the first cohort:
                  </p>
                </div>
              </div>

              <Image
                src="/illustration/application-illustration.svg"
                alt="Application Process"
                width={321}
                height={329}
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-8">
              {/* First 3 items */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {applicationProcess.slice(0, 3).map((process, index) => (
                  <div
                    key={process.title}
                    className="flex flex-col justify-between gap-8 bg-[#F9F3E7] px-6 py-8 text-secondary-dark md:gap-12 lg:gap-14"
                  >
                    <div className="flex h-[77px] w-max items-center justify-center border border-primary-dark-hover p-6">
                      <p className="text-2xl font-semibold">{index + 1}</p>
                    </div>

                    <div className="flex flex-col gap-8">
                      <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                        {process.title}
                      </p>
                      <p className="text-base font-normal">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Last 2 items */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {applicationProcess.slice(3).map((process, index) => (
                  <div
                    key={process.title}
                    className="flex flex-col justify-between gap-8 bg-[#F9F3E7] px-6 py-8 text-secondary-dark md:gap-12 lg:gap-14"
                  >
                    <div className="flex h-[77px] w-max items-center justify-center border border-primary-dark-hover p-6">
                      <p className="text-2xl font-semibold">{index + 4}</p>
                    </div>

                    <div className="flex flex-col gap-8">
                      <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                        {process.title}
                      </p>
                      <p className="text-base font-normal">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-8 bg-[#5C4BDE] px-6 py-8 text-primary-light-hover md:gap-12 lg:gap-14">
                <div className="flex w-max flex-col gap-4">
                  <p className="text-lg font-medium md:text-xl lg:text-2xl">
                    Application Deadline!
                  </p>
                  <Countdown />
                </div>
                <div className="flex max-w-[495px] flex-col gap-8">
                  <p className="text-base font-normal">
                    First Cohort starts on the 6th of April, 2026. The
                    application is free, and only limited spots are available
                    across different design tracks.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      target="_blank"
                      href="https://docs.google.com/document/d/1XAgCP3JlSYTF58ZiBVQ4MWl2A_tZkJ1nzpM12ANgoUw/edit?usp=sharing"
                      className={buttonVariants({
                        variant: "outline",
                      })}
                    >
                      See Design Challenge
                    </Link>
                    <Link
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfpP2qCe3th-R9550jbKRukFuvdk7g50OQlZeaLdTQ63XfkgQ/viewform?usp=publish-editor"
                      className={buttonVariants({
                        variant: "default",
                      })}
                    >
                      Apply to Pilot Cohort
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative h-10 bg-secondary before:absolute before:left-[13%] before:h-full before:w-[60%] before:bg-background md:h-16" />
      </Container>
    </section>
  )
}
