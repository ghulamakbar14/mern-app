import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box p={3} flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}
