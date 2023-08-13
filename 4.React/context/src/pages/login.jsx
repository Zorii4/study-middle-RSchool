import { useLocation, useNavigate } from "react-router-dom"
import Signin from "../components/Signin"
import { useAuth } from "../context/AuthProvider"

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const from = location.state?.from || "/"

  const handleSubmit = (e, value) => {
    e.preventDefault()
    auth.signIn(value.name , () => {
      navigate(from, {
        replace: true
      })
    })
  }

  return (
    <Signin onSubmit={handleSubmit} />
  )
}

export default Login