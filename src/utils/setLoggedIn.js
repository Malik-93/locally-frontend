const setLoggedIn = (username, email, role = "user", auth_token = '') => {
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("userRole", role);
  localStorage.setItem("auth_token", auth_token);
};

export default setLoggedIn;
