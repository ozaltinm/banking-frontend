import React, { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"; // jwt-decode doğru bir şekilde import edildi

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Token include a dot and has 3 parts
    if (token && token.split(".").length === 3) {
      try {
        //console.log(jwtDecode);
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        setUser(decoded); // Set the user state
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token"); // Remove the invalid token
      }
    } else {
      console.warn("Invalid token found.");
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
