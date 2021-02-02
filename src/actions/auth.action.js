import { userConstants } from "../constants/user.constants";
import * as userService from "../services/users";
import { alertActions } from "./alert.action";

const login = (username, password) => {
  const request = (user) => ({ type: userConstants.LOGIN_REQUEST, user });
  const success = (token) => ({ type: userConstants.LOGIN_SUCCESS, token });
  const failure = (err) => ({ type: userConstants.LOGIN_FAILURE, err });
  return success(username);
};

const logout = () => {
  // userService.logout();
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout,
};
