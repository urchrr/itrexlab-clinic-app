export const isLoggedInSelector = (state) => state.userAuth.isLoggedIn;
export const userDataSelector = (state) => ({
  firstName: state.userAuth.first_name,
  secondName: state.userAuth.second_name,
  avatar: state.userAuth.photo,
  role: state.userAuth.role_name,
});
