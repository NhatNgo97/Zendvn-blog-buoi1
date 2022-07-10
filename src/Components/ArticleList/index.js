import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Button from "../Shared/Button/Button";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import clx from "classnames";
import { useSelector } from "react-redux";

function ArticleList({ pageType }) {
  const classes = clx("tcl-row", { "tcl-jc-center": pageType === "search" });
  const postList = useSelector((state) => state.Post).slice(0, 6);

  if (pageType === "search") {
    return (
      <div className="articles-list section">
        <div className={classes}>
          {postList.map((a) => (
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
          {postList.map((a) => (
            <div key={a.id} className="tcl-col-12 tcl-col-md-6">
              <Article isAuthorNameIncluded={true} isStyleCard article={a} />
            </div>
          ))}
        </div>
      </div>
      <Button type="primary" children="Load More" size="large" />
    </div>
  );
}

export default ArticleList;
