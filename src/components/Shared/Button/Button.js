import { ReactComponent as RotatingIcon } from "../../../assets/img/rotatingIcon.svg";
import "./button.css";
import { useState } from "react";

function Button({ type, text }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
  }

  if (type === "primary") {
    return (
      <div className="text-center">
        <button
          onClick={handleClick}
          className="btn btn-primary btn-size-large"
        >
          {isLoading && <RotatingIcon />}
          {text}
        </button>
      </div>
    );
  } else if (type === "title") {
    return (
      <a href="/" className="btn btn-default">
        {text}
      </a>
    );
  } else if (type === "tag") {
    return (
      <a href="/post-detail" className="btn btn-category">
        {text}
      </a>
    );
  }
  return (
    <div className="text-center">
      <button onClick={handleClick} className="btn btn-primary btn-size-large">
        {isLoading && <RotatingIcon />}
        {text}
      </button>
    </div>
  );
}

export default Button;
