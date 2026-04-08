import { Container } from "@/components/container"
import { cn } from "@/lib/utils"
import Image from "next/image"

const aboutPitch = [
  {
    title: "The Problem",
    description:
      "Bitcoin's UX hurdles and narrative gaps slow adoption. Centralized designs erode sovereignty. BDAN changes that.",
    style: "bg-accent text-primary-light-active",
  },
  {
    title: "Our Mission",
    description:
      "Empower designers to drive Bitcoin adoption by mastering 'Bridge Thinking': a framework for identifying barriers and designing grounded, aligned solutions.",
    style: "bg-[#4F9EEC] text-primary-light-active",
  },
  {
    title: "Our Vision",
    description:
      "A global network of 100+ trained designers by 2028, fueling open-source projects and Bitcoin-native apps.",
    style: "bg-[#57CD65] text-secondary-dark",
  },
]

export const AboutSection = (
  props: React.ComponentPropsWithoutRef<"section">
) => {
  return (
    <section {...props}>
      <Container className="relative">
        <div className="relative h-10 bg-secondary before:absolute before:left-[13%] before:h-full before:w-[50%] before:bg-background md:h-16" />
        <div className="bg-secondary">
          <Container
            size="sm"
            className="flex flex-col gap-8 py-12 md:py-14 lg:py-24"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex max-w-[609px] flex-col gap-4 md:gap-8">
                <h2 className="text-3xl leading-9 text-primary-light md:text-4xl md:leading-11 lg:text-5xl lg:leading-13">
                  Designers hold the key to Bitcoin&apos;s mass adoption.
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="text-primary-hover">
                    Bitcoin Design Adoption Network (BDAN) equips designers from
                    different design disciplines (UI/UX, graphic, motion, brand)
                    with Bitcoin-native skills to bridge barriers, craft
                    compelling stories, and design for financial freedom.
                  </p>
                </div>
              </div>

              <Image
                src="/illustration/about-illustration.svg"
                alt="Designers hold the key to Bitcoin's mass adoption."
                width={321}
                height={329}
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aboutPitch.map((pitch) => (
                <div
                  key={pitch.title}
                  className={cn(
                    "flex flex-col justify-between gap-8 px-6 py-8 md:gap-12 lg:gap-14",
                    pitch.style
                  )}
                >
                  <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                    {pitch.title}
                  </p>
                  <p className="text-base font-normal">{pitch.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
        <div className="relative h-10 bg-background before:absolute before:left-[13%] before:h-full before:w-[60%] before:bg-secondary md:h-16" />
      </Container>
    </section>
  )
}
