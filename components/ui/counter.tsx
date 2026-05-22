"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  value: string
  className?: string
}

export function Counter({ value, className }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  
  // Extract number and suffix (e.g., "15+" -> 15, "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""))
  const suffix = value.replace(/[0-9]/g, "")

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = numericValue / (duration / 16) // ~60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setDisplayValue(numericValue)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    } else {
      // Reset when out of view so it re-animates
      setDisplayValue(0)
    }
  }, [isInView, numericValue])

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  )
}
