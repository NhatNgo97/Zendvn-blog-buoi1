import "../Main/main.css";
import "../Bootstrap/bootstrap-tcl.css";
import "./main-title.css";

function MainTitle({ text }) {
  return (
    <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
      <h2>{text}</h2>
      <a href="/" className="btn btn-default">
        View More
      </a>
    </div>
  );
}

export default MainTitle;
