import Image from "next/image"
import { Container } from "@/components/container"
import { Button } from "@/ui/button"

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

export const ApplicationSection = () => {
  return (
    <section id="application-process" className="py-20 md:py-24 lg:py-32">
      <Container className="relative">
        <div className="relative h-10 bg-background before:absolute before:left-[13%] before:h-full before:w-[50%] before:bg-secondary-dark md:h-16" />
        <div className="bg-secondary-dark">
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {applicationProcess.map((process, index) => (
                <div
                  key={process.title}
                  className="flex flex-col justify-between gap-8 bg-[#F9F3E7] px-6 py-8 text-secondary-dark md:gap-12 lg:gap-14"
                >
                  <div className="flex h-[77px] w-[58px] items-center justify-center border border-primary-dark-hover">
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
              <div className="flex flex-col justify-between gap-8 bg-[#5C4BDE] px-6 py-8 text-primary-light-hover md:gap-12 lg:gap-14">
                <p className="text-base font-normal">
                  First Cohort starts on the 6th of April, 2026. The application
                  is free, and only limited spots are available across different
                  design tracks.
                </p>

                <div className="flex max-w-[231px] flex-col gap-4">
                  <Button variant="default">Apply to Pilot Cohort</Button>
                  <Button variant="outline">See Design Challenge</Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative h-10 bg-secondary-dark before:absolute before:left-[13%] before:h-full before:w-[60%] before:bg-background md:h-16" />
      </Container>
    </section>
  )
}
