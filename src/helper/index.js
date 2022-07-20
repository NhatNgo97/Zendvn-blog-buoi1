import { MESSAGE_FORM_ERROR } from "../contansts";

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

export function mappingCurrentUser(user) {
  return {
    id: user.id,
    email: user.email,
    nickname: user.nickname,
    avatar: user.avatar_urls["96"],
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

export function validateFormData({ value, name }) {
  let error = "";

  if (name === "username" && !value) {
    error = "Username cant be empty";
  }
  if (name === "password") {
    if (!value) error = "Password cant be empty";
    else if (value.length < 6) error = "Password is too short";
  }
  return error;
}

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function validateFormRegister({ value, name }) {
  let error = "";

  if (name === "email") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required;
    } else if (!validateEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email;
    }
  } else if (name === "username" && !value) {
    error = MESSAGE_FORM_ERROR.username_required;
  } else if (name === "password") {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required;
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length;
    }
  }
  return error;
}
