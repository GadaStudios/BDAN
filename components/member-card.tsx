import { cn } from "@/lib/utils"
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
        "md:flex-row md:even:flex-row-reverse": isFoundersCard,
      })}
    >
      <div className={cn(isFoundersCard ? "md:w-1/2" : "flex-1")}>
        <Image
          src={member.image}
          alt={member.name}
          height={295}
          width={isFoundersCard ? 248 : 320}
          className="aspect-square w-full object-cover md:h-[295px] md:w-[330px]"
        />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col gap-6 border border-primary-hover bg-primary-light px-6 py-8",
          {
            "md:w-1/2": isFoundersCard,
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

        <footer className="mt-auto flex items-center gap-6">
          {member.socials.map((social: MemberSocial) => (
            <div
              key={social.name}
              className="flex size-8 items-center justify-center border border-accent bg-white"
            >
              <social.icon className="size-5 fill-foreground" />
            </div>
          ))}
        </footer>
      </div>
    </div>
  )
}
