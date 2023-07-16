import { NavLink, Outlet } from "react-router-dom"

function Main() {
  return (
    <div>
      <h1>Hello! Make your choise! =)</h1>
      <ul>
        <li><NavLink to="/characters">Characters</NavLink></li>
        <li><NavLink to="/locations">Locations</NavLink></li>
        <li><NavLink to="/episodes">Episodes</NavLink></li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Main
