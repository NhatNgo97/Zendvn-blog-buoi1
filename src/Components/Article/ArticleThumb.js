import { Link } from "react-router-dom";

export function ArticleThumb({ thumbnail, slugLink }) {
  return (
    <div className="article-item__thumbnail">
      <Link to={slugLink}>
        <img src={thumbnail} alt="assets/images/blog-1.jpg" />
      </Link>
    </div>
  );
}
