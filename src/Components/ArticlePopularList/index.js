import "./ArticlePopularList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Article from "../Article";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";

function ArticlePopularList() {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <MainTitle text="Popular Articles" />
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
