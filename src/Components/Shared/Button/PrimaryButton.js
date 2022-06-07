import { ReactComponent as RotatingIcon } from "../../../assets/img/rotatingIcon.svg";
import "./button.css";

function PrimaryButton({ text }) {
  return (
    <div className="text-center">
      <button className="btn btn-primary btn-size-large">
        <RotatingIcon />
        {text}
      </button>
    </div>
  );
}

export default PrimaryButton;
