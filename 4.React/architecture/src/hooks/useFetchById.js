import { useEffect, useState } from "react"
import axios from "axios"

export function useFetchById(name, id) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios.get(`https://rickandmortyapi.com/api/${name}/${id}`).then((res) => {
      setData(res.data)
      setLoading(false)
    })
    .catch(e => {
      setError(true)
      console.error(e)
    })
  },[id, name]) 

  return {
    loading,
    error,
    data,
  }
}