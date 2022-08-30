const initState = {
  articleLatest: [],
  artcilePopular: [],
  articleRegular: {
    page: 0,
    articleList: [],
    total: 0,
    totalPages: 0,
  },
  articleSearch: {
    page: 0,
    articleList: [],
    total: 0,
    totalPages: 0,
    keyword: "",
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
          articleList:
            action.payload.page !== 0
              ? [
                  ...postState.articleRegular.articleList,
                  ...action.payload.posts,
                ]
              : [...action.payload.posts],
          page: action.payload.page + 1,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
        },
      };
    case "GET_ARTICLE_SEARCH_LIST":
      console.log("page", action.payload.page);
      return {
        ...postState,
        articleSearch: {
          articleList:
            action.payload.page !== 0
              ? [
                  ...postState.articleSearch.articleList,
                  ...action.payload.posts,
                ]
              : [...action.payload.posts],
          page: action.payload.page + 1,
          total: action.payload.total,
          totalPages: action.payload.totalPages,
        },
      };
    default:
      return postState;
  }
}
export default reducer;
