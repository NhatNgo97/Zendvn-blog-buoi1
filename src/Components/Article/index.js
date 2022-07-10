import { ReactComponent as ClockLogo } from "../../assets/img/clock-logo.svg";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import "./Article.css";
import "../Shared/Main/main.css";
import Button from "../Shared/Button/Button";
import cls from "classnames";
import { Link } from "react-router-dom";
import Title from "antd/lib/skeleton/Title";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeVi from "dayjs/locale/vi";
import { DATE_TEMPLATE } from "../../contansts";
import ArtcileInfo from "./ArticleInfo";
import { ArticleThumb } from "./ArticleThumb";
import ArticleCategories from "./ArticleCategories";
import ArticleStats from "./ArticleStats";
import ArticleDesc from "./ArticleDesc";
import ArtilceTitle from "./ArticleTitle";

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
  const author = article.author;
  const title = article.title;
  const categories = article.categories;
  const thumbnail = article.thumbnail;
  const slug = article.slug;
  const slugLink = "/post-detail/" + slug;
  const views = article.views;
  const desc = article.desc;
  return (
    <article {...restProps} className={classes}>
      <ArticleThumb thumbnail={thumbnail} slugLink={slugLink} />
      <div className="article-item__content">
        {isCategoryIncluded && <ArticleCategories categories={categories} />}
        {isStatsIncluded && <ArticleStats views={views} />}
        <ArtilceTitle title={title} slugLink={slugLink} />
        {isDescriptionIncluded && <ArticleDesc desc={desc} />}
        <ArtcileInfo
          isAuthorAvatarIncluded={isAuthorAvatarIncluded}
          isAuthorNameIncluded={isAuthorNameIncluded}
          author={author}
          dateFormatted={dateFormatted}
          dateRelative={dateRelative}
        />
      </div>
    </article>
  );
}

export default Article;
