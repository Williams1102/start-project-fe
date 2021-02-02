export const login = (username, password) => {
  if (username) return username;
  throw new Error("err!");
};
export const logout = () => {};
