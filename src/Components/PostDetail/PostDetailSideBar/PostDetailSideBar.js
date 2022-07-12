import PostAuthor from "./postAuthor/postAuthor";
import RelatedPosts from "./relatedPosts/relatedPosts";

function PostDetailSideBar() {
  return (
    <div className="post-detail__side">
      <PostAuthor />
      <div className="spacing"></div>
      <RelatedPosts />
    </div>
  );
}

export default PostDetailSideBar;
