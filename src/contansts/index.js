export const BASE_URL = process.env.REACT_APP_LOCAL_BASE_URL;

export const DATE_TEMPLATE = "DD/MM/YYYY";

export const DEFAULT_AVATAR =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

export const ACCESS_TOKEN = "access_token";

export const MESSAGE_FORM_ERROR = {
  existing_user_login: "User Login has already existed",
  existing_user_email: "Email exists has already existed",
  rest_user_invalid_password: "The password is invalid",
  rest_user_invalid_username: "The username is invalid",
  rest_user_invalid_email: "The email is invalid",

  //Front End Error Code :
  email_required: "Email cant be empty",
  password_required: "Password cant be empty",
  username_required: "Username cant be empty",
  password_length: "Password size has to be greater than 6",

  default: "Something is wrong, please try again.",
};
