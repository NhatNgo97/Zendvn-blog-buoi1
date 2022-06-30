import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import "./input.css";
import cls from "classnames";
import SearchLogo from "../../../assets/img/search-logo.svg";

function Input({ className, type = "text", icon, label, ...restProps }) {
  const [localType, setLocalType] = useState(type);

  function handlePasswordHidden() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }
  const classes = cls({ "input-search__input": type === "search" }, className);

  if (type === "search") {
    return (
      <div className="input-search">
        <img src={SearchLogo} alt="search-logo" />
        <input className={classes} type={localType} {...restProps} />
      </div>
    );
  }

  return (
    <div className="form-control">
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
      <input className={classes} {...restProps} type={localType} />
    </div>
  );
}

export default Input;
