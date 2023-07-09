const TextInput = ({ radius = "sm", size = "sm", ...props }) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <div className="description">{props.description}</div>
      <div className="icon-wrapper">
        <div className="icon">{props.icon}</div>
        <input
          name={props.name}
          type={props.type}
          id={props.label}
          placeholder={props.placeholder}
          disabled={props.disabled}
          className={
            `text-field radius-${radius} size-${size}` +
            " " +
            (props.error ? "is-invalid" : "")
          }
          style={props.icon && { paddingLeft: "2rem" }}
        />
        <div className="error">{props.error}</div>
      </div>
    </>
  )
}

export default TextInput
