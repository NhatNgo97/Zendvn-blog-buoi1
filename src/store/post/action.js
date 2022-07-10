import { mappingPostData } from "../../helper";
import PostService from "../../services/post";
//Action Types
export const GET_ARTICLE_LATEST_LIST = "GET_ARTICLE_LATEST_LIST";

//Action

export function getArticleLatestListAction(posts) {
  return {
    type: GET_ARTICLE_LATEST_LIST,
    payload: posts,
  };
}

//Asyn Action

export function getArticleLatestListAsyncAction() {
  return async function (dispatch) {
    try {
      const response = await PostService.getArticleLatest();
      const posts = response.data.map(mappingPostData);
      dispatch(getArticleLatestListAction(posts));
    } catch (err) {
      console.log(err);
    }
  };
}
