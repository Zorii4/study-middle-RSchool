import { Routes, Route } from "react-router-dom"
import "./App.css"
import Main from "./pages/main"
import Characters from "./pages/characters"
import Character from "./pages/character"
import Locations from "./pages/locations"
import Location from "./pages/location"
import Episodes from "./pages/episodes"
import Episode from "./pages/episode"
import NotFound from "./pages/notFound"
import Login from "./pages/login"
import { AuthProvider } from "./context/AuthProvider"
import { PrivateRoute } from "./components/PrivateRoute"

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route element={<PrivateRoute><Main /></PrivateRoute>}>
            <Route path="/characters">
              <Route index element={<Characters />}/>
              <Route path=":id" element={<Character />} />  
            </Route>
            <Route path="/locations">
              <Route index element={<Locations />}/>
              <Route path=":id" element={<Location />} />  
            </Route>
            <Route path="/episodes">
              <Route index element={<Episodes />}/>
              <Route path=":id" element={<Episode />} />  
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
