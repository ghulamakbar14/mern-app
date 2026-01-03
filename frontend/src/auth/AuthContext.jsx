import { createContext, useContext, useEffect, useState } from "react";
import { getToken, removeToken, setToken } from "../services/authStorage";
import { login as apiLogin, signup as apiSignup } from "./auth.api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  useEffect(() => {
    setIsAuthenticated(!!getToken());
  }, []);

  const login = async (data) => {
    const res = await apiLogin(data);
    setToken(res.data.token);
    setIsAuthenticated(true);
  };

  const signup = async (data) => {
    const res = await apiSignup(data);
    setToken(res.data.token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}