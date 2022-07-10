import Button from "../Shared/Button/Button";

export default function ArticleCategories({ categories }) {
  return (
    <ul className="article-item__categories">
      {categories.map((a) => (
        <li key={Math.random()}>
          <Button type="category" children={a} />
        </li> /// key should be a.id
      ))}
    </ul>
  );
}
