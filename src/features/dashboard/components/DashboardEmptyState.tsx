import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { Card, Stack, Typography } from "@mui/material";

export default function DashboardEmptyState() {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 6,
        borderRadius: 2,
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 1.5,
        }}
      >
        <Stack
          sx={{
            width: 48,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1.5,
            bgcolor: "action.hover",
            color: "text.secondary",
          }}
        >
          <Inventory2OutlinedIcon />
        </Stack>

        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          No products available
        </Typography>

        <Typography variant="body2" color="text.secondary">
          There are no products to display on the dashboard.
        </Typography>
      </Stack>
    </Card>
  );
}
