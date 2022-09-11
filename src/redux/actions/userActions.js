export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export const updateUserData = (email, password) => ({
  type: UPDATE_USER_DATA,
  payload: {
    email,
    password,
  }
});
