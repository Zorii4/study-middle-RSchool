import { useParams } from "react-router-dom"
import { useFetchById } from "../hooks/useFetchById"

function Character() {
  const params = useParams()
  const {loading, error, data} = useFetchById("character", Number(params.id))
  
  if(loading) {return <div>loading...</div>}
  if(error) {return <div>ERROR!</div>}

  return (
    <div>
      <div className="info-wrapper">
        <img src={data.image} alt="char_img" />
        <div>
          <h1>{data.name}</h1>
          <div><span className="bold-wrapper">Gender: </span>{data.gender}</div>
          <div><span className="bold-wrapper">Species: </span>{data.species}</div>
          <div><span className="bold-wrapper">Status: </span>{data.status}</div>
          {data.type && <div><span className="bold-wrapper">Type: </span>{data.type}</div>}
        </div>
      </div>
    </div>
  )
}

export default Character