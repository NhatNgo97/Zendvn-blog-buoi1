import blogDetail from "../../../assets/img/blog-detail.jpg";
import "./post-author.css";

function PostAuthor({ author }) {
  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="#" className="post-author__avatar">
          <img src={blogDetail} alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="#">John Smith</a>
      </div>
      <p className="post-author__desc">
        Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit.
        Necessitatibus, vel vero vel vero vel vero vel vero!
      </p>
    </div>
  );
}

export default PostAuthor;
