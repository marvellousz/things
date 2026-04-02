"use client"

import * as React from "react"

interface InViewProps {
  children: (inView: boolean) => React.ReactNode
  triggerOnce?: boolean
  margin?: string
}

export function InView({ children, triggerOnce = true, margin = "0px 0px -100px 0px" }: InViewProps) {
  const [inView, setInView] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      { rootMargin: margin }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [triggerOnce, margin])

  return (
    <div ref={ref}>
      {children(inView)}
    </div>
  )
}
