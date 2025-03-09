// import { useState, useEffect } from "react";

// const useAuth = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if user is logged in (example using localStorage)
//     const loggedIn = localStorage.getItem("auth") === "true";
//     setIsAuthenticated(loggedIn);
//   }, []);

//   const login = () => {
//     setIsAuthenticated(true);
//     localStorage.setItem("auth", "true");
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("auth");
//   };

//   return { isAuthenticated, login, logout };
// };

// export default useAuth;



import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:5000/api/auth"; // Backend authentication URL

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  // Check authentication status on page load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${BASE_URL}/status`, {
          credentials: "include", // Important for session-based authentication
        });

        if (response.ok) {
          setIsAuthenticated(true);
          localStorage.setItem("auth", "true"); // Persist login
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("auth");
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
      }
    };

    checkAuthStatus();
  }, []);

  // Function to handle login
  const login = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (response.ok) {
        setIsAuthenticated(true);
        localStorage.setItem("auth", "true"); // Persist login
        return true; // Indicate successful login
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("auth");
        return false; // Indicate failed login
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
      localStorage.removeItem("auth");
      return false;
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });

      setIsAuthenticated(false);
      localStorage.removeItem("auth"); // Clear stored auth status
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
