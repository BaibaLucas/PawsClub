/* Actions */

/* Initial State user infos */
const initialState = {
  id: '',
  username: '',
  email: '',
  password: '',
  profilurl: null,
  logged: false,
  error: false
};

/* Auth reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {
    default:
      return {...oldState}
  }
};

export default Reducer;