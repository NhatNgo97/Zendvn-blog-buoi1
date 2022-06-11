import { ReactComponent as ClockLogo } from "../../assets/img/clock-logo.svg";
import articleImg from "../../assets/img/blog-1.jpg";
import johnDoeImg from "../../assets/img/john-doe.png";
import "../Shared/Bootstrap/bootstrap-tcl.css";
import "./article.css";
import "../Shared/Main/main.css";

function Article({ listType, isStyleRow }) {
  if (listType === "latest") {
    return (
      <article className="article-item">
        <div className="article-item__thumbnail">
          <a href="/">
            <img src={articleImg} alt="assets/images/blog-1.jpg" />
          </a>
        </div>
        <div className="article-item__content">
          <h2 className="article-item__title">
            <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
              Only Someone Who's Seen The Mummy Will Pass This
            </a>
          </h2>
          <div className="article-item__info">
            <div className="article-item__author-image">
              <a aria-label="John Doe" href="/">
                <img src={johnDoeImg} alt="john-doe" />
              </a>
            </div>
            <div className="article-item__info-right">
              <div className="article-item__author-name">
                <a href="/">
                  <strong>John Doe</strong>
                </a>
              </div>
              <div className="article-item__datetime">
                <div className="date">June 02, 2020</div>
                <div className="time">
                  <ClockLogo />1 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  if (listType === "popular") {
    return (
      <article
        className={
          isStyleRow === true
            ? "article-item style-card style-row"
            : "article-item style-card"
        }
      >
        <div className="article-item__thumbnail">
          <a href="/post-detail">
            <img src={articleImg} alt="assets/images/blog-1.jpg" />
          </a>
        </div>
        <div className="article-item__content">
          <ul className="article-item__categories">
            <li>
              <a href="/post-detail" className="btn btn-category">
                News
              </a>
            </li>
            <li>
              <a href="/post-detail" className="btn btn-category">
                News
              </a>
            </li>
          </ul>
          <ul className="article-item__stats">
            <li>
              <i className="icons ion-ios-eye"></i>
              <span className="text">Views</span>
            </li>
          </ul>
          <h2 className="article-item__title">
            <a href="/post-detail">
              Only Someone Who's Seen The Mummy Will Pass This
            </a>
          </h2>
          <p className="article-item__desc">
            Markdown is a lightweight markup language with plain-text-formatting
            syntax. Its design allows it to…
          </p>
          <div className="article-item__info">
            <div className="article-item__author-image">
              <a aria-label="John Doe" href="/">
                <img src={johnDoeImg} alt="john-doe" />
              </a>
            </div>
            <div className="article-item__info-right">
              <div className="article-item__author-name">
                <a href="/">
                  <strong>John Doe</strong>
                </a>
              </div>
              <div className="article-item__datetime">
                <div className="date">June 02, 2020</div>
                <div className="time">
                  <ClockLogo />1 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  if (listType === "regular") {
    return (
      <article className="article-item style-card">
        <div className="article-item__thumbnail">
          <a href="/">
            <img src={articleImg} alt="assets/images/blog-1.jpg" />
          </a>
        </div>
        <div className="article-item__content">
          <h2 className="article-item__title">
            <a href="/post-detail.html">
              Only Someone Who's Seen The Mummy Will Pass This
            </a>
          </h2>
          <div className="article-item__info">
            <div className="article-item__info-right">
              <div className="article-item__author-name">
                <a href="/">
                  <strong>John Doe</strong>
                </a>
              </div>
              <div className="article-item__datetime">
                <div className="date">June 02, 2020</div>
                <div className="time">
                  <ClockLogo />1 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  if (listType === "search") {
    return (
      <article className="article-item style-card">
        <div className="article-item__thumbnail">
          <a href="/">
            <img src={articleImg} alt="assets/images/blog-1.jpg" />
          </a>
        </div>
        <div className="article-item__content">
          <ul className="article-item__categories">
            <li>
              <a href="/" className="btn btn-category">
                News
              </a>
            </li>
            <li>
              <a href="/" className="btn btn-category">
                News
              </a>
            </li>
          </ul>
          <h2 className="article-item__title">
            <a href="/">Only Someone Who's Seen The Mummy Will Pass This</a>
          </h2>
          <div className="article-item__info">
            <div className="article-item__info-right">
              <div className="article-item__author-name">
                <a href="/">
                  <strong>John Doe</strong>
                </a>
              </div>
              <div className="article-item__datetime">
                <div className="date">June 02, 2020</div>
                <div className="time">
                  <ClockLogo />1 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
