export const signUp = (values) => {
  const base = JSON.parse(localStorage.getItem("users")) || [];
  return new Promise((resolve) => {
    base.push(values);
    localStorage.setItem("users", JSON.stringify(base));
    resolve("signedUp");
  });
};

export const signIn = (values) => {
  const base = JSON.parse(localStorage.getItem("users")) || [];
  return new Promise((resolve, reject) => {
    const hash = base.reduce((init, user) => {
      init[user.email] = user.password;
      return init;
    }, {});
    if (hash[values.email] && hash[values.email] === values.password) {
      resolve("signin");
    } else if (!hash[values.email]) {
      reject("email");
    } else if (hash[values.email] && hash[values.email] !== values.password) {
      reject("password");
    }
  });
};
