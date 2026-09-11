"use client";

import { TextField } from "@mui/material";

interface OrderSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function OrderSearch({ value, onChange }: OrderSearchProps) {
  return (
    <TextField
      fullWidth
      placeholder="Search orders..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      size="small"
    />
  );
}
