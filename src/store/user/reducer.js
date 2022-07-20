import { ACCESS_TOKEN } from "../../contansts";
import { LOGIN_SUCCESS_ACTION, LOGOUT_ACTION } from "./actions";

const initState = {
  token: "",
  currentUser: null,
};

function reducer(userState = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS_ACTION:
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);
      return {
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT_ACTION:
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        token: "",
        currentUser: null,
      };
    default:
      return userState;
  }
}
export default reducer;
