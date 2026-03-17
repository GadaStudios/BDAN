import Image from "next/image"
import { Button } from "@/ui/button"
import { Container } from "@/components/container"

export const HeroSection = () => {
  return (
    <section id="home" className="py-10 md:py-24">
      <Container size="sm" className="flex flex-col gap-23">
        <div className="flex flex-col gap-4 md:gap-10 lg:flex-row">
          <p className="text-[40px] leading-11 font-normal -tracking-[1.5%] text-secondary-dark md:text-[80px] md:leading-20">
            Unlock Bitcoin Adoption Through Design
          </p>
          <div className="flex max-w-[426px] flex-col gap-10">
            <p className="text-lg leading-6 text-primary-dark-active md:text-2xl md:leading-7">
              BDAN trains African designers to create sovereign, human-centred
              Bitcoin experiences for the next wave of users through open,
              decentralized design.
            </p>

            <div className="flex items-center gap-8">
              <Button variant="default">Apply to Pilot Cohort</Button>
              <Button variant="outline">John Discord</Button>
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
