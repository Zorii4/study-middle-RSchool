import { useParams } from "react-router-dom"
import characters from "../assets/characters.json"

function Character() {
  const params = useParams()
  const currentChar = characters.find((char) => char.id === Number(params.id))

  return (
    <div>
      <div className="info-wrapper">
        <img src={currentChar.image} alt="char_img" />
        <div>
          <h1>{currentChar.name}</h1>
          <div><span className="bold-wrapper">Gender: </span>{currentChar.gender}</div>
          <div><span className="bold-wrapper">Species: </span>{currentChar.species}</div>
          <div><span className="bold-wrapper">Status: </span>{currentChar.status}</div>
          {currentChar.type && <div><span className="bold-wrapper">Type: </span>{currentChar.type}</div>}
        </div>
      </div>
    </div>
  )
}

export default Character