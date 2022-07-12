const initState = {
  articleLatest: [],
  artcilePopular: [],
  articleRegular: {
    page: 0,
    articleList: [],
    total: 0,
    totalPages: 0,
  },
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case "GET_ARTICLE_LATEST_LIST":
      return {
        ...postState,
        articleLatest: [...action.payload],
      };

    case "GET_ARTICLE_POPULAR_LIST":
      return {
        ...postState,
        artcilePopular: [...action.payload],
      };
    case "GET_ARTICLE_REGULAR_LIST":
      return {
        ...postState,
        articleRegular: {
          articleList: [
            ...postState.articleRegular.articleList,
            ...action.payload.posts,
          ],
          page: postState.articleRegular.page + 1,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
        },
      };
    default:
      return postState;
  }
}
export default reducer;
