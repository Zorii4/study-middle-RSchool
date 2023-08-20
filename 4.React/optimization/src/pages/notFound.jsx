import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound() {
const nav = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      nav('/')
    }, 3000)
  })

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Going to Home...</p>
    </div>
  )
}

export default NotFound