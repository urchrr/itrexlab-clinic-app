import SET_LOGGED_IN from "../actionTypes";

const initialState = {
  isLoggedIn: false,
};

function userAuthReducer(action, state = initialState) {
  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}

export default userAuthReducer;
