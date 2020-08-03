import { LOGIN, LOGOUT } from '../actions/auth';

const initialState = {
  account: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        account: action.account,
      };
    case LOGOUT:
      return {
        ...state,
        account: null,
      };
    default:
      return state;
  }
};

export default authReducer;
