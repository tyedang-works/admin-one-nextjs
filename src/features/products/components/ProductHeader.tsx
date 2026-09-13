import { Stack, Typography } from "@mui/material";

export default function ProductHeader() {
  return (
    <Stack sx={{ gap: 0.75 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
      >
        Products
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Manage and explore your product catalog.
      </Typography>
    </Stack>
  );
}
