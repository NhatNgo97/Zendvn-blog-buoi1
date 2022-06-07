import "./ArticlePopularList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Article from "../Article";

function ArticlePopularList() {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>Popular Articles</h2>
          <a href="#" className="btn btn-default">
            View More
          </a>
        </div>

        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <Article listType="popular" />
              </div>

              <div className="popular-news__list--card">
                <Article listType="popular" />
              </div>
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <Article listType="popular" isStyleRow={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopularList;
