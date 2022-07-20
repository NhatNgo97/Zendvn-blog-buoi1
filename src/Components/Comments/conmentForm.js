import "./comments.css";
import avatar1 from "../../assets/img/avatar1.jpg";
function CommentForm() {
  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src={avatar1} alt="" />
          </a>
        </div>
        <textarea name=""></textarea>
      </div>
      <div className="text-right">
        <button className="btn btn-default">Submit</button>
      </div>
    </div>
  );
}

export default CommentForm;
