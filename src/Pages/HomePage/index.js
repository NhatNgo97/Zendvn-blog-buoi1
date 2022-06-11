import ArticleLatestList from "../../components/ArticleLatestList";
import ArticleList from "../../components/ArticleList";
import ArticlePopularList from "../../components/ArticlePopularList";
import "../../components/Shared/Main/main.css";

function HomePage() {
  return (
    <div className="">
      <ArticleLatestList />
      <ArticlePopularList />
      <ArticleList />
    </div>
  );
}

export default HomePage;
