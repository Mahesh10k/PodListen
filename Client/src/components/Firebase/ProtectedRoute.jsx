// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import {useAuthState} from 
import { auth } from "./firebase"; 

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth); 
  
  if (!user) {
    return <Navigate to="/login" />;  
  }

  if (user.email !== "maheshpikki03@gmail.com") {
    return <Navigate to="/unauthorized" />;
  }

  return children; // If logged in and the email matches, show the children (Upload page)
};

export default ProtectedRoute;
