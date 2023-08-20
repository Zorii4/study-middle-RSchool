import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider ({children}) {
  const [user, setUser] = useState(localStorage.getItem("user") || null)

  const signIn = (newUser, cb) => {
    setUser(newUser)
    localStorage.setItem("user", newUser)
    cb()
  }

  const signOut = (cb) => {
    setUser(null)
    localStorage.removeItem("user")
    cb()
  }

  const value = {
    user,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}