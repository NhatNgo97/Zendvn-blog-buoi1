import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import PrimaryButton from "../Shared/Button/PrimaryButton";

function ArticleList() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>News List</h2>
          <a href="#" className="btn btn-default">
            View More
          </a>
        </div>

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
