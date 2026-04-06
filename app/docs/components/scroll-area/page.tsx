"use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { ScrollArea } from "@/app/components/ui/scroll-area"
import { ComponentCode } from "@/app/components/component-code"

export default function ScrollAreaDocsPage() {
  return (
    <div className="min-h-screen bg-background py-8 md:py-12 pr-8 md:pr-12">
      <div className="mx-auto max-w-3xl pl-8 md:pl-12">
        <h1 className="mb-4 text-5xl font-bold">Scroll Area</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>

        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            The Scroll Area component provides a custom-styled scrollable container.
            It uses native CSS scrollbar styling for maximum performance and compatibility while maintaining a unique neobrutalist aesthetic.
          </p>

          <ComponentCode 
            filename="scroll-area"
            tsCode={`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-auto", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ScrollArea.displayName = "ScrollArea"

const ScrollBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { orientation?: "vertical" | "horizontal" }
>(({ className, orientation = "vertical", ...props }, ref) => {
  return null
})
ScrollBar.displayName = "ScrollBar"

export { ScrollArea, ScrollBar }`}
            jsCode={`"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-auto", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ScrollArea.displayName = "ScrollArea"

const ScrollBar = React.forwardRef(
  ({ className, orientation = "vertical", ...props }, ref) => {
    return null
  }
)
ScrollBar.displayName = "ScrollBar"

export { ScrollArea, ScrollBar }`}
            usageTs={`import { ScrollArea } from "@/components/ui/scroll-area"

function MyComponent() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border-2 border-foreground p-4">
      <div className="space-y-4">
        <p>Long content here...</p>
      </div>
    </ScrollArea>
  )
}`}
            usageJs={`import { ScrollArea } from "@/components/ui/scroll-area"

function MyComponent() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border-2 border-foreground p-4">
      <div className="space-y-4">
        <p>Long content here...</p>
      </div>
    </ScrollArea>
  )
}`}
          />

          <h2 className="text-3xl font-bold mt-8 mb-4">Examples</h2>
          <div className="rounded-lg border-2 border-foreground p-6 neobrutalism-shadow space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Default</h3>
              <ScrollArea className="h-[200px] w-[350px] rounded-md border-2 border-foreground bg-primary text-primary-foreground p-4 neobrutalism-shadow">
                <div className="space-y-4">
                  <p>
                    Things is a collection of beautifully designed components built from scratch. Each component is carefully crafted to provide a great user experience while maintaining accessibility and customization options.
                  </p>
                  <p>
                    All components are built using React and Tailwind CSS, with no external dependencies. This ensures fast performance and easy integration into your projects.
                  </p>
                  <p>
                    The design system follows a neobrutalism aesthetic with bold borders, shadows, and clean typography. Every component is fully accessible and follows web standards.
                  </p>
                  <p>
                    You can use these components as building blocks for your applications, customizing them to fit your specific needs. The code is clean, well-documented, and easy to understand.
                  </p>
                </div>
              </ScrollArea>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">With Custom Height</h3>
              <ScrollArea className="h-[150px] w-full rounded-md border-2 border-foreground bg-background p-4">
                <div className="space-y-2">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t-2 border-foreground pt-8">
          <Link href="/docs/components/resizable">
            <Button variant="outline" size="lg">
              ← Resizable
            </Button>
          </Link>
          <Link href="/docs/components/sheet">
            <Button variant="outline" size="lg">
              Sheet →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
