import SET_LOGGED_IN from '../actionTypes';

const initialState = {
  isLoggedIn: false,
};

function userAuthReducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: payload };
    default:
      return state;
  }
}

export default userAuthReducer;
