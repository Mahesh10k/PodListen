// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; 

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth); 
  
  if (!user) {
    return <Navigate to="/login" />;  // If not logged in, redirect to the login page
  }

  if (user.email !== "maheshpikki03@gmail.com") {
    // If the email is not the allowed one, redirect to the Unauthorized page
    return <Navigate to="/unauthorized" />;
  }

  return children; // If logged in and the email matches, show the children (Upload page)
};

export default ProtectedRoute;
