import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import Image from "next/image"
import React from "react"

interface MemberSocial {
  name: string
  handle: string
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}

interface Props {
  member: {
    name: string
    designation: string
    bio: string
    image: string
    socials: MemberSocial[]
  }
  isFoundersCard?: boolean
}

export const MemberCard: React.FC<Props> = ({ member, isFoundersCard }) => {
  return (
    <div
      key={member.name}
      className={cn("flex flex-col", {
        "lg:flex-row lg:even:flex-row-reverse": isFoundersCard,
      })}
    >
      <div
        className={cn(
          "relative aspect-square overflow-hidden bg-secondary lg:aspect-auto",
          !isFoundersCard ? "lg:h-[295px]" : "lg:w-1/2"
        )}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          quality={100}
          loading="lazy"
          className="size-full object-cover lg:scale-105"
        />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col gap-6 border border-primary-hover bg-primary-light px-6 py-8",
          {
            "lg:w-1/2": isFoundersCard,
          }
        )}
      >
        <header className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-[#1E1E1E]">
            <span>{member.name}</span>
          </p>
          <span className="text-base font-medium text-primary-dark-hover">
            {member.designation}
          </span>
        </header>

        <p className="text-base font-normal text-primary-darker">
          <span>{member.bio}</span>
        </p>

        <footer className="mt-auto flex items-center gap-3">
          {member.socials.map((social: MemberSocial) => (
            <Button
              key={social.name}
              size="icon-sm"
              variant="outline"
              className="size-9! shadow-none!"
            >
              <social.icon className="size-5 fill-foreground" />
            </Button>
          ))}
        </footer>
      </div>
    </div>
  )
}
