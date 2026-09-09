"use client";

import PrimaryButton from "@/common/button/PrimaryButton";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { Stack, Typography } from "@mui/material";

export default function ProductHeader() {
  const handleLogout = useLogout();

  return (
    <Stack direction={"row"} spacing={2}>
      <Typography variant="h4">Products</Typography>
      <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
    </Stack>
  );
}
