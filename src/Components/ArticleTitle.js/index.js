import { ReactComponent as ClockLogo } from "../../assets/img/clock-logo.svg";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import "./Article.css";
import "../Shared/Main/main.css";
import Button from "../Shared/Button/Button";
import cls from "classnames";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeVi from "dayjs/locale/vi";
import { DATE_TEMPLATE } from "../../contansts";

dayjs.locale(localeVi);
dayjs.extend(relativeTime);

function Article({
  isStyleRow,
  isStyleCard,
  isDescriptionIncluded,
  isCategoryIncluded,
  isStatsIncluded,
  isAuthorAvatarIncluded,
  isAuthorNameIncluded,
  article,
  ...restProps
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard === true,
    "style-row": isStyleRow === true,
  });

  const createdDateObj = dayjs(article.createdDate);
  const dateFormatted = createdDateObj.format(DATE_TEMPLATE);
  const dateRelative = createdDateObj.fromNow();
  return (
    <article {...restProps} className={classes}>
      <div className="article-item__thumbnail">
        <Link to={"post-detail/" + article.slug}>
          <img src={article.thumbnail} alt="assets/images/blog-1.jpg" />
        </Link>
      </div>
      <div className="article-item__content">
        {isCategoryIncluded && (
          <ul className="article-item__categories">
            {article.categories.map((a) => (
              <li key={Math.random()}>
                <Button type="category" children={a} />
              </li> /// key should be a.id
            ))}
          </ul>
        )}
        {isStatsIncluded && (
          <ul className="article-item__stats">
            <li>
              <i className="icons ion-ios-eye"></i>
              <span className="text">{article.view_count + " views"}</span>
            </li>
          </ul>
        )}
        <h2 className="article-item__title">
          <Link to={"post-detail/" + article.slug}>{article.title}</Link>
        </h2>
        {isDescriptionIncluded && (
          <p className="article-item__desc">{article.excerpt.rendered}</p>
        )}
        <div className="article-item__info">
          {isAuthorAvatarIncluded && (
            <div className="article-item__author-image">
              <a aria-label="John Doe" href="/">
                <img
                  src={
                    article.author.avatar
                      ? article.author.avatar
                      : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
                  }
                  alt="john-doe"
                />
              </a>
            </div>
          )}
          <div className="article-item__info-right">
            {isAuthorNameIncluded && (
              <div className="article-item__author-name">
                <a href="/">
                  <strong>{article.author.nickname}</strong>
                </a>
              </div>
            )}
            <div className="article-item__datetime">
              <div className="date">{dateFormatted}</div>
              &nbsp;
              <div className="time">
                <ClockLogo />
                &nbsp;
                {dateRelative}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
