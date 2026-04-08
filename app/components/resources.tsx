import { Container } from "@/components/container"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const resourcesArray = [
  {
    title: "Why Good Products Die.",
    author: "Umar Salihu",
    createdAt: "Aug 15, 2025.",
    url: "https://medium.com/@umarsalihu240/why-good-products-die-be8157dd7077",
    banner: "/resources/why-good-products-die.png",
  },
  {
    title: "Why Africa Can’t Copy-Paste Silicon Valley",
    author: "Umar Salihu",
    createdAt: "Aug 29, 2025.",
    url: "https://www.linkedin.com/pulse/why-africa-cant-copy-paste-silicon-valley-umar-inusa-salihu-fgipf",
    banner: "/resources/copy-paste.png",
  },
  {
    title: "Bridge Thinking Framework - Foundations",
    author: "Umar Salihu",
    createdAt: "Oct 10, 2025.",
    url: "https://www.linkedin.com/posts/umarinusasalihu_bridge-thinking-framework-foundations-activity-7383870296031842304-Q_eI?utm_source=share&utm_medium=member_desktop&rcm=ACoAABnuaD4B8YtmQfZ0s3l28bEY-YkGg_ZHQeY",
    banner: "/resources/bridge-thinking.jpg",
  },
]

export const ResourceSection = (
  props: React.ComponentPropsWithoutRef<"section">
) => {
  return (
    <section {...props}>
      <Container size="sm">
        <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-4xl leading-9 text-secondary-dark md:text-5xl md:leading-11 lg:text-[64px] lg:leading-13">
              Resources & Insights
            </h2>
            <p className="text-primary-darker">
              Open-source knowledge for Bitcoin designers. Dive into frameworks,
              case studies, and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {resourcesArray.map((resource) => (
              <a
                href={resource.url}
                target="_blank"
                key={resource.title}
                className="flex cursor-pointer flex-col gap-3 border border-accent bg-background p-4 text-accent shadow-[4px_8px_0_0_#000000] transition-shadow duration-100 hover:shadow-none"
              >
                <header className="flex flex-col gap-4">
                  <div className="relative h-auto w-full overflow-hidden bg-[#F9B7328F] sm:aspect-[1.5]">
                    <Image
                      src={resource.banner}
                      alt={resource.title}
                      height={224}
                      width={324}
                      quality={100}
                      priority
                      className="size-full origin-top object-cover"
                    />
                  </div>
                  <p className="text-xs font-normal text-primary-dark-active">
                    {resource.author} - {resource.createdAt}
                  </p>
                </header>

                <p className="mb-2 line-clamp-2 text-lg font-medium text-primary-darker">
                  {resource.title}
                </p>

                <footer className="mt-auto flex items-center justify-between">
                  <p className="text-sm font-normal text-primary-darker">
                    <span>Read more</span>
                  </p>
                  <ArrowRight className="size-4 text-primary-darker" />
                </footer>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
