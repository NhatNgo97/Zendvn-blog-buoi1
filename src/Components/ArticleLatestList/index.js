import Article from "../Article/index";
import "./ArticleLatestList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
function ArticleLatestList() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <div className="main-title spacing">
          <h2>Latest Articles</h2>
        </div>
        <div className="latest-news__list spacing">
          <div className="latest-news__card">
            <Article listType="latest" />
          </div>
          <div className="latest-news__card">
            <Article listType="latest" />
          </div>
          <div className="latest-news__card">
            <Article listType="latest" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLatestList;
