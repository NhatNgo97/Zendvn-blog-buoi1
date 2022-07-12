export default function ArticleStats({ views }) {
  return (
    <ul className="article-item__stats">
      <li>
        <i className="icons ion-ios-eye"></i>
        <span className="text">{views + " views"}</span>
      </li>
    </ul>
  );
}
