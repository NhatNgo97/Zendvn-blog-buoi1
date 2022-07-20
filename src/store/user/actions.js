import { ACCESS_TOKEN } from "../../contansts";
import { mappingCurrentUser } from "../../helper";
import userService from "../../services/user";

//ACTION TYPES
export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";

//ACTION

export function loginSuccessAction({ user, token }) {
  return {
    type: LOGIN_SUCCESS_ACTION,
    payload: {
      user,
      token,
    },
  };
}

export function logoutAction() {
  return {
    type: LOGOUT_ACTION,
  };
}

//ASYNC ACTION

export function fetchMeAsyncAction(token) {
  return async (dispatch) => {
    if (token === undefined) {
      token = localStorage.getItem(ACCESS_TOKEN);
    }
    try {
      const response = await userService.fetchMe({ token });
      const user = mappingCurrentUser(response.data);
      dispatch(loginSuccessAction({ user, token }));
      return {
        ok: true,
      };
    } catch (err) {
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        ok: false,
        error: "Username or Password is incorrect.",
      };
    }
  };
}

export function loginAsyncAction({ username, password }) {
  return async function (dispatch) {
    try {
      const reponse = await userService.login({ username, password });
      const token = reponse.data.token;
      const responseMe = await dispatch(fetchMeAsyncAction(token));
      return {
        ok: responseMe.ok,
        error: responseMe.error,
      };
    } catch (err) {
      return {
        ok: false,
        error: "Username or Password is incorrect.",
      };
    }
  };
}
