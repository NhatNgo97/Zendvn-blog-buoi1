const initState = {
  articleLatest: [],
};

function reducer(postState = initState, action) {
  switch (action.type) {
    case "GET_ARTICLE_LATEST_LIST":
      return {
        ...postState,
        articleLatest: [...action.payload],
      };
    default:
      return postState;
  }
}
export default reducer;
