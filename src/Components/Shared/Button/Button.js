import { ReactComponent as RotatingIcon } from "../../../assets/img/rotatingIcon.svg";
import "./button.css";
import cls from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

function Button({
  type = "default",
  htmlType,
  children,
  size,
  isLoading = false,
  as = "button",
  loadingPos = "left",
  className,
  onClick,
  ...restProps
}) {
  const classes = cls("btn", className, {
    "btn-category": type === "category",
    "btn-default": type === "default",
    "btn-primary": type === "primary",
    "btn-size-large": size === "large",
  });

  function _onClick(event) {
    if (!isLoading) {
      onClick && onClick(event);
    }
  }

  const content = (
    <>
      {loadingPos === "left" && isLoading && <RotatingIcon />}
      {children}
      {loadingPos === "right" && isLoading && <RotatingIcon />}
    </>
  );

  const injectedProps = {
    className: classes,
    type: htmlType,
    onClick: _onClick,
    ...restProps,
  };

  if (as === "a") {
    return (
      <div className="text-center">
        <Link {...injectedProps}>{content}</Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      <button {...injectedProps}>{content}</button>
    </div>
  );
}

export default Button;
