import "./post-detail.css";
import PostDetailHead from "./PostDetailHead/PostDetailHead";

import PostDetailContent from "./PostDetailContent/PostDetailContent";
import PostDetailSideBar from "./PostDetailSideBar/PostDetailSideBar";

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
