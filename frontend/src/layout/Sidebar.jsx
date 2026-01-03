import { List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <List sx={{ width: 200 }}>
      <ListItemButton component={Link} to="/dashboard/users">Users</ListItemButton>
      <ListItemButton component={Link} to="/dashboard/orders">Orders</ListItemButton>
    </List>
  );
}
