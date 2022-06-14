import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Button from "../Shared/Button/Button";
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
        <MainTitle text="News List" isIncludeButton={true} />

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
      <Button
        haveLoadingIcon={true}
        type="primary"
        text="Load More"
        size="large"
      />
    </div>
  );
}

export default ArticleList;
