export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const setUserAccount = account => ({
  type: LOGIN,
  account: account,
});

export const unsetUserrAccount = () => ({
  type: LOGOUT,
});
