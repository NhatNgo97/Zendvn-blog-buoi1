import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import PrimaryButton from "../Shared/Button/PrimaryButton";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";

function ArticleList({ pageType }) {
  if (pageType === "search") {
    return (
      <div className="tcl-container">
        <div className="main-title main-title__search spacing">
          <h2>4 Results found for "search query"</h2>
          <div class="tcl-row tcl-jc-center">
            <div class="tcl-col-12 tcl-col-md-8">
              <Article listType="search" />
              <Article listType="search" />
              <Article listType="search" />
              <Article listType="search" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle text="News List" />

        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-md-6">
            <Article listType="regular" />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <Article listType="regular" />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <Article listType="regular" />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <Article listType="regular" />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <Article listType="regular" />
          </div>
          <div className="tcl-col-12 tcl-col-md-6">
            <Article listType="regular" />
          </div>
        </div>
      </div>
      <PrimaryButton text="Load More" />
    </div>
  );
}

export default ArticleList;
