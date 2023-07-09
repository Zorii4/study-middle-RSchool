import Signin from "./Signin"
import Signup from "./Signup"
import "./App.css"

function App() {
  const handleSubmit = (e, value) => {
    e.preventDefault()
    console.log(value)
  }

  return (
    <div className="container">
      <Signin onSubmit={handleSubmit} />
      <Signup onSubmit={handleSubmit} />
    </div>
  )
}

export default App
