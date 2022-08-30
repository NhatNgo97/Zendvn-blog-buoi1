import {
  filterSearchTitle,
  mappingPostData,
  mappingSearchPostData,
} from "../../helper";
import PostService from "../../services/post";
//Action Types
export const GET_ARTICLE_LATEST_LIST = "GET_ARTICLE_LATEST_LIST";
export const GET_ARTICLE_POPULAR_LIST = "GET_ARTICLE_POPULAR_LIST";
export const GET_ARTICLE_REGULAR_LIST = "GET_ARTICLE_REGULAR_LIST";
export const GET_ARTICLE_SEARCH_LIST = "GET_ARTICLE_SEARCH_LIST";

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

export function getArticleRegularListAction({
  posts,
  total,
  totalPages,
  page,
}) {
  return {
    type: GET_ARTICLE_REGULAR_LIST,
    payload: {
      posts,
      total,
      totalPages,
      page,
    },
  };
}

export function getArticleSearchListAction({ posts, total, totalPages, page }) {
  return {
    type: GET_ARTICLE_SEARCH_LIST,
    payload: {
      page,
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
      dispatch(getArticleRegularListAction({ posts, total, totalPages, page }));
    } catch (err) {
      console.log(err);
    }
  };
}

export function getSearchArticleListAsyncAction({ keyword, page, categoryId }) {
  return async function (dispatch) {
    try {
      const response = await PostService.getArticleSearch(
        keyword,
        page + 1,
        categoryId
      );
      const total = Number(response.headers["x-wp-total"]);
      const totalPages = Number(response.headers["x-wp-totalpages"]);
      let rawPosts = response.data;
      console.log("rawPosts", rawPosts);
      const postsByCategory = categoryId
        ? rawPosts.map(mappingPostData)
        : rawPosts;
      const postsByKeyword = keyword
        ? postsByCategory
            .filter((post) => {
              return filterSearchTitle(post, keyword);
            })
            .map((post) => mappingSearchPostData(post, keyword))
        : postsByCategory;
      const posts = postsByKeyword;
      console.log(posts);
      dispatch(getArticleSearchListAction({ total, totalPages, posts, page }));
    } catch (err) {
      console.log(err);
    }
  };
}
