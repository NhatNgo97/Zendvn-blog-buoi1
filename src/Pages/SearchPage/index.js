import ArticleList from "../../Components/ArticleList";
import "../../Components/Shared/Bootstrap/bootstrap-tcl.css";
import MainTitle from "../../Components/Shared/MainTitle/MainTitle";
import { getQuerryString } from "../../helper";

function SearchPage() {
  const queryString = getQuerryString("q");
  return (
    <div className="tcl-container">
      <MainTitle type="search">4 Results found for "{queryString}"</MainTitle>
      <ArticleList pageType="search" />;
    </div>
  );
}

export default SearchPage;
