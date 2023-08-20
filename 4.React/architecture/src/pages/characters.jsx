import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useState, useRef, useCallback } from "react"

function Characters() {
  const [page, setPage] = useState(1)

  const {
    loading,
    error,
    data,
    hasMore
  } = useFetch(page,"character")

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
      <h2>Characters</h2>
      <ol>
        {data.map((character, index) => 
          {
            if(data.length - 3 === index + 1) {
              return <li ref={lastNodeRef} key={character.id}><Link to={String(character.id)}>{character.name}</Link></li>
            } else {
              return <li key={character.id}><Link to={String(character.id)}>{character.name}</Link></li>
            }
          }
        )}
      </ol>
      {loading && <div>loading...</div>}
      {error && <div>ERROR!</div>}
    </div>
  )
}

export default Characters
