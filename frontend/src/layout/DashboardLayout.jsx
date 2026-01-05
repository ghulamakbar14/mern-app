import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />

        <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
          <Outlet />
        </Box>
      </Box>

      <RightSidebar />
    </Box>
  );
};

export default DashboardLayout;
