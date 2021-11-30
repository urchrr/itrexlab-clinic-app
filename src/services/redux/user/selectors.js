export const isLoggedInSelector = (state) => state.user.isLoggedIn;
export const userDataSelector = (state) => ({
  firstName: state.user.first_name,
  secondName: state.user.second_name,
  avatar: state.user.photo,
  role: state.user.role_name,
});
