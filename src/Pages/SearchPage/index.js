import ArticleList from "../../Components/ArticleList";
import "../../Components/Shared/Bootstrap/bootstrap-tcl.css";
import MainTitle from "../../Components/Shared/MainTitle/MainTitle";
import { getQuerryString } from "../../helper";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSearchArticleListAsyncAction } from "../../store/post/action";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryString = getQuerryString("q");

  useEffect(() => {
    dispatch(
      getSearchArticleListAsyncAction({ keyword: queryString, page: 0 })
    );
    console.log("dispatch at page");
  }, [queryString]);

  return (
    <div className="tcl-container">
      <MainTitle type="search">4 Results found for "{queryString}"</MainTitle>
      <ArticleList pageType="search" />;
    </div>
  );
}

export default SearchPage;
