import api from "./api";

const userService = {
  login({ username, password }) {
    return api.post("/jwt-auth/v1/token", {
      username: username,
      password: password,
    });
  },
  fetchMe({ token }) {
    return api.get("/wp/v2/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  register({ nickname, username, email, password }) {
    return api.post("/wp/v2/users/register", {
      email,
      username,
      nickname,
      password,
    });
  },
};

export default userService;
