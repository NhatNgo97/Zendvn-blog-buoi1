import Article from "../../Components/Article";
import ArticleList from "../../Components/ArticleList";
import "../../Components/Shared/Bootstrap/bootstrap-tcl.css";

function SearchPage() {
  return <ArticleList pageType="search" />;
}

export default SearchPage;
