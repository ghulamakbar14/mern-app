import { Box, Typography } from "@mui/material";

const RightSidebar = () => {
  return (
    <Box
      sx={{
        width: 280,
        borderLeft: "1px solid #E5E7EB",
        p: 2,
        display: { xs: "none", lg: "block" },
      }}
    >
      <Typography variant="subtitle1">Activity</Typography>
      <Typography variant="body2" color="text.secondary">
        No recent activity
      </Typography>
    </Box>
  );
};

export default RightSidebar;
