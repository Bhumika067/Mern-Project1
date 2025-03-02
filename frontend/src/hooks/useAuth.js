import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (example using localStorage)
    const loggedIn = localStorage.getItem("auth") === "true";
    setIsAuthenticated(loggedIn);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("auth", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
