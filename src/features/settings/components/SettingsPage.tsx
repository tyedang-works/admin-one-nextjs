"use client";

import { Box, Stack, Typography } from "@mui/material";
import AccountSettings from "./AccountSettings";
import AppearanceSettings from "./AppearanceSettings";
import NotificationSettings from "./NotificationSettings";
import SettingsSection from "./SettingsSection";

export default function SettingsPage() {
  return (
    <Stack
      sx={{
        gap: 3,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          Settings
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Manage your application preferences and account settings.
        </Typography>
      </Box>

      <SettingsSection
        title="Appearance"
        description="Customize how the application looks."
      >
        <AppearanceSettings />
      </SettingsSection>

      <SettingsSection
        title="Notifications"
        description="Manage your notification preferences."
      >
        <NotificationSettings />
      </SettingsSection>

      <SettingsSection
        title="Account"
        description="View your account information."
      >
        <AccountSettings />
      </SettingsSection>
    </Stack>
  );
}
