import { useState, useEffect } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

function Input({ inputType, placeHolder, icon, className }) {
  const [passwordInputType, setPasswordInputType] = useState(inputType);

  function handlePasswordHidden() {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
    } else if (passwordInputType === "text") {
      setPasswordInputType("password");
    }
  }

  return (
    <>
      {icon && <img src={icon} alt="icon" />}
      {inputType === "password" && passwordInputType === "password" && (
        <EyeOutlined
          className="toggle-password"
          style={{ padding: "0.8rem 1vw" }}
          onClick={handlePasswordHidden}
        />
      )}
      {inputType === "password" && passwordInputType === "text" && (
        <EyeInvisibleOutlined
          className="toggle-password"
          style={{ padding: "0.8rem 1vw" }}
          onClick={handlePasswordHidden}
        />
      )}
      <input
        className={className}
        type={passwordInputType}
        placeholder={placeHolder}
      />
    </>
  );
}

export default Input;
