/* Types */

// Auth types
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';

// News types
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const CHANGE_NEWS_FIELD = 'CHANGE_NEWS_FIELD';
export const NEWS_CONTENT_SUCCESS = 'NEWS_CONTENT_SUCCESS';
export const IMG_NEWS_UPLOAD_SUCCESS = 'IMG_NEWS_UPLOAD_SUCCESS';
export const SELECT_NEWS = 'SELECT_NEWS';
// Lineup types
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS';
export const GET_ROSTER_SUCCESS = 'GET_ROSTER_SUCCESS';
export const SELECT_SECTION = 'SELECT_SECTION';
export const CHANGE_SECTIONS_FIELD = 'CHANGE_SECTIONS_FIELD';
export const CREATE_SECTION_SUCCESS = 'CREATE_SECTION_SUCCESS';
// Users types
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const CHANGE_USERS_FIELD = 'CHANGE_USERS_FIELD';
export const SELECT_USER = 'SELECT_USER';
// Image Types
export const IMG_UPLOAD_SUCCESS = 'IMG_UPLOAD_SUCCESS';
// Admin Types
export const ADMIN_AUTH_FAILED = 'ADMIN_AUTH_FAILED';
export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
// Tags Types
export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const CHANGE_TAGS_FIELD = 'CHANGE_TAGS_FIELD';
export const SELECT_TAG = 'SELECT_TAG';

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
export const changeNewsField = (value, name) => ({
  type: CHANGE_NEWS_FIELD,
  value,
  name,
});
export const newsContentSuccess = (data) => ({
  type: NEWS_CONTENT_SUCCESS,
  data,
});
export const imgNewsUploadSuccess = (news, message) => ({
  type: IMG_NEWS_UPLOAD_SUCCESS,
  ...news,
  message,
});
export const selectNews = (id, title, subtitle, content, tag) => ({
  type: SELECT_NEWS,
  id,
  title,
  subtitle,
  content,
  tag,
});

// Lineup actions
export const getSectionsSuccess = (data) => ({
  type: GET_SECTIONS_SUCCESS,
  data,
});
export const getRosterSuccess = (data) => ({
  type: GET_ROSTER_SUCCESS,
  data,
});
export const selectSection = (id, name, title, desc, content) => ({
  type: SELECT_SECTION,
  id,
  name,
  title,
  desc,
  content,
});
export const changeSectionsField = (value, name) => ({
  type: CHANGE_SECTIONS_FIELD,
  value,
  name,
});
export const createSectionSuccess = (data) => ({
  type: CREATE_SECTION_SUCCESS,
  data,
});

// Users actions
export const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  data,
});
export const changeUsersField = (value, name) => ({
  type: CHANGE_USERS_FIELD,
  value,
  name,
});
export const selectUser = (id, username) => ({
  type: SELECT_USER,
  id,
  username,
});

// Image actions
export const imgUploadSuccess = (user, message) => ({
  type: IMG_UPLOAD_SUCCESS,
  ...user,
  message,
});

// Tags actions
export const getTagsSuccess = (data) => ({
  type: GET_TAGS_SUCCESS,
  data,
});
export const changeTagsField = (value, name) => ({
  type: CHANGE_TAGS_FIELD,
  value,
  name,
});
export const selectTag = (id, name) => ({
  type: SELECT_TAG,
  id,
  name,
});

// Admin actions
export const AdminAuthFailed = (data) => ({
  type: ADMIN_AUTH_FAILED,
  ...data,
});
export const AdminLoginSuccess = (data, token) => ({
  type: ADMIN_LOGIN_SUCCESS,
  ...data,
  token,
});