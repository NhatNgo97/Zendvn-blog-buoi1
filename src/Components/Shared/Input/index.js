import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

function Input({ type = "text", icon, label, ...restProps }) {
  const [localType, setLocalType] = useState(type);

  function handlePasswordHidden() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }

  return (
    <>
      {label && <label>{label}</label>}
      {icon && <img src={icon} alt="icon" />}
      {type === "password" && localType === "password" && (
        <EyeOutlined
          className="toggle-password"
          style={{ padding: "0.8rem 1vw" }}
          onClick={handlePasswordHidden}
        />
      )}
      {type === "password" && localType === "text" && (
        <EyeInvisibleOutlined
          className="toggle-password"
          style={{ padding: "0.8rem 1vw" }}
          onClick={handlePasswordHidden}
        />
      )}
      <input {...restProps} type={localType} />
    </>
  );
}

export default Input;
