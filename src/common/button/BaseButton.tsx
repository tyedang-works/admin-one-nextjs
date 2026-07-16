"use client";

import { Button, CircularProgress } from "@mui/material";
import { BaseButtonProps } from "./button.types";

const defaultStyles = {
  height: 44,
  borderRadius: 2,
  fontWeight: 600,
  textTransform: "none",
};

export default function BaseButton({
  children,
  loading = false,
  disabled,
  sx,
  ...props
}: BaseButtonProps) {
  return (
    <Button
      disabled={loading || disabled}
      sx={{
        ...defaultStyles,
        ...sx,
      }}
      {...props}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </Button>
  );
}
