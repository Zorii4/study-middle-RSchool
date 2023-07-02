import { useRef, useState, useEffect } from "react"

export function useHover() {
  const [hovered, setHovered] = useState(false)

  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", () => setHovered(true))
      ref.current.addEventListener("mouseleave", () => setHovered(false))

      return () => {
        ref.current.removeEventLisener("mouseenter", () => setHovered(true))
        ref.current.removeEventLisener("mouseleave", () => setHovered(false))
      }
    }
  }, [])

  return {
    ref,
    hovered,
  }
}
