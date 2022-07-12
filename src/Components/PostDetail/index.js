import PostDetailContent from "./PostDetailContent/PostDetailContent";
import PostDetailHead from "./PostDetailHead/PostDetailHead";
import PostDetailSideBar from "./PostDetailSideBar/PostDetailSideBar";
import "./post-detail.css";

function PostDetail() {
  return (
    <main className="post-detail">
      <div className="spacing"></div>
      <PostDetailHead />
      <div className="spacing"></div>
      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent />
            <PostDetailSideBar />
          </div>
        </div>
      </div>
    </main>
  );
}
export default PostDetail;
