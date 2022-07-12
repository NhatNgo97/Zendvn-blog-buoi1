export function getQuerryString(name) {
  return new URLSearchParams(window.location.search).get(name);
}

export function mappingPostData(post) {
  return {
    id: post.id,
    title: post.title.rendered,
    author: post.author_data,
    thumbnail: post.featured_media_url,
    createdDate: post.date,
    slug: post.slug,
    categoriesId: post.categories,
    views: post.view_count,
    desc: post.excerpt.rendered,
  };
}

export function handleHashCategoryById(categories) {
  const hashObj = {};
  categories.forEach((categoryItem) => {
    const key = categoryItem.id;
    hashObj[key] = categoryItem;
  });
  return hashObj;
}
