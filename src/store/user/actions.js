import { ACCESS_TOKEN, MESSAGE_FORM_ERROR } from "../../contansts";
import { mappingCurrentUser } from "../../helper";
import userService from "../../services/user";

//ACTION TYPES
export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGOUT_ACTION = "LOGOUT_ACTION";
export const REGISTER_ACTION = "REGISTER_ACTION";

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
      dispatch(logoutAction());
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

export function registerAsyncAction({ nickname, username, email, password }) {
  return async function (dispatch) {
    try {
      const response = await userService.register({
        email,
        username,
        password,
        nickname,
      });
      const responseLogin = await dispatch(
        loginAsyncAction({
          username: username,
          password: password,
        })
      );
      if (responseLogin.ok) {
        return { ok: true };
      }
      throw new Error(MESSAGE_FORM_ERROR.default);
    } catch (err) {
      let errorMessage = MESSAGE_FORM_ERROR.default;

      const errorCode = err.response?.data?.code;
      errorMessage = errorCode && MESSAGE_FORM_ERROR[errorCode];
      return { ok: false, error: errorMessage };
    }
  };
}
