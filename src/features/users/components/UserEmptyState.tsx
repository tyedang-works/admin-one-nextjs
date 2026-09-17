import { Box, Typography } from "@mui/material";

export default function UserEmptyState() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        No users yet
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        There are no users to display.
      </Typography>
    </Box>
  );
}
