import { useEffect, useState } from "react"
import axios from "axios"

export function useFetch(page, name) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios.get(`https://rickandmortyapi.com/api/${name}?page=${page}`).then((res) => {
      setData((prev) => {
        return [...prev, ...res.data.results]
      })
      setHasMore(res.data.info.pages !== page)
      setLoading(false)
    })
    .catch(e => {
      setError(true)
      console.error(e)
    })
  },[page, name]) 

  return {
    loading,
    error,
    data,
    hasMore
  }
}