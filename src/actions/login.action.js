export const logIn = (payload) => {
  return { status: true, token: payload };
};

export const logOut = (payload) => {
  return { status: false, token: null };
};
