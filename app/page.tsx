import { HeroSection } from "./components/hero"
import { AboutSection } from "./components/about"
import { ProgramSection } from "./components/program"
import { TeamSection } from "./components/teams"
import { ApplicationSection } from "./components/application"
import { FAQSection } from "./components/faqs"
import { ResourceSection } from "./components/resources"

export default function Page() {
  return (
    <div className="flex-1 overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <TeamSection />
      <ApplicationSection />
      <FAQSection />
      <ResourceSection />
    </div>
  )
}
