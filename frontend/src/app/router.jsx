import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import UsersPage from "../modules/users/UsersPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
