import characters from "../assets/characters.json"
import { Link } from "react-router-dom"

function Characters() {
  return (
    <div>
      <h2>Characters</h2>
      <ol>
        {characters.map((character)=>(
          <li key={character.id}>
            <Link to={String(character.id)}>{character.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Characters
