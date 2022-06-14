import Article from "../Article/index";
import "./ArticleLatestList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";

function ArticleLatestList() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle text="Latest Articles" />
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
