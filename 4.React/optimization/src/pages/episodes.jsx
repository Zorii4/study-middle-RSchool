import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { useState, useRef, useCallback } from "react"

function Episodes() {
  const [page, setPage] = useState(1)

  const {
    loading,
    error,
    data,
    hasMore
  } = useFetch(page,"episode")

  const observer = useRef()

  const lastNodeRef = useCallback((node) => {
    if(loading) return
    if(observer.current) {
      observer.current.disconnect()
    }

    observer.current = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1)
      }
    })

    if(node) {
      observer.current.observe(node)
    }
  },[loading, hasMore])

  return (
    <div className="list-wrapper">
      <h2>Episodes</h2>
      <ol>
        {data.map((ep, index) => 
          {
            if(data.length - 3 === index + 1) {
              return <li ref={lastNodeRef} key={ep.id}><Link to={String(ep.id)}>{ep.name}</Link></li>
            } else {
              return <li key={ep.id}><Link to={String(ep.id)}>{ep.name}</Link></li>
            }    
          }
        )}
      </ol>
      {loading && <div>loading...</div>}
      {error && <div>ERROR!</div>}
    </div>
  )
}

export default Episodes