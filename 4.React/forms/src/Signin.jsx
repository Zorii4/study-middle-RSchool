import { useState } from "react"
import TextInput from "./TextInput"

const Signin = ({ onSubmit }) => {
  const [value, setValue] = useState({ email: "", password: "" })

  const handleChange = ({ target }) => {
    setValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  return (
    <div className="wrapper">
      <form
        onChange={handleChange}
        onSubmit={(e) => onSubmit(e, value)}
      >
        <TextInput
          name="email"
          type="email"
          label="E-mail"
          placeholder="e-mail"
          description="Введите ваш e-mail"
          radius="md"
        />
        <TextInput
          name="password"
          type="password"
          label="Password"
          placeholder="password"
          description="Введите пароль"
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
  )
}

export default Signin
