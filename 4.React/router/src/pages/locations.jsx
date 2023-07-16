import locations from "../assets/location.json"
import { Link } from "react-router-dom"

function Locations() {
  return (
    <div>
      <h2>Locations</h2>
      <ol>
        {locations.map((location)=>(
          <li key={location.id}>
            <Link to={String(location.id)}>{location.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Locations
