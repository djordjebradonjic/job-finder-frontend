import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("jwtToken"));

  const login = (jwtToken) => {
    localStorage.setItem("jwtToken", jwtToken);
    setToken(jwtToken);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);