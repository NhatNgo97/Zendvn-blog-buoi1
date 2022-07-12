import "../Shared/Bootstrap/bootstrap-tcl.css";
import "./Article.css";
import "../Shared/Main/main.css";
import cls from "classnames";
import ArtcileInfo from "./ArticleInfo";
import { ArticleThumb } from "./ArticleThumb";
import ArticleCategories from "./ArticleCategories";
import ArticleStats from "./ArticleStats";
import ArticleDesc from "./ArticleDesc";
import ArtilceTitle from "./ArticleTitle";

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

  const createdDate = article.createdDate;
  const author = article.author;
  const title = article.title;
  const categoriesId = article.categoriesId;
  const thumbnail = article.thumbnail;
  const slug = article.slug;
  const slugLink = "/post-detail/" + slug;
  const views = article.views;
  const desc = article.desc;
  return (
    <article {...restProps} className={classes}>
      <ArticleThumb thumbnail={thumbnail} slugLink={slugLink} />
      <div className="article-item__content">
        {isCategoryIncluded && (
          <ArticleCategories categoriesId={categoriesId} />
        )}
        {isStatsIncluded && <ArticleStats views={views} />}
        <ArtilceTitle title={title} slugLink={slugLink} />
        {isDescriptionIncluded && <ArticleDesc desc={desc} />}
        <ArtcileInfo
          isAuthorAvatarIncluded={isAuthorAvatarIncluded}
          isAuthorNameIncluded={isAuthorNameIncluded}
          author={author}
          createdDate={createdDate}
        />
      </div>
    </article>
  );
}

export default Article;
