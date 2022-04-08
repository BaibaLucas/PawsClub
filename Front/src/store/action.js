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
export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS';
export const UPDATE_NEWS_SUCCESS = 'UPDATE_NEWS_SUCCESS';
export const NEWS_DETAILS_SUCCESS = 'NEWS_DETAILS_SUCCESS';
// Lineup types
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS';
export const GET_ROSTER_SUCCESS = 'GET_ROSTER_SUCCESS';
export const SELECT_SECTION = 'SELECT_SECTION';
export const CHANGE_SECTIONS_FIELD = 'CHANGE_SECTIONS_FIELD';
export const CREATE_SECTION_SUCCESS = 'CREATE_SECTION_SUCCESS';
export const DELETE_SECTION_SUCCESS = 'DELETE_SECTION_SUCCESS';
export const UPDATE_SECTION_SUCCESS = 'UPDATE_SECTION_SUCCESS';
export const SECTION_DETAILS_SUCCESS = 'SECTION_DETAILS_SUCCESS';
// Users types
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const CHANGE_USERS_FIELD = 'CHANGE_USERS_FIELD';
export const SELECT_USER = 'SELECT_USER';
export const GET_STREAMERS_SUCCESS = 'GET_STREAMERS_SUCCESS';
export const EDIT_ROLE_SUCCESS = 'EDIT_ROLE_SUCCESS';
export const EDIT_USER_SECTION_SUCCESS = 'EDIT_USER_SECTION_SUCCESS';
export const REFRESH_USER_SUCCESS = 'REFRESH_USER_SUCCESS';

// Image Types
export const IMG_UPLOAD_SUCCESS = 'IMG_UPLOAD_SUCCESS';
// Admin Types
export const ADMIN_AUTH_FAILED = 'ADMIN_AUTH_FAILED';
export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
// Tags Types
export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const CHANGE_TAGS_FIELD = 'CHANGE_TAGS_FIELD';
export const SELECT_TAG = 'SELECT_TAG';
export const CREATE_TAG_SUCCESS = 'CREATE_TAG_SUCCESS';
export const DELETE_TAG_SUCCESS = 'DELETE_TAG_SUCCESS';

/* Actions */

// Auth actions
export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  value,
  name,
});
export const signUpSuccess = (user, token) => ({
  type: SIGNUP_SUCCESS,
  ...user,
  token,
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
export const editUserSuccess = (data, msg) => ({
  type: EDIT_USER_SUCCESS,
  data,
  msg,
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
export const selectNews = (id, title, subtitle, content, newsurl) => ({
  type: SELECT_NEWS,
  id,
  title,
  subtitle,
  content,
  newsurl,
});
export const deleteNewsSuccess = (data) => ({
  type: DELETE_NEWS_SUCCESS,
  data,
});
export const updateNewsSuccess = (data) => ({
  type: UPDATE_NEWS_SUCCESS,
  data,
});
export const newsDetailsSuccess = (data) => ({
  type: NEWS_DETAILS_SUCCESS,
  data,
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
export const selectSection = (id, name, title, sectionurl, desc, content) => ({
  type: SELECT_SECTION,
  id,
  name,
  title,
  sectionurl,
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
export const deleteSectionSuccess = (data) => ({
  type: DELETE_SECTION_SUCCESS,
  data,
});
export const updateSectionSuccess = (data) => ({
  type: UPDATE_SECTION_SUCCESS,
  data,
});
export const sectionDetailsSuccess = (data) => ({
  type: SECTION_DETAILS_SUCCESS,
  data,
})

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
export const getStreamersSuccess = (data) => ({
  type: GET_STREAMERS_SUCCESS,
  data,
});
export const editRoleSuccess = (data) => ({
  type: EDIT_ROLE_SUCCESS,
  data,
});
export const editUserSectionSuccess = (data) => ({
  type: EDIT_USER_SECTION_SUCCESS,
  data,
});
export const refreshUserSuccess = (data) => ({
  type: REFRESH_USER_SUCCESS,
  data,
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
export const createTagSuccess = (data) => ({
  type: CREATE_TAG_SUCCESS,
  data,
});
export const deleteTagSuccess = (data) => ({
  type: DELETE_TAG_SUCCESS,
  data,
})

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