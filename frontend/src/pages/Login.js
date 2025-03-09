// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // For navigation
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate for redirection

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       setError("Please enter your email and password.");
//       return;
//     }

//     setLoading(true);

//     // Simulated Backend Call (Replace with actual API request)
//     setTimeout(() => {
//       const storedUser = JSON.parse(localStorage.getItem("user"));

//       if (storedUser && storedUser.email === email && storedUser.password === password) {
//         localStorage.setItem("isAuthenticated", "true"); // Set auth state
//         navigate("/add-recipe"); // ✅ Redirect to Add Page after login
//       } else {
//         setError("Invalid credentials.");
//       }

//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.title}>Login to Tasty Bites</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <button type="submit" style={styles.button} disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         {error && <p style={styles.errorText}>{error}</p>}
//         <p style={styles.signupText}>
//           Don't have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// // Styles (Same as Before)
// const styles = {
//   container: {
//     background: "linear-gradient(to bottom, #FF512F, #DD2476)",
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Arial, sans-serif",
//     padding: "0 20px",
//   },
//   formContainer: {
//     background: "#fff",
//     padding: "40px 60px",
//     borderRadius: "12px",
//     boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     width: "100%",
//     maxWidth: "600px",
//     minHeight: "400px",
//     transition: "transform 0.3s ease",
//   },
//   title: { 
//     fontSize: "28px", 
//     fontWeight: "bold", 
//     marginBottom: "30px", 
//     color: "#333" 
//   },
//   input: {
//     width: "100%",
//     padding: "15px",
//     margin: "15px 0",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     fontSize: "18px",
//     boxSizing: "border-box",
//   },
//   button: {
//     width: "100%",
//     padding: "15px",
//     background: "#ff6f00",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "18px",
//     transition: "background-color 0.3s ease",
//   },
//   signupText: { 
//     marginTop: "20px", 
//     fontSize: "16px", 
//     color: "#666" 
//   },
//   link: { 
//     color: "#ff6f00", 
//     textDecoration: "none", 
//     fontWeight: "bold",
//     transition: "color 0.3s ease",
//   },
//   errorText: {
//     color: "red",
//     marginTop: "10px",
//   },
// };



// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [credentials, setCredentials] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (credentials.username === "user" && credentials.password === "password") {
//       localStorage.setItem("isAuthenticated", "true");

//       const redirectTo = location.state?.from || "/";
//       navigate(redirectTo);
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.title}>Login</h2>
        
//         <form onSubmit={handleLogin}>
//           <input 
//             type="text" 
//             placeholder="Username" 
//             value={credentials.username} 
//             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} 
//             required 
//             style={styles.input} 
//           />

//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={credentials.password} 
//             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} 
//             required 
//             style={styles.input} 
//           />

//           {error && <p style={styles.errorText}>{error}</p>}

//           <button type="submit" style={styles.button}>Login</button>
//         </form>

//         <p style={styles.signupText}>
//           Don't have an account? <a href="/signup" style={styles.link}>Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// // ✅ **Styles**
// const styles = {
//   container: {
//     background: "linear-gradient(to bottom, #FF512F, #DD2476)",
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Arial, sans-serif",
//     padding: "0 20px",
//   },
//   formContainer: {
//     background: "#fff",
//     padding: "40px 60px",
//     borderRadius: "12px",
//     boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     width: "100%",
//     maxWidth: "400px",
//     minHeight: "350px",
//     transition: "transform 0.3s ease",
//   },
//   title: { 
//     fontSize: "28px", 
//     fontWeight: "bold", 
//     marginBottom: "30px", 
//     color: "#333" 
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     margin: "10px 0",
//     borderRadius: "8px",
//     border: "1px solid #ddd",
//     fontSize: "16px",
//     boxSizing: "border-box",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     background: "#ff6f00",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "18px",
//     transition: "background-color 0.3s ease",
//   },
//   signupText: { 
//     marginTop: "20px", 
//     fontSize: "16px", 
//     color: "#666" 
//   },
//   link: { 
//     color: "#ff6f00", 
//     textDecoration: "none", 
//     fontWeight: "bold",
//     transition: "color 0.3s ease",
//   },
//   errorText: {
//     color: "red",
//     marginTop: "10px",
//   },
// };

// export default Login;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  // Async function to handle user login
  const loginUser = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // If login is successful, save authentication details to localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token", data.token);

      // Redirect user to the page they were trying to visit or to the home page
      const redirectPath = localStorage.getItem("redirectPath") || "/";
      localStorage.removeItem("redirectPath");
      navigate(redirectPath);
    } else {
      // If login failed, display the error message
      setError(data.message || "Invalid credentials.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Call the loginUser function to authenticate the user
      await loginUser(email, password);
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login to Tasty Bites</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
            autoComplete="current-password"
          />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p style={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
}

// Styles remain the same
const styles = {
  container: {
    background: "linear-gradient(to bottom, #FF512F, #DD2476)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "0 20px",
  },
  formContainer: {
    background: "#fff",
    padding: "40px 60px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "600px",
    minHeight: "400px",
    transition: "transform 0.3s ease",
  },
  title: { fontSize: "28px", fontWeight: "bold", marginBottom: "30px", color: "#333" },
  input: {
    width: "100%",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "18px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "15px",
    background: "#ff6f00",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s ease",
  },
  errorText: {
    color: "red",
    marginTop: "10px",
  },
};
