import { useParams } from "react-router-dom"
import locations from "../assets/location.json"

function Location() {
  const params = useParams()
  const currentLoc = locations.find((loc) => loc.id === Number(params.id))

  return (
    <div>
      <h1>{currentLoc.name}</h1>
      <div className="info-wrapper">
          <div><span className="bold-wrapper">Type: </span>{currentLoc.type}</div>
          <div><span className="bold-wrapper">Dimension: </span>{currentLoc.dimension}</div>
        </div>
      </div>
  )
}

export default Location