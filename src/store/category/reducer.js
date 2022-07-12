const initState = {
  hashCategoryById: {},
};

function reducer(categoryState = initState, action) {
  switch (action.type) {
    case "FETCH_ALL_CATEGORIES_ACTION":
      return {
        ...categoryState,
        hashCategoryById: action.payload.hashCategoryById,
      };
    default:
      return categoryState;
  }
}
export default reducer;
