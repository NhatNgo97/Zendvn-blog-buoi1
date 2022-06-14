import "../Main/main.css";
import "../Bootstrap/bootstrap-tcl.css";
import "./main-title.css";
import Button from "../Button/Button";

function MainTitle({ text, isIncludeButton }) {
  return (
    <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
      <h2>{text}</h2>
      {isIncludeButton && <Button type="title" text="More" />}
    </div>
  );
}

export default MainTitle;
