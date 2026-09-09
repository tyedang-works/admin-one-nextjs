import { Card, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface DashboardStatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
}

export default function DashboardStatCard({
  label,
  value,
  icon,
}: DashboardStatCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
        height: "100%",
      }}
    >
      <Stack sx={{ gap: 2 }}>
        <Stack
          sx={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1.5,
            bgcolor: "action.hover",
            color: "text.secondary",
          }}
        >
          {icon}
        </Stack>

        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
