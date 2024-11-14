import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../pages/AuthContext"; // Import the useAuth hook

const PrivateRoute = ({ requiredRole }) => {
  const { userRole } = useAuth(); // Get the current user role from the context

  // If no user role or role does not match the required one, redirect to login
  if (!userRole || (requiredRole && userRole !== requiredRole)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
