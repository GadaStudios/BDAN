import { TeamMember } from "@/app/components/teams"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/ui/button"
import { Route } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Props {
  member: TeamMember
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
          {member?.socials?.map((social) => {
            const Comp = social.handle ? Link : "span"

            return (
              <Comp
                target="_blank"
                key={social.name}
                href={social.handle as Route}
                className={buttonVariants({
                  size: "icon-sm",
                  variant: "outline",
                  className: "size-9! shadow-none!",
                })}
              >
                <social.icon className="size-5 fill-foreground" />
              </Comp>
            )
          })}
        </footer>
      </div>
    </div>
  )
}
