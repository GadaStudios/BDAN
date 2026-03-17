import { Container } from "@/components/container"
import { ArrowRight } from "lucide-react"
import React from "react"

export const ResourceSection = () => {
  return (
    <section id="resources" className="py-20 md:py-24 lg:py-32">
      <Container size="sm">
        <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-4xl leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-[64px] lg:leading-13">
              Resources & Insights
            </h2>
            <p className="text-primary-darker">
              Open-source knowledge for Bitcoin designers. Dive into frameworks,
              case studies, and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="flex cursor-pointer flex-col gap-4.5 border border-accent bg-background p-4 text-accent shadow-[4px_8px_0_0_#000000] transition-all duration-50 hover:shadow-none"
              >
                <header className="flex flex-col gap-4">
                  <div className="h-[224px] w-full bg-[#F9B7328F]"></div>
                  <p className="text-xs font-normal text-primary-dark-active">
                    Umar Salihu - 23/01/2026
                  </p>
                </header>

                <p className="line-clamp-2 text-lg font-medium text-primary-darker">
                  Bridge Thinking 101: Spotting UX Barriers in Bitcoin Wallets
                </p>

                <footer className="flex items-center justify-between">
                  <p className="text-sm font-normal text-primary-darker">
                    <span>Read more</span>
                  </p>
                  <ArrowRight className="size-4 text-primary-darker" />
                </footer>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
