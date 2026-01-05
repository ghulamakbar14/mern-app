import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../services/authStorage";

export default function PublicRoute() {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard/users" replace />;
  }
  return <Outlet />;
}