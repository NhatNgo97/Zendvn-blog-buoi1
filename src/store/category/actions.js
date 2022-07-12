import { handleHashCategoryById } from "../../helper";
import categoryService from "../../services/category";

//ACTOPM TYPES
export const FETCH_ALL_CATEGORIES_ACTION = "FETCH_ALL_CATEGORIES_ACTION";

//Action
export function fetchAllCategoriesAction(hashCategoryById) {
  return {
    type: FETCH_ALL_CATEGORIES_ACTION,
    payload: {
      hashCategoryById,
    },
  };
}

//AsyncAction

export function fetchAllCategoriesAsyncAction() {
  return async function (dispatch) {
    try {
      const response = await categoryService.getList();
      const categories = response.data;
      const hashCategoryById = handleHashCategoryById(categories);
      dispatch(fetchAllCategoriesAction(hashCategoryById));
    } catch (err) {
      console.log(err);
    }
  };
}
