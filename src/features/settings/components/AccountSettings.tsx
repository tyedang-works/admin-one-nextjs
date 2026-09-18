"use client";

import { useAppSelector } from "@/store/hooks";
import { Stack, TextField } from "@mui/material";

export default function AccountSettings() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Stack
      sx={{
        gap: 2,
      }}
    >
      <TextField
        label="Username"
        value={user?.username ?? ""}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        fullWidth
      />

      <TextField
        label="Email"
        value={user?.email ?? ""}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        fullWidth
      />
    </Stack>
  );
}
