import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function useGetCategoryId() {
  const { slug } = useParams();
  const hashCategoryById = useSelector(
    (state) => state.Category.hashCategoryById
  );

  const id = slug
    ? Object.values(hashCategoryById).filter(
        (item) => item.name.toLowerCase() === slug.toLowerCase()
      )[0].id
    : slug;

  return id;
}
