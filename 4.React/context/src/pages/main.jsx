import { NavLink, Outlet } from "react-router-dom"
import { AuthStatus } from "../components/AuthStatus"

function Main() {
  return (
    <div>
      <AuthStatus />
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
