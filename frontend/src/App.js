// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import RecipeDetails from "./pages/Recipedetails";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AddRecipe from "./pages/Addrecipe";
// import EditRecipe from "./pages/Editrecipe";
// import Profile from "./pages/Profile";
// import About from "./pages/About";

// function App() {
//    return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/Addrecipe" element={<AddRecipe />} />
//         <Route path="/Editrecipe" element={<EditRecipe />} />
//         <Route path="/Profile" element={<Profile />} />
//         <Route path="/About" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Home from "./pages/Home";
// import RecipeDetails from "./pages/Recipedetails";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AddRecipe from "./pages/Addrecipe";
// import EditRecipe from "./pages/Editrecipe";
// import Profile from "./pages/Profile";
// import About from "./pages/About";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location.pathname }} />;
// //   }

// //   return children;
// // };

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/recipe/:id" element={<RecipeDetails />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/about" element={<About />} />

// //         <Route path="/addrecipe" element={<ProtectedRoute><AddRecipe /></ProtectedRoute>} />
// //         <Route path="/editrecipe/:id" element={<ProtectedRoute><EditRecipe /></ProtectedRoute>} />
// //         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;



// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Home from "./pages/Home";
// import RecipeDetails from "./pages/Recipedetails";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AddRecipe from "./pages/Addrecipe";
// import EditRecipe from "./pages/Editrecipe";
// import Profile from "./pages/Profile";
// import About from "./pages/About";

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("isAuthenticated"));
//   const location = useLocation();

//   useEffect(() => {
//     setIsAuthenticated(!!localStorage.getItem("isAuthenticated")); // Ensure latest auth status
//   }, []);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }

//   return children;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/about" element={<About />} />

//         <Route path="/add-recipe" element={<ProtectedRoute><AddRecipe /></ProtectedRoute>} />

//         <Route path="/edit-recipe/:id" element={<ProtectedRoute><EditRecipe /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Home from "./pages/Home";
// import RecipeDetails from "./pages/Recipedetails";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AddRecipe from "./pages/Addrecipe";
// import EditRecipe from "./pages/Editrecipe";
// import Profile from "./pages/Profile";
// import About from "./pages/About";

// const ProtectedRoute = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     !!localStorage.getItem("isAuthenticated")
//   );
//   const location = useLocation();

//   useEffect(() => {
//     const checkAuth = () => {
//       setIsAuthenticated(!!localStorage.getItem("isAuthenticated"));
//     };

//     window.addEventListener("storage", checkAuth);
//     return () => window.removeEventListener("storage", checkAuth);
//   }, []);

//   return isAuthenticated ? children : <Navigate to="/login" state={{ from: location.pathname }} replace />;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/about" element={<About />} />

//         {/* Protected Routes */}
//         <Route path="/add-recipe" element={<ProtectedRoute><AddRecipe /></ProtectedRoute>} />
//         <Route path="/edit-recipe/:id" element={<ProtectedRoute><EditRecipe /></ProtectedRoute>} />
//         <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import RecipeDetails from "./pages/Recipedetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRecipe from "./pages/Addrecipe";
import EditRecipe from "./pages/Editrecipe";
import Profile from "./pages/Profile";
import About from "./pages/About";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("isAuthenticated")
  );

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("isAuthenticated"));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Update state immediately when login changes
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("isAuthenticated"));
  }, [localStorage.getItem("isAuthenticated")]);

  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route path="/add-recipe" element={<ProtectedRoute><AddRecipe /></ProtectedRoute>} />
        <Route path="/edit-recipe/:id" element={<ProtectedRoute><EditRecipe /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
