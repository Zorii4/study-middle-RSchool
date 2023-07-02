import { useEffect, useState } from "react"
import axios from "axios"

export function useFetch(url) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getData(url)
  }, [])

  async function getData(url, params) {
    try {
      setIsLoading(true)
      const { data } = await axios.get(url, params)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error)
    }
  }

  function refetch(params) {
    getData(url, params)
  }

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}
