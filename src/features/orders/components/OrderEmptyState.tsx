import { Box, Typography } from "@mui/material";

export default function OrderEmptyState() {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        No orders yet
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        There are no orders to display.
      </Typography>
    </Box>
  );
}
