import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";

const Logo = ({ size = "md" }) => {
  const navigate = useNavigate();

  const sizes = {
    sm: { icon: 20, text: "0.9rem" },
    md: { icon: 26, text: "1.1rem" },
    lg: { icon: 32, text: "1.4rem" },
  };

  return (
    <Box
      onClick={() => navigate("/")}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <DashboardIcon
        sx={{
          fontSize: sizes[size].icon,
          color: "primary.main",
        }}
      />

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: sizes[size].text,
          color: "text.primary",
          letterSpacing: "0.5px",
        }}
      >
        MERN<span style={{ color: "#2563EB" }}>Panel</span>
      </Typography>
    </Box>
  );
};

export default Logo;
