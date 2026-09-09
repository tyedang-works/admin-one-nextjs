import { Stack, Typography } from "@mui/material";

export default function DashboardHeader() {
  return (
    <Stack sx={{ gap: 0.5 }}>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Products dashboard
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Overview of your product catalog
      </Typography>
    </Stack>
  );
}
