import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion"
import { Container } from "@/components/container"

const faqs = [
  {
    question: "Do I need to be a Bitcoin expert to join BDAN?",
    answer:
      "No, not at all. You only need real design skills (UI/UX, graphic, motion, brand/communication), genuine curiosity, and belief in Bitcoin. No previous Bitcoin or crypto experience is required. We teach the Bitcoin-native thinking from the ground up.",
  },
  {
    question: "How much does the pilot cohort cost?",
    answer:
      "The cohort is free. We want to focus purely on the quality of participants and building a strong founding network.",
  },
  {
    question: "How much time will the program really take?",
    answer:
      "Expect 5–10 hours per week for 12 weeks. The structure is designed to be doable even if you have a full-time job or freelance clients. It is a mix of live sessions and asynchronous materials, with very flexible deadlines on most deliverables. The design challenge and capstone project are the biggest time blocks.",
  },
  {
    question: "Is BDAN only for Africans?",
    answer:
      "Right now, yes. The pilot cohort is Africa-focused. We’re intentionally starting with designers from across the continent to build momentum, shared context, and strong regional roots in the Bitcoin ecosystem. All African nationalities are welcome and encouraged to apply. Future cohorts will open more broadly, especially within the Global South.",
  },
  {
    question: "Why is the pilot limited to Africans?",
    answer:
      "We’re launching BDAN, where Bitcoin adoption is accelerating fastest and where talented designers are often underrepresented in global programs. By starting Africa-first, we build a strong, culturally-aligned founding network that can later scale globally.",
  },
  {
    question: "What happens after the program ends?",
    answer: "You become part of the permanent BDAN network. That means:",
    lists: [
      "Ongoing access to the community & Discord",
      "Alumni-only channels and opportunities",
      "Chance to collaborate on real Bitcoin projects",
      "Portfolio pieces + capstone project you can proudly show",
      "Introductions/connections to Bitcoin-native teams (when opportunities appear)",
    ],
  },
  {
    question:
      "I’m more of a (graphic designer/motion designer/brand designer). Is this program still for me?",
    answer:
      "Yes! 100%. We have specialized tracks exactly because different design disciplines bring different superpowers to Bitcoin adoption.",
  },
  {
    question: "How selective is the application process really?",
    answer:
      "Very. We’re looking for conviction, skill, and curiosity. We would rather have 12–18 incredible designers than 40 average ones. The quality of the first cohort equals the quality of the whole network.",
  },
]

export const FAQSection = () => {
  return (
    <section id="faqs" className="py-20 md:py-24 lg:py-32">
      <Container size="sm">
        <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-4xl leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-[64px] lg:leading-13">
              Find Answers to FAQs
            </h2>
          </div>

          <Accordion defaultValue={[faqs[0].question]}>
            {faqs.map((faq) => (
              <AccordionItem value={faq.question} key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
