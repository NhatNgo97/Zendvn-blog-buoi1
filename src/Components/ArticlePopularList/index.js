import "./ArticlePopularList.css";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import Article from "../Article";
import "../Shared/Main/main.css";
import MainTitle from "../Shared/MainTitle/MainTitle";
import { useSelector } from "react-redux";

function ArticlePopularList() {
  const postList = useSelector((state) => state.Post.artcilePopular).slice(
    0,
    3
  );

  if (postList.length === 0) return <div></div>;
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <MainTitle btnLabel="VIEW MORE">Aritlce Popular</MainTitle>
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {postList.slice(0, 2).map((a) => (
                <div key={a.id} className="popular-news__list--card">
                  <Article
                    isStatsIncluded={true}
                    isAuthorAvatarIncluded={true}
                    isAuthorNameIncluded={true}
                    isDescriptionIncluded={true}
                    isCategoryIncluded={true}
                    isStyleCard={true}
                    article={a}
                  />
                </div>
              ))}
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
                  article={postList[2]}
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
