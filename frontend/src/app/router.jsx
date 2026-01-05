import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import UsersPage from "../modules/users/UsersPage";
import Signup from "../modules/auth/SignupPage";
import Login from "../modules/auth/LoginPage";
import ProtectedRoute from "../routes/ProtectedRoute";

const AppRouter = () => {
  return (
    <>
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/users" element={<UsersPage />} />
        </Route>
      </Route>
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </>);
};

export default AppRouter;
