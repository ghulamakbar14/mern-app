export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  alert("Logging out...");
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const logout = () => {
  removeToken();
};