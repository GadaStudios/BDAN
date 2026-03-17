import React from "react"
import { Container } from "./container"

export const Footer = () => {
  return (
    <footer>
      <section id="resources" className="overflow-x-clip">
        <div className="relative h-10 bg-secondary before:absolute before:left-[10%] before:h-full before:w-[20%] before:bg-[#F9F3E7] after:absolute after:right-0 after:h-full after:w-[30%] after:bg-[#F9F3E7] md:h-16" />
        <div className="bg-secondary">
          <Container className="flex flex-col gap-8 py-12 md:py-14 lg:py-24"></Container>
        </div>
      </section>
    </footer>
  )
}
