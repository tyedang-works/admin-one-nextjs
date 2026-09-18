import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function SettingsSection({
  title,
  description,
  children,
}: SettingsSectionProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        p: { xs: 2, sm: 3 },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {description}
        </Typography>
      </Box>

      {children}
    </Card>
  );
}
