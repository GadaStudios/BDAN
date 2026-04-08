"use client"
import { HeroSection } from "./components/hero"
import { AboutSection } from "./components/about"
import { ProgramSection } from "./components/program"
import { TeamSection } from "./components/teams"
import { ApplicationSection } from "./components/application"
import { FAQSection } from "./components/faqs"
import { ResourceSection } from "./components/resources"
import { CTASection } from "./components/cta"
import { useCountdown } from "@/hooks/useCountdown"
import { TARGET_DATE } from "@/lib/constants"
import { cn } from "@/lib/utils"

export default function Page() {
  const { isExpired } = useCountdown(TARGET_DATE)

  return (
    <div className="flex-1 overflow-x-clip">
      <HeroSection
        id="home"
        data-section="home"
        className={cn(
          "py-[128px] md:py-[184px]",
          !isExpired && "pt-[226px] md:pt-[272px]"
        )}
      />
      <AboutSection
        id="about"
        data-section="about"
        className="py-20 md:py-24 lg:py-32"
      />
      <ProgramSection
        id="program"
        data-section="program"
        className="py-20 md:py-24 lg:py-32"
      />
      <TeamSection
        id="teams"
        data-section="teams"
        className="py-20 md:py-24 lg:py-32"
      />
      <ApplicationSection
        id="application-process"
        data-section="application-process"
        className="py-20 md:py-24 lg:py-32"
      />
      <FAQSection
        id="faqs"
        data-section="faqs"
        className="py-20 md:py-24 lg:py-32"
      />
      <ResourceSection
        id="resources"
        data-section="resources"
        className="py-20 md:py-24 lg:py-32"
      />
      <CTASection
        id="community"
        data-section="community"
        className="pt-20 md:pt-24 lg:pt-32"
      />
    </div>
  )
}
