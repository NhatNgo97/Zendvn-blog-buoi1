import Comments from "../Comments/comments";
import CommentForm from "../Comments/conmentForm";
import Button from "../Shared/Button/Button";
import "./post-detail.css";
import PostAuthor from "./postAuthor/postAuthor";
import RelatedPosts from "./relatedPosts/relatedPosts";

function PostDetail() {
  return (
    <main className="post-detail">
      <div className="spacing"></div>

      <div className="post-detail__head">
        <div className="tcl-container">
          <h1 className="post-detail__title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h1>
          <ul className="post-detail__info">
            <li className="item author">
              By{" "}
              <a href="/">
                <strong>John Smith</strong>
              </a>
            </li>
            <li className="item date">May 15, 2021</li>
            <li className="item views">
              2 <i className="icons ion-ios-eye"></i>
            </li>
            <li className="item comments">
              20 <i className="icons ion-ios-chatbubble"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="spacing"></div>

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <div className="post-detail__content">
              <div className="thumbnail">
                <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
              </div>

              <div className="content-padding">
                <div className="rte">
                  <p>
                    Markdown is a lightweight markup language with
                    plain-text-formatting syntax. Its design allows it to be
                    converted to many output formats, but the original tool by
                    the same name only supports HTML. Markdown is often used to
                    format readme files, for writing messages in online
                    discussion forums, and to create rich text using a plain
                    text editor.
                  </p>
                  <h2>Emphasis</h2>
                  <p>
                    Emphasis, aka <i>italics</i>, with asterisks or{" "}
                    <u>underscores</u>.
                  </p>
                  <p>
                    Strong emphasis, aka bold, with <strong>asterisks</strong>{" "}
                    or <strong>underscores</strong>.
                  </p>
                  <p>
                    Strikethrough uses two tildes. <del>Scratch this</del>.
                  </p>
                  <h2>Code and Syntax Highlighting</h2>
                  <p>
                    Inline <code>code</code> has <code>back-ticks around</code>{" "}
                    it.
                  </p>
                  <p>
                    Blocks of code are either fenced by lines with three
                    back-ticks ```, or are indented with four spaces. I
                    recommend only using the fenced code blocks — they’re easier
                    and only they support syntax highlighting.
                  </p>

                  <h2>Blockquote</h2>
                  <blockquote>
                    Blockquotes are very handy in email to emulate reply text.
                    This line is part of the same quote.
                  </blockquote>
                  <h2>List</h2>
                  <ol>
                    <li>First ordered list item</li>
                    <li>
                      Another list item
                      <ul>
                        <li>Unordered sub-list.</li>
                      </ul>
                    </li>
                    <li>
                      Actual numbers don’t matter, just that it’s a number
                      <ol>
                        <li>Ordered sub-list</li>
                      </ol>
                    </li>
                  </ol>
                </div>

                <div className="post-detail__tags">
                  <h2>Tags</h2>
                  <ul>
                    <li className="item">
                      <Button type="tag" text="HTML" />
                    </li>
                    <li className="item">
                      <Button type="tag" text="CSS3" />
                    </li>
                    <li className="item">
                      <Button type="tag" text="React" />
                    </li>
                    <li className="item">
                      <Button type="tag" text="Vue" />
                    </li>
                  </ul>
                </div>

                <div className="post-detail__comments">
                  <CommentForm />
                  <p>20 Comments</p>

                  <Comments />
                </div>
              </div>
            </div>

            <div className="post-detail__side">
              <PostAuthor />
              <div className="spacing"></div>
              <RelatedPosts />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetail;
