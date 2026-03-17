import Image from "next/image"
import { Button } from "@/ui/button"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"

const ctaOccasions = [
  {
    title: "Discord",
    description: "Daily discussions, project shares, Bridge Thinking AMAs.",
    style: "bg-[#4F9EEC] text-primary-light-active",
  },
  {
    title: "Events",
    description: "Virtual and physical meetups in different locations.",
    style: "bg-[#57CD65] text-secondary-dark",
  },
  {
    title: "Open Resources",
    description: "Free guides, templates, and bitcoin design integrations.",
    style: "bg-[#5C4BDE] text-primary-light-active",
  },
  {
    title: "Alumni Network",
    description: "Post-program intros to open-source projects in Bitcoin.",
    style: "bg-[#F1D02C] text-primary-light-active",
  },
]

export const CTASection = () => {
  return (
    <section id="resources" className="pt-20 md:pt-24 lg:pt-32">
      <div className="relative h-10 bg-background before:absolute before:left-[10%] before:h-full before:w-[50%] before:bg-[#F9F3E7] md:h-16" />
      <div className="bg-[#F9F3E7]">
        <Container
          size="sm"
          className="flex flex-col gap-12 py-12 md:gap-20 md:py-14 lg:py-24"
        >
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-6">
            <Image
              src="/illustration/cta-illustration-1.svg"
              alt="cta-illustration-1"
              width={236}
              height={232}
              className="hidden lg:block"
            />
            <div className="col-span-2 mx-auto flex max-w-[504px] flex-col gap-4 text-center md:gap-8">
              <h2 className="text-4xl leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-[64px] lg:leading-13">
                Join the Network
              </h2>
              <p className="text-primary-darker">
                BDAN isn&apos;t just training, it&apos;s a decentralized
                community of designers pushing Bitcoin forward. Connect,
                collaborate, and contribute.
              </p>
              <div className="mx-auto flex items-center gap-8">
                <Button variant="default" className="flex-1">
                  Apply to Pilot Cohort
                </Button>
                <Button variant="outline">John Discord</Button>
              </div>
            </div>
            <Image
              src="/illustration/cta-illustration-2.svg"
              alt="cta-illustration-2"
              width={236}
              height={232}
              className="hidden lg:block"
            />

            <div className="col-span-2 mx-auto flex items-center md:gap-6 lg:hidden">
              <Image
                src="/illustration/cta-illustration-1.svg"
                alt="cta-illustration-1"
                width={179}
                height={176}
              />
              <Image
                src="/illustration/cta-illustration-2.svg"
                alt="cta-illustration-2"
                width={179}
                height={176}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {ctaOccasions.map((oc) => (
              <div
                key={oc.title}
                className={cn(
                  "flex flex-col justify-between gap-8 px-6 py-8 md:gap-12 lg:gap-14",
                  oc.style
                )}
              >
                <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                  {oc.title}
                </p>
                <p className="text-base font-normal">{oc.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
