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
    categories: post.categories,
    views: post.view_vount,
    desc: post.excerpt.rendered,
  };
}
