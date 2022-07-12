import { mappingPostData } from "../../helper";
import PostService from "../../services/post";
//Action Types
export const GET_ARTICLE_LATEST_LIST = "GET_ARTICLE_LATEST_LIST";
export const GET_ARTICLE_POPULAR_LIST = "GET_ARTICLE_POPULAR_LIST";
export const GET_ARTICLE_REGULAR_LIST = "GET_ARTICLE_REGULAR_LIST";

//Action

export function getArticleLatestListAction(posts) {
  return {
    type: GET_ARTICLE_LATEST_LIST,
    payload: posts,
  };
}

export function getArticlePopularListAction(posts) {
  return {
    type: GET_ARTICLE_POPULAR_LIST,
    payload: posts,
  };
}

export function getArticleRegularListAction({ posts, total, totalPages }) {
  return {
    type: GET_ARTICLE_REGULAR_LIST,
    payload: {
      posts,
      total,
      totalPages,
    },
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

export function getArticlePopularListAsyncAction() {
  return async function (dispatch) {
    try {
      const response = await PostService.getArticlePopular();
      const posts = response.data.map(mappingPostData);
      dispatch(getArticlePopularListAction(posts));
    } catch (err) {
      console.log(err);
    }
  };
}

export function getArticleRegularListAsyncAction({ page }) {
  return async function (dispatch) {
    try {
      const response = await PostService.getArticleRegular(page + 1);
      const total = Number(response.headers["x-wp-total"]);
      const totalPages = Number(response.headers["x-wp-totalpages"]);
      const posts = response.data.map(mappingPostData);
      dispatch(getArticleRegularListAction({ posts, total, totalPages }));
    } catch (err) {
      console.log(err);
    }
  };
}
