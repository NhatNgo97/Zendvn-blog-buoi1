import { Link } from "react-router-dom";
import pageLogo from "../../assets/img/logo.png";

function HeaderLogo() {
  return (
    <div className="tcl-col-2">
      <div className="header-logo">
        <Link to="/">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={pageLogo}
            alt="Go to homepage"
          />
        </Link>
      </div>
    </div>
  );
}

export default HeaderLogo;
