import { useEffect } from "react";
import ArticleLatestList from "../../Components/ArticleLatestList";
import ArticleList from "../../Components/ArticleList";
import ArticlePopularList from "../../Components/ArticlePopularList";
import "../../Components/Shared/Main/main.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleLatestListAsyncAction,
  getArticlePopularListAsyncAction,
  getArticleRegularListAsyncAction,
} from "../../store/post/action";

function HomePage() {
  const page = useSelector((state) => state.Post.articleRegular.page);
  console.log(page);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleLatestListAsyncAction());
    dispatch(getArticlePopularListAsyncAction());
    dispatch(getArticleRegularListAsyncAction({ page }));
  }, []);

  return (
    <div className="">
      <ArticleLatestList />
      <ArticlePopularList />
      <ArticleList />
    </div>
  );
}

export default HomePage;
