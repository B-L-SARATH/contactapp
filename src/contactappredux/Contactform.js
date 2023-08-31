import Contactapp from "./Contactapp";
import "./contact.css";
const Contactform = ({
  size,
  label,
  index,
  type,
  value,
  pattern,
  max,
  setValue,
  name,
}) => {
  return (
    <div>
      <label htmlFor={"validationcustom" + index}>{label}</label>
      {type !== "textarea" && (
        <input
          type={type}
          className="form-control"
          id={"validationcustom" + index}
          placeholder={"Enter" + label}
          value={value}
          onChange={(e) => setValue(name, e.target.value)}
          pattern={pattern}
          maxLength={max}
          required
        />
      )}
      {type === "textarea" && (
        <textarea
          className="form-control"
          id={"validationcustom" + index}
          placeholder={"Enter" + label}
          value={value}
          onChange={(e) => setValue(name, e.target.value)}
          pattern={pattern}
          maxLength={max}
          required
        />
      )}
    </div>
  );
};

export default Contactform;
