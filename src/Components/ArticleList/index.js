import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Button from "../Shared/Button/Button";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import clx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getArticleRegularListAsyncAction } from "../../store/post/action";

function ArticleList({ pageType }) {
  const dispatch = useDispatch();
  const classes = clx("tcl-row", { "tcl-jc-center": pageType === "search" });
  const { articleList, page, totalPages } = useSelector(
    (state) => state.Post.articleRegular
  );
  const [isLoading, setIsLoading] = useState(false);
  async function handleLoadMore() {
    setIsLoading(true);
    await dispatch(getArticleRegularListAsyncAction({ page }));
    setIsLoading(false);
  }
  const hasMorePage = page < totalPages;
  if (pageType === "search") {
    return (
      <div className="articles-list section">
        <div className={classes}>
          {articleList.map((a) => (
            <div key={a.id} className="tcl-col-12 tcl-col-md-8">
              <Article article={a} isStyleCard={true} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle btnLabel="View More">Aritlce List</MainTitle>

        <div className={classes}>
          {articleList.map((a) => (
            <div key={a.id} className="tcl-col-12 tcl-col-md-6">
              <Article isAuthorNameIncluded={true} isStyleCard article={a} />
            </div>
          ))}
        </div>
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
  );
}

export default ArticleList;
