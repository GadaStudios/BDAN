import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full px-5 md:px-8", {
  variants: {
    size: {
      default: "max-w-[1256px] md:max-w-[1264px]", // max-width of 1232 + sm of 24 and md of 32
      sm: "max-w-[1048px] md:max-w-[1056px]", // max-width of 1024 + sm of 24 and md of 32
    },
  },
  defaultVariants: {
    size: "default",
  },
})

function Container({
  className,
  size,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof containerVariants>) {
  return (
    <section
      data-slot="section"
      className={cn(containerVariants({ size, className }))}
      {...props}
    />
  )
}

export { Container, containerVariants }
