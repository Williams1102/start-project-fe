import { userConstants } from "../constants/user.constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = { loggedIn: true }, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: false,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
}
