import { useSelector } from "react-redux";
import Button from "../Shared/Button/Button";

export default function ArticleCategories({ categoriesId }) {
  const hashCategoryById = useSelector(
    (state) => state.Category.hashCategoryById
  );
  return (
    <ul className="article-item__categories">
      {categoriesId.map((c) => {
        const category = hashCategoryById[c];
        if (!category) {
          return null;
        }
        const categorySlugLink = "/category/" + category.slug;
        return (
          <li key={Math.random()}>
            <Button
              as="a"
              to={categorySlugLink}
              type="category"
              children={category.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
