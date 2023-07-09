const RadioInput = (props) => {
  return (
    <div className="radio-container">
      <div className="radio-wrapper">
        <input
          type="radio"
          name={props.name}
          id={props.label}
          value={props.value}
        />
      </div>
      <div>
        <label htmlFor={props.label}>{props.label}</label>
      </div>
    </div>
  )
}

export default RadioInput
