import { Routes, Route } from "react-router-dom"
import "./App.css"
import Main from "./pages/main"
import NotFound from "./pages/notFound"
import Login from "./pages/login"
import { AuthProvider } from "./context/AuthProvider"
import { PrivateRoute } from "./components/PrivateRoute"
import { Component } from "./components/DynamicComonent"

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route element={<PrivateRoute><Main /></PrivateRoute>}>
            <Route path="/characters">
              <Route index element={<Component name={"characters"} />}/>
              <Route path=":id" element={<Component name={"character"} />} />  
            </Route>
            <Route path="/locations">
              <Route index element={<Component name={"locations"} />}/>
              <Route path=":id" element={<Component name={"location"} />} />  
            </Route>
            <Route path="/episodes">
              <Route index element={<Component name={"episodes"} />}/>
              <Route path=":id" element={<Component name={"episode"} />} />  
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
