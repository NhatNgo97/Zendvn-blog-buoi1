import ArticleLatestList from "../../Components/ArticleLatestList";
import ArticleList from "../../Components/ArticleList";
import ArticlePopularList from "../../Components/ArticlePopularList";
import "../../Components/Shared/Main/main.css";

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
