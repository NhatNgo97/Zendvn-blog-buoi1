import api from "./api";
const PostService = {
  getList(params) {
    return api.get("/wp/v2/posts", {
      params: {
        ...params,
        lang: "vi",
      },
    });
  },
  getArticleLatest() {
    return PostService.getList({
      page: 1,
      per_page: 3,
    });
  },
};

export default PostService;
