import Article from "../Article/index";
import "./ArticleLatestList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import Thumbnail from "../../assets/img/blog-1.jpg";
import Avatar from "../../assets/img/john-doe.png";
import { useSelector } from "react-redux";

function ArticleLatestList() {
  const postList = useSelector((state) => state.Post.articleLatest).slice(0, 3);

  if (postList === []) return <div></div>;
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Latest Articles</MainTitle>
        <div className="latest-news__list spacing">
          {postList.map((a) => (
            <div key={a.id} className="latest-news__card">
              <Article
                isAuthorAvatarIncluded={true}
                isAuthorNameIncluded={true}
                article={a}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatestList;
