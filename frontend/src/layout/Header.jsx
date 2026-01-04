import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserMenu from "../components/UserMenu";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Logo />
          <Typography variant="h6">MERN Dashboard</Typography>
        </Box>

        {/* Right: Actions */}
        <Box>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
