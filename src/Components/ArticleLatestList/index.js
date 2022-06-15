import Article from "../Article/index";
import "./ArticleLatestList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import Thumbnail from "../../assets/img/blog-1.jpg";
import Avatar from "../../assets/img/john-doe.png";

function ArticleLatestList() {
  //JSON placeholder
  const article = {
    id: 1,
    thumbnail: Thumbnail,
    categories: ["News", "News"],
    views: 10000,
    title: "Only Someone Who's Seen The Mummy Will Pass This",
    description:
      "Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…",
    author: {
      name: "John Doe",
      img: Avatar,
    },
    datetime: {
      date: "June 02, 2020",
      time: "1 min",
    },
  };

  //list of article which is usually fetched from an API.
  const articleList = [article, article, article];

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle text="Latest Articles" />
        <div className="latest-news__list spacing">
          {articleList.map((a) => (
            <div key={Math.random(0, 1)} className="latest-news__card">
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
