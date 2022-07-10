import { useEffect } from "react";
import ArticleLatestList from "../../Components/ArticleLatestList";
import ArticleList from "../../Components/ArticleList";
import ArticlePopularList from "../../Components/ArticlePopularList";
import "../../Components/Shared/Main/main.css";
import { useDispatch } from "react-redux";
import { getArticleLatestListAsyncAction } from "../../store/post/action";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticleLatestListAsyncAction());
  }, []);

  return (
    <div className="">
      <ArticleLatestList />
      {/* <ArticlePopularList />
      <ArticleList /> */}
    </div>
  );
}

export default HomePage;
