import { useParams } from "react-router-dom"
import { useFetchById } from "../hooks/useFetchById"

function Episodes() {
  const params = useParams()
  const {loading, error, data} = useFetchById("episode", Number(params.id))

  if(loading) {return <div>loading...</div>}
  if(error) {return <div>ERROR!</div>}

  return (
    <div>
      <h1>{data.name}</h1>
      <div className="info-wrapper">
          <div><span className="bold-wrapper">Air Date: </span>{data.air_date}</div>
          <div><span className="bold-wrapper">Episode: </span>{data.episode}</div>
        </div>
      </div>
  )
}

export default Episodes