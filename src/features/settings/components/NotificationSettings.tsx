"use client";

import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";

export default function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [productUpdates, setProductUpdates] = useState(false);

  return (
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={emailNotifications}
            onChange={(event) => setEmailNotifications(event.target.checked)}
          />
        }
        label={
          <Stack>
            <Typography variant="body1">Email notifications</Typography>

            <Typography variant="body2" color="text.secondary">
              Receive notifications about your account and activity.
            </Typography>
          </Stack>
        }
        sx={{
          mx: 0,
          alignItems: "flex-start",
          gap: 1,
        }}
      />

      <FormControlLabel
        control={
          <Switch
            checked={productUpdates}
            onChange={(event) => setProductUpdates(event.target.checked)}
          />
        }
        label={
          <Stack>
            <Typography variant="body1">Product updates</Typography>

            <Typography variant="body2" color="text.secondary">
              Receive updates about new products and features.
            </Typography>
          </Stack>
        }
        sx={{
          mx: 0,
          alignItems: "flex-start",
          gap: 1,
        }}
      />
    </Stack>
  );
}
