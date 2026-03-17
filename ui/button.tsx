"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding whitespace-nowrap transition-all duration-50 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-accent bg-accent text-primary shadow-[4px_8px_0_0_#000000] hover:border-accent-hover hover:bg-accent-hover hover:shadow-none active:border-accent-active active:bg-accent-active active:shadow-none disabled:border-primary disabled:bg-primary disabled:text-[#c5c7b7] disabled:shadow-none",
        outline:
          "border-accent bg-background text-accent shadow-[4px_8px_0_0_#000000] hover:bg-accent-light-hover hover:shadow-none active:bg-accent-light-active active:shadow-none disabled:border-primary-dark disabled:bg-primary-light-active disabled:text-[#c5c7b7] disabled:shadow-none",
        ghost:
          "bg-transparent text-accent hover:border-accent hover:bg-background active:border-transparent active:bg-accent-light disabled:border-transparent disabled:bg-transparent disabled:text-[#c5c7b7]",
      },
      size: {
        default:
          "h-15.5 px-5 body-3 font-semibold md:h-16 md:px-6.5 md:body-2 md:font-bold lg:h-18 lg:px-8",
        sm: "h-[48px] px-4 body-3",
        icon: "size-15.5 md:size-16 lg:size-18",
        "icon-sm": "size-[48px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
