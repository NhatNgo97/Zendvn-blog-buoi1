import { ReactComponent as RotatingIcon } from "../../../assets/img/rotatingIcon.svg";
import "./button.css";
import { useState } from "react";

function Button({ type, text, size, href, haveLoadingIcon }) {
  const [isLoading, setIsLoading] = useState(false);
  const classString = "btn btn-" + type + " btn-size-" + size;

  function handleClick() {
    setIsLoading(true);
  }

  if (type !== undefined) {
    return (
      <div className="text-center">
        <button href={href} onClick={handleClick} className={classString}>
          {haveLoadingIcon && isLoading && <RotatingIcon />}
          {text}
        </button>
      </div>
    );
  }
  return (
    <button href={href} className="btn btn-default">
      {text}
    </button>
  );
}

export default Button;
