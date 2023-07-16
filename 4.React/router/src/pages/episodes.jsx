import episodes from "../assets/episode.json"
import { Link } from "react-router-dom"

function Episodes() {
  return (
    <div>
      <h2>Episodes</h2>
      <ol>
        {episodes.map((ep)=>(
          <li key={ep.id}>
            <Link to={String(ep.id)}>{ep.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Episodes