import "./ArticlePopularList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Article from "../Article";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import Thumbnail from "../../assets/img/blog-1.jpg";
import Avatar from "../../assets/img/john-doe.png";

function ArticlePopularList() {
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
  console.log(article.thumbnail);

  //list of article which is usually fetched from an API.
  const articleList = [article, article, article];

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <MainTitle text="Popular Articles" isIncludeButton={true} />
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <Article
                  isStatsIncluded={true}
                  isAuthorAvatarIncluded={true}
                  isAuthorNameIncluded={true}
                  isDescriptionIncluded={true}
                  isCategoryIncluded={true}
                  isStyleCard={true}
                  article={article}
                />
              </div>
              <div className="popular-news__list--card">
                <Article
                  isStatsIncluded={true}
                  isAuthorAvatarIncluded={true}
                  isAuthorNameIncluded={true}
                  isDescriptionIncluded={true}
                  isCategoryIncluded={true}
                  isStyleCard={true}
                  article={article}
                />
              </div>
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <div className="popular-news__list--card">
                <Article
                  isStatsIncluded={true}
                  isAuthorAvatarIncluded={true}
                  isAuthorNameIncluded={true}
                  isDescriptionIncluded={true}
                  isCategoryIncluded={true}
                  isStyleCard={true}
                  isStyleRow={true}
                  article={article}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopularList;
