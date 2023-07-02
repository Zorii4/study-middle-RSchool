import { useState } from "react"

export function useLocalStorage(value) {
  const [token, setToken] = useState(value)

  function setItem(str) {
    localStorage.setItem("key", str)
    setToken(str)
  }

  function removeItem() {
    localStorage.removeItem("key")
    setToken()
  }

  return [token, { setItem, removeItem }]
}
