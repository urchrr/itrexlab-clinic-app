export const isLoggedInSelector = (state) => state.user.isLoggedIn;
export const userDataSelector = (state) => ({
  firstName: state.user.first_name,
  lastName: state.user.last_name,
  avatar: state.user.photo,
  role: state.user.role_name,
});

export const userRoleSelector = (state) => ({
  role: state.user.role_name,
});
