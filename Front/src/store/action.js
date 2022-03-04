/* Types */

// Auth types
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';

// News types
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
// Lineup types
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS';
// Sections types
export const GET_ROSTER_SUCCESS = 'GET_ROSTER_SUCCESS';
// Image Types
export const IMG_UPLOAD_SUCCESS = 'IMG_UPLOAD_SUCCESS';

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
export const loginSuccess = (data, token) => ({
  type: LOGIN_SUCCESS,
  ...data,
  token,
});
export const editUserSuccess = (data) => ({
  type: EDIT_USER_SUCCESS,
  ...data,
});

// News actions
export const getNewsSuccess = (data) => ({
  type: GET_NEWS_SUCCESS,
  data,
});

// Lineup actions
export const getSectionsSuccess = (data) => ({
  type: GET_SECTIONS_SUCCESS,
  data,
});

// Sections actions
export const getRosterSuccess = (data) => ({
  type: GET_ROSTER_SUCCESS,
  data,
});

// Image actions
export const imgUploadSuccess = (user) => ({
  type: IMG_UPLOAD_SUCCESS,
  ...user,
});