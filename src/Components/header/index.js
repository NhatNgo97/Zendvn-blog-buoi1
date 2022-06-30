import SearchLogo from "../../assets/img/search-logo.svg";
import pageLogo from "../../assets/img/logo.png";
import "./header.css";
import Input from "../Shared/Input";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  function handleSearch() {
    console.log("abc");
    navigate("/search");
  }
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
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
          <div className="tcl-col-4">
            <form onSubmit={handleSearch} method="get">
              <Input type="search" placeholder="Search" icon={SearchLogo} />
            </form>
          </div>
          <div className="tcl-col-6">
            <div className="header-nav">
              <ul className="header-nav__lists">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Our Team</a>
                  <ul>
                    <li>
                      <a href="./login">Our Team 1</a>
                    </li>
                    <li>
                      <a href="/">Our Team 2</a>
                    </li>
                    <li>
                      <a href="/">Our Team 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Contact</a>
                  <ul>
                    <li>
                      <a href="/">Contact 1</a>
                    </li>
                    <li>
                      <a href="/">Contact 2</a>
                    </li>
                    <li>
                      <a href="/">Contact 3</a>
                      <ul>
                        <li>
                          <a href="/">Contact 11</a>
                        </li>
                        <li>
                          <a href="/">Contact 12</a>
                        </li>
                        <li>
                          <a href="/">Contact 13</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="header-nav__lists">
                <li className="user">
                  <Link to="/login">
                    <i className="icons ion-person"></i> Tài khoản
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
