import { useParams } from "react-router-dom"
import { useFetchById } from "../hooks/useFetchById"

function Location() {
  const params = useParams()
  const {loading, error, data} = useFetchById("location", Number(params.id))

  if(loading) {return <div>loading...</div>}
  if(error) {return <div>ERROR!</div>}

  return (
    <div>
      <h1>{data.name}</h1>
      <div className="info-wrapper">
          <div><span className="bold-wrapper">Type: </span>{data.type}</div>
          <div><span className="bold-wrapper">Dimension: </span>{data.dimension}</div>
        </div>
      </div>
  )
}

export default Location