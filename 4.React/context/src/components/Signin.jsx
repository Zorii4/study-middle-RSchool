import { useState } from "react"
import TextInput from "./TextInput"

const Signin = ({ onSubmit }) => {
  const [value, setValue] = useState({ name: "" })

  const handleChange = ({ target }) => {
    setValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  return (
    <div className="login-container"> 
      <div className="wrapper">
        <form
          onChange={handleChange}
          onSubmit={(e) => onSubmit(e, value)}
        >
          <TextInput
            name="name"
            type="text"
            label="Login"
            placeholder="login"
            description="Введите ваш login"
            radius="md"
          />
          <button
            type="submit"
            className="submit-btn"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signin
