import { useWindowScroll } from "./useWindowScroll"

function Demo() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <div className="info">
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  )
}

export default Demo
