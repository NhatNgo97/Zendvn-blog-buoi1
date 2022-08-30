import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Button from "../Shared/Button/Button";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import clx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  getArticleRegularListAsyncAction,
  getArticleSeachListAction,
  getSearchArticleListAsyncAction,
} from "../../store/post/action";
import { getQuerryString } from "../../helper";
import { useParams } from "react-router-dom";
import useGetCategoryId from "../../hooks/useGetCategoryId";

function ArticleList({ pageType }) {
  const dispatch = useDispatch();
  const id = useGetCategoryId();
  const classes = clx("tcl-row", { "tcl-jc-center": pageType === "search" });
  const itemClasses = clx("tcl-col-12", {
    "tcl-col-md-8": pageType === "search",
    "tcl-col-md-6": pageType !== "search",
  });
  const { articleList, page, totalPages } = useSelector((state) => {
    return pageType === "search"
      ? state.Post.articleSearch
      : state.Post.articleRegular;
  });

  console.log("regular article page", pageType !== "search" && page);
  const [isLoading, setIsLoading] = useState(false);
  const queryString = getQuerryString("q");

  async function handleLoadMore() {
    setIsLoading(true);
    if (pageType === "search") {
      await dispatch(
        getSearchArticleListAsyncAction({
          keyword: queryString,
          page: page,
          categoryId: id,
        })
      );
    } else {
      await dispatch(getArticleRegularListAsyncAction({ page }));
    }
    setIsLoading(false);
  }
  const hasMorePage = page < totalPages;

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <div className={classes}>
          {articleList.map((a) => (
            <div key={a.id} className={itemClasses}>
              <Article
                article={a}
                isAuthorNameIncluded={true}
                isCategoryIncluded={pageType === "search"}
                isStyleCard={true}
              />
            </div>
          ))}
        </div>
        {hasMorePage && (
          <Button
            onClick={handleLoadMore}
            isLoading={isLoading}
            type="primary"
            children="Load More"
            size="large"
          />
        )}
      </div>
    </div>
  );
}

export default ArticleList;
