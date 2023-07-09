import { useState } from "react"
import TextInput from "./TextInput"
import RadioInput from "./RadioInput"
import { IconAt } from "@tabler/icons-react"

const Signup = ({ onSubmit }) => {
  const [value, setValue] = useState({
    name: "",
    nickName: "",
    email: "",
    sex: "",
    password: "",
    confirmPassword: "",
  })

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
          name="name"
          type="text"
          label="Name"
          placeholder="Your name"
          radius="md"
        />
        <TextInput
          name="nickName"
          type="text"
          label="Nickname"
          placeholder="Your Nickname"
          radius="md"
          icon={<IconAt size="0.8rem" />}
        />
        <TextInput
          name="email"
          type="email"
          label="E-mail"
          placeholder="Your e-mail"
          radius="md"
        />
        <div className="radio-container">
          <RadioInput
            name="sex"
            label="male"
            value="male"
          />
          <RadioInput
            name="sex"
            label="female"
            value="female"
          />
        </div>
        <TextInput
          name="password"
          type="password"
          label="Password"
          placeholder="password"
          radius="md"
        />
        <TextInput
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="password"
          radius="md"
        />
        <button
          type="submit"
          className="submit-btn"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default Signup
