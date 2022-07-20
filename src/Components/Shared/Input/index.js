import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import "./input.css";
import cls from "classnames";
import SearchLogo from "../../../assets/img/search-logo.svg";

function Input({ className, type = "text", icon, label, error, ...restProps }) {
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
    <div
      className={cls("form-control", {
        "form-control__has-error": error,
      })}
    >
      {label && <label>{label}</label>}
      <div className="form-control__input">
        {icon && <img src={icon} alt="icon" />}
        {type === "password" && localType === "password" && (
          <EyeOutlined
            className="toggle-password"
            onClick={handlePasswordHidden}
          />
        )}
        {type === "password" && localType === "text" && (
          <EyeInvisibleOutlined
            className="toggle-password"
            onClick={handlePasswordHidden}
          />
        )}
        <input className={classes} {...restProps} type={localType} />
      </div>

      {error && <span className="form-control__error">{error}</span>}
    </div>
  );
}

export default Input;
