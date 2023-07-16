import { useParams } from "react-router-dom"
import episodes from "../assets/episode.json"

function Episodes() {
  const params = useParams()
  const currentEp = episodes.find((ep) => ep.id === Number(params.id))

  return (
    <div>
      <h1>{currentEp.name}</h1>
      <div className="info-wrapper">
          <div><span className="bold-wrapper">Air Date: </span>{currentEp.air_date}</div>
          <div><span className="bold-wrapper">Episode: </span>{currentEp.episode}</div>
        </div>
      </div>
  )
}

export default Episodes