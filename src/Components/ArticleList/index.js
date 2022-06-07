import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import PrimaryButton from "../Shared/Button/PrimaryButton";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";

function ArticleList() {
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
