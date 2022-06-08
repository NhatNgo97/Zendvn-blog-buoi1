import "./related-posts.css";
import { ReactComponent as ClockLogo } from "../../../assets/img/clock-logo.svg";

function RelatedPosts() {
  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      <article className="related-post__card">
        <a href="#" className="related-post__title">
          5 BBQ Recipes to Get Your Summer Started
        </a>
        <div className="related-post__info">
          <a className="related-post__author" href="#">
            John Smith
          </a>
          <p class="related-post__date">
            <ClockLogo />1 min ago
          </p>
        </div>
      </article>
      <article className="related-post__card">
        <a href="#" class="related-post__title">
          5 BBQ Recipes to Get Your Summer Started
        </a>
        <div className="related-post__info">
          <a className="related-post__author" href="#">
            John Smith
          </a>
          <p className="related-post__date">
            <ClockLogo />1 min ago
          </p>
        </div>
      </article>
      <article className="related-post__card">
        <a href="#" className="related-post__title">
          5 BBQ Recipes to Get Your Summer Started
        </a>
        <div className="related-post__info">
          <a className="related-post__author" href="#">
            John Smith
          </a>
          <p className="related-post__date">
            <ClockLogo />1 min ago
          </p>
        </div>
      </article>
    </div>
  );
}

export default RelatedPosts;
