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
      "The program is open to all undergraduate and graduate students with a passion for decentralized innovation. Applicants must be 18 or older, motivated to learn, and committed to the program’s mission.",
  },
  {
    question: "How much time will the program really take?",
    answer:
      "The program lasts approximately 2.5 months, from June 1 to August 15, depending on the project and location.",
  },
  {
    question: "Is BDAN only for Africans?",
    answer:
      "Yes! All expenses for travel, accommodation, and food are fully covered.",
  },
  {
    question: "Why is the pilot limited to Africans?",
    answer:
      "Participants will work in global locations where decentralized solutions can have the most impact. Assignments will align with community needs and participant preferences.",
  },
  {
    question: "What happens after the program ends?",
    answer:
      "Projects include financial literacy education, supporting decentralized tech adoption, and community development initiatives. Specific assignments depend on local needs.",
  },
  {
    question: "Will I get a certificate or some kind of credential at the end?",
    answer:
      "Multilingual skills are a plus, but basic English and translation tools are sufficient for most assignments.",
  },
  {
    question:
      "I’m more of a (graphic designer/motion designer/brand designer). Is this program still for me?",
    answer:
      "Participants should be adaptable, tech-savvy, and passionate about global collaboration. Strong communication and problem-solving skills are essential.",
  },
  {
    question: "How selective is the application process really?",
    answer:
      'Visit the "Apply Now" page, complete the application form, and submit a motivation letter.',
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
