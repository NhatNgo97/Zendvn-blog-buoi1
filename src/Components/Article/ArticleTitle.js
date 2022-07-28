import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function ArtilceTitle({ title, slugLink }) {
  return (
    <h2 className="article-item__title">
      <Link to={slugLink}>{parse(title)}</Link>
    </h2>
  );
}
