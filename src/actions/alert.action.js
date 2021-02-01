import { alertConstants } from "../constants";

const success = (message) => {
  return { type: alertConstants.SUCCESS, message: message };
};

const error = (message) => {
  return { type: alertConstants.ERROR, message: message };
};

const clear = (message) => {
  return { type: alertConstants.CLEAR, message: message };
};
