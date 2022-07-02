import "../Main/main.css";
import "../Bootstrap/bootstrap-tcl.css";
import "./main-title.css";
import Button from "../Button/Button";
import cls from "classnames";

function MainTitle({ children, btnProps = {}, btnLabel, type }) {
  const classes = cls("main-title spacing", {
    "d-flex tcl-jc-between tcl-ais-center": btnLabel,
    "main-title__search": type === "search",
  });
  return (
    <div className={classes}>
      <h2>{children}</h2>
      {btnLabel && <Button {...btnProps}>{btnLabel}</Button>}
    </div>
  );
}

export default MainTitle;
