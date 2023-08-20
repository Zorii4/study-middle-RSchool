import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { Button } from '@mantine/core'

export function AuthStatus() {
  const auth = useAuth()
  const navigate = useNavigate()
  
  const handleSignOut = () => {
    auth.signOut(() => {
      navigate('/login')
    })
  }

  if (auth.user === null) {
    return <h1>You are not logged in</h1>
  }

  return (
    <div className="title-wrapper">
      <h1>Welcome {auth.user}!</h1>
      <Button color="teal" onClick={handleSignOut}>Sign out</Button>
    </div>
  )
}