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
  getArticlePopular() {
    return PostService.getList({
      page: 1,
      per_page: 3,
      orderby: "post_views",
    });
  },
  getArticleRegular(page = 1) {
    return PostService.getList({
      page: page,
      per_page: 2,
    });
  },
  getArticleSearch(keyword, page, categoryId) {
    return PostService.getList({
      page: page,
      per_page: 2,
      search: keyword,
      lang: "vi",
      categories: categoryId,
    });
  },
};

export default PostService;
