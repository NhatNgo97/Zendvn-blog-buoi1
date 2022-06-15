import { ReactComponent as ClockLogo } from "../../assets/img/clock-logo.svg";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import "./Article.css";
import "../Shared/Main/main.css";
import Button from "../Shared/Button/Button";

/**
 *
 * @listType {string} paramasd
 * @returns
 */
function Article({
  listType,
  isStyleRow,
  isStyleCard,
  isDescriptionIncluded,
  isCategoryIncluded,
  isStatsIncluded,
  isAuthorAvatarIncluded,
  isAuthorNameIncluded,
  article,
  style,
}) {
  var articleClassName = "article-item";
  if (isStyleCard === true) {
    articleClassName = articleClassName + " style-card";
  }
  if (isStyleRow === true) {
    articleClassName = articleClassName + " style-row";
  }

  return (
    <article style={style} className={articleClassName}>
      <div className="article-item__thumbnail">
        <a href="/">
          <img src={article.thumbnail} alt="assets/images/blog-1.jpg" />
        </a>
      </div>
      <div className="article-item__content">
        {isCategoryIncluded && (
          <ul className="article-item__categories">
            {article.categories.map((a) => (
              <li key={Math.random(0, 1)}>
                <Button type="category" children={a} />
              </li> /// key should be a.id
            ))}
          </ul>
        )}
        {isStatsIncluded && (
          <ul className="article-item__stats">
            <li>
              <i className="icons ion-ios-eye"></i>
              <span className="text">{article.views + " views"}</span>
            </li>
          </ul>
        )}
        <h2 className="article-item__title">
          <a href="/">{article.title}</a>
        </h2>
        {isDescriptionIncluded && (
          <p className="article-item__desc">{article.description}</p>
        )}
        <div className="article-item__info">
          {isAuthorAvatarIncluded && (
            <div className="article-item__author-image">
              <a aria-label="John Doe" href="/">
                <img src={article.author.img} alt="john-doe" />
              </a>
            </div>
          )}
          <div className="article-item__info-right">
            {isAuthorNameIncluded && (
              <div className="article-item__author-name">
                <a href="/">
                  <strong>{article.author.name}</strong>
                </a>
              </div>
            )}
            <div className="article-item__datetime">
              <div className="date">{article.datetime.date}</div>
              <div className="time">
                <ClockLogo />
                {article.datetime.time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
