import Article from "../Article";
import "./ArticleList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Button from "../Shared/Button/Button";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import Thumbnail from "../../assets/img/blog-1.jpg";
import Avatar from "../../assets/img/john-doe.png";

function ArticleList({ pageType }) {
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
  const articleList = [article, article, article, article, article, article];
  if (pageType === "search") {
    return (
      <div className="tcl-container">
        <div className="main-title main-title__search spacing">
          <h2>4 Results found for "search query"</h2>
          <div className="tcl-row tcl-jc-center">
            {articleList.map((a) => (
              <div key={Math.random(0, 1)} className="tcl-col-12 tcl-col-md-8">
                <Article article={article} isStyleCard={true} />
              </div>
            ))}
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
          {articleList.map((a) => (
            <div key={Math.random(0, 1)} className="tcl-col-12 tcl-col-md-6">
              <Article
                isAuthorNameIncluded={true}
                isStyleCard
                article={article}
              />
            </div>
          ))}
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
