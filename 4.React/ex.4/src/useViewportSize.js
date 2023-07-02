import { useEffect, useState } from "react"

export function useViewportSize() {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  function useWindowEvent(type, listener, options) {
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener(type, listener, options)
        return () => window.removeEventListener(type, listener, options)
      }
    }, [type, listener])
  }

  useWindowEvent("resize", changeSize)

  function changeSize() {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }

  return { height, width }
}
