"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function AnimatedText({ text, className, speed = 50, delay = 300 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    // Add initial delay before starting the typing animation
    const initialDelay = setTimeout(() => {
      setStartAnimation(true)
    }, delay)

    return () => clearTimeout(initialDelay)
  }, [delay])

  useEffect(() => {
    if (startAnimation && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, startAnimation])

  return (
    <span className={cn("", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
