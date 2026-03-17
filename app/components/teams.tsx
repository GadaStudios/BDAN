import { Container } from "@/components/container"
import React from "react"

export const TeamSection = () => {
  return (
    <section id="teams" className="py-20 md:py-24 lg:py-32">
      <Container size="sm">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
            <div className="flex flex-col gap-4 md:gap-8">
              <h2 className="text-4xl leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-[64px] lg:leading-13">
                Meet Our Founders
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
