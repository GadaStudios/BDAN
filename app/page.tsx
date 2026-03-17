import { HeroSection } from "./components/hero"
import { AboutSection } from "./components/about"
import { ProgramSection } from "./components/program"
import { TeamSection } from "./components/teams"
import { ApplicationSection } from "./components/application"

export default function Page() {
  return (
    <div className="flex-1 overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <TeamSection />
      <ApplicationSection />
    </div>
  )
}
