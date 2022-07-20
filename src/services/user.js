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
};

export default userService;
