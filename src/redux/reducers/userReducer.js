import { UPDATE_USER_DATA } from '../actions/userActions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function userReducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        email: payload.email,
        password: payload.password,
      };

    default:
      return state;
  }
}
