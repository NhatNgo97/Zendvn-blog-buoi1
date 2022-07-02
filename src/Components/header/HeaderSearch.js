import Input from "../Shared/Input";
import SearchLogo from "../../assets/img/search-logo.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function HeaderSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(navigate);
  const [queryString, setQueryString] = useState("");

  function handleOnChange(e) {
    setQueryString(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!queryString) {
      return;
    }
    const queryStringURI = encodeURIComponent(queryString);
    navigate("./search?q=" + queryStringURI);
  }

  return (
    <div className="tcl-col-4">
      <form onSubmit={handleSubmit} method="get">
        <Input
          onChange={handleOnChange}
          value={queryString}
          type="search"
          placeholder="Search"
          icon={SearchLogo}
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
