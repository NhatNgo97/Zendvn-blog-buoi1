import SearchLogo from "../../assets/img/search-logo.svg";
import pageLogo from "../../assets/img/logo.png";
import "./header.css";
import Input from "../Shared/Input";

function Header() {
  return (
    <header id="header">
      <div className="tcl-container">
        <div className="tcl-row tcl-no-gutters header">
          <div className="tcl-col-2">
            <div className="header-logo">
              <a href="/">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={pageLogo}
                  alt="Go to homepage"
                />
              </a>
            </div>
          </div>
          <div className="tcl-col-4">
            <form action="/search.html" method="get">
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
                  <a href="login">
                    <i className="icons ion-person"></i> Tài khoản
                  </a>
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
