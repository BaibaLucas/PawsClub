/* Types */

// Auth types
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

/* Actions */

// Auth actions
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  value,
  name,
});
export const signUpSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  ...user,
});
export const authFailed = (data) => ({
  type: AUTH_FAILED,
  ...data,
});
export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  ...data,
});