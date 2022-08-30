import ArticleList from "../../Components/ArticleList";
import MainTitle from "../../Components/Shared/MainTitle/MainTitle";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSearchArticleListAsyncAction } from "../../store/post/action";
import useGetCategoryId from "../../hooks/useGetCategoryId";

function CategoryPage() {
  const dispatch = useDispatch();
  const id = useGetCategoryId();
  useEffect(() => {
    dispatch(getSearchArticleListAsyncAction({ page: 0, categoryId: id }));
  }, []);
  return (
    <div className="tcl-container">
      <MainTitle type="search">4 Results found for ""</MainTitle>
      <ArticleList pageType="search" />;
    </div>
  );
}

export default CategoryPage;
