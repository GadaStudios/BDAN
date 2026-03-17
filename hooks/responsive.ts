import React from "react"

export function useResponsiveJsx(breakpoints: Array<number>): number {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    function updateIndex() {
      const width = window.innerWidth
      const newIndex = breakpoints.findIndex((bp) => width <= bp)
      setIndex(newIndex === -1 ? breakpoints.length : newIndex)
    }

    updateIndex()
    window.addEventListener("resize", updateIndex)
    return () => window.removeEventListener("resize", updateIndex)
  }, [breakpoints])

  return index
}
