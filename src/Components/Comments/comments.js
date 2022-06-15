import "./comments.css";
import CommentForm from "./conmentForm";
import avatar1 from "../../assets/img/avatar1.jpg";
import avatar2 from "../../assets/img/avatar2.jpg";
import avatar3 from "../../assets/img/avatar3.jpg";
import avatar4 from "../../assets/img/avatar4.jpg";

function Comments() {
  return (
    <ul className="comments">
      <li className="item">
        <div className="comments__section">
          <div className="comments__section--avatar">
            <a href="/">
              <img src={avatar1} alt="" />
            </a>
          </div>
          <div className="comments__section--content">
            <a href="/" class="comments__section--user">
              John Smith
            </a>
            <p className="comments__section--time">2 minutes ago</p>
            <p className="comments__section--text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              sequi odit exercitationem maiores, iusto unde quibusdam! Ullam
              nisi iste reprehenderit, expedita nam ad. Nisi hic at voluptate
              sint incidunt aut?
            </p>
            <i className="ion-reply comments__section--reply"></i>
          </div>
        </div>

        <ul className="comments">
          <li className="item">
            <div className="comments__section">
              <div className="comments__section--avatar">
                <a href="/">
                  <img src={avatar3} alt="" />
                </a>
              </div>
              <div className="comments__section--content">
                <a href="/" className="comments__section--user">
                  John Smith
                </a>
                <p className="comments__section--time">2 minutes ago</p>
                <p className="comments__section--text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit?
                </p>
                <i className="ion-reply comments__section--reply"></i>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="comments__section">
              <div className="comments__section--avatar">
                <a href="/">
                  <img src={avatar4} alt="" />
                </a>
              </div>
              <div className="comments__section--content">
                <a href="/" class="comments__section--user">
                  John Smith
                </a>
                <p className="comments__section--time">2 minutes ago</p>
                <p className="comments__section--text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt sequi odit exercitationem ma?
                </p>
                <i className="ion-reply comments__section--reply"></i>
              </div>
            </div>
          </li>
        </ul>

        <CommentForm />
      </li>

      <li className="item">
        <div className="comments__section">
          <div className="comments__section--avatar">
            <a href="/">
              <img src={avatar2} alt="" />
            </a>
          </div>
          <div className="comments__section--content">
            <a href="/" className="comments__section--user">
              John Smith
            </a>
            <p className="comments__section--time">2 minutes ago</p>
            <p className="comments__section--text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              sequi odit exercitationem maiores?
            </p>
            <i className="ion-reply comments__section--reply"></i>
          </div>
        </div>
        <div className="comments__hidden">
          <a href="/">
            <i className="icons ion-ios-undo"></i> Xem thêm 2 câu trả lời
          </a>
        </div>
      </li>

      <li className="item">
        <div className="comments__section">
          <div className="comments__section--avatar">
            <a href="/">
              <img src={avatar3} alt="" />
            </a>
          </div>
          <div className="comments__section--content">
            <a href="/" class="comments__section--user">
              John Smith
            </a>
            <p className="comments__section--time">2 minutes ago</p>
            <p className="comments__section--text">
              Lorem ipsum dolor sit, amet?
            </p>
            <i className="ion-reply comments__section--reply"></i>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Comments;
