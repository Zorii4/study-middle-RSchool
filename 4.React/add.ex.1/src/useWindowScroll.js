import { useEffect, useState } from "react"

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })

  function useWindowEvent(type, listener) {
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener(type, listener)
        return () => window.removeEventListener(type, listener)
      }
    }, [type, listener])
  }

  useWindowEvent("scroll", changePosition)

  function changePosition() {
    setScroll({ x: window.scrollX, y: window.scrollY })
  }

  function scrollTo(coord) {
    window.scrollTo({ top: coord.y, behavior: "smooth" })
  }

  return [scroll, scrollTo]
}
