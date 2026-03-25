"use client"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/ui/button"
import Image from "next/image"
import Link from "next/link"

const programWeeksInfo = [
  {
    week: "Weeks 1-4",
    title: "Shared Foundation",
    description:
      "Bitcoin basics, Bridge Thinking framework, adoption barriers (e.g., UX pitfalls in wallets, onboarding friction).",
    style: "bg-[#4F9EEC] text-primary-light-active",
  },
  {
    week: "Weeks 5-8",
    title: "Specialized Tracks",
    description:
      "UI/UX: Prototyping sovereign apps; Graphic/Motion/Brand: Visual storytelling, memes for education.",
    style: "bg-[#F1D02C] text-secondary-dark",
  },
  {
    week: "Weeks 9-12",
    title: "Capstone Projects",
    description:
      "Selecting individual or group projects (e.g., redesign a Lightning wallet UI), peer reviews, open-source contributions.",
    style: "bg-[#5C4BDE] text-primary-light-active",
  },
]

export const ProgramSection = () => {
  return (
    <section id="program" className="py-20 md:py-24 lg:py-32">
      <Container size="sm">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
            <div className="flex max-w-[609px] flex-col gap-4 md:gap-8">
              <h2 className="text-4xl leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-[64px] lg:leading-13">
                The BDAN Program
              </h2>
              <p className="text-primary-darker">
                Our 12-week online cohort starts with Bitcoin foundations
                (history, principles, economics), then splits into tracks. It
                ends with capstone projects & guest sessions from Bitcoin OGs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programWeeksInfo.map((week) => (
                <div key={week.week} className="flex flex-col gap-6 md:gap-8">
                  <header
                    className={cn("flex items-center px-4 py-2", week.style)}
                  >
                    <p className="text-2xl font-normal lg:text-3xl">
                      {week.week}
                    </p>
                  </header>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-semibold text-secondary-dark md:text-xl lg:text-2xl">
                      <span>{week.title}</span>
                    </h4>
                    <p className="text-primary-darker">{week.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col-reverse items-end gap-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-12 md:flex-row md:gap-6 lg:max-w-[421px] lg:flex-col lg:gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-[40px] leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-5xl lg:leading-13">
                  Who Can Join
                </h2>
                <p className="text-primary-darker">
                  Passionate designers in Africa accross different discipline
                  (UI/UX, graphic, motion, brand/comms) who believe in Bitcoin
                  and financial sovereignty. No prior crypto experience needed,
                  just curiosity and drive. We’re starting where the need and
                  potential are immense. 
                </p>
              </div>

              <div className="flex flex-col gap-12 md:gap-6 lg:gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="text-[40px] leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-5xl lg:leading-13">
                    What You Get
                  </h2>
                  <p className="text-primary-darker">
                    Live sessions and resources, Discord community for ongoing
                    support, Capstone project, and a network access for alumni
                    introductions to Bitcoin projects.
                  </p>
                </div>

                <div className="flex items-center gap-8">
                  <Link
                    href="/#application-process"
                    className={buttonVariants({
                      className: "flex-1",
                      variant: "default",
                    })}
                  >
                    Apply to Pilot Cohort
                  </Link>
                  <Button variant="outline">John Discord</Button>
                </div>
              </div>
            </div>

            <Image
              src="/illustration/program-illustration.svg"
              alt="The BDAN Program"
              width={528}
              height={420}
              className="mx-auto mt-auto lg:mx-0"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
