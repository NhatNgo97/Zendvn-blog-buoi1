import Input from "../Shared/Input";
import SearchLogo from "../../assets/img/search-logo.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function HeaderSearch() {
  const navigate = useNavigate();

  const [localQueryString, setLocalQueryString] = useState("");

  function handleOnChange(e) {
    setLocalQueryString(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!localQueryString) {
      return;
    }
    console.log("submit");

    const queryStringURI = encodeURIComponent(localQueryString);
    navigate("./search?q=" + queryStringURI);
  }

  return (
    <div className="tcl-col-4">
      <form onSubmit={handleSubmit} method="get">
        <Input
          onChange={handleOnChange}
          value={localQueryString}
          type="search"
          placeholder="Search"
          icon={SearchLogo}
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
