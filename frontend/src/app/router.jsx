import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import UsersPage from "../modules/users/UsersPage";
import OrdersPage from "../modules/orders/OrdersPage";

export default createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "orders", element: <OrdersPage /> }
    ]
  }
]);
