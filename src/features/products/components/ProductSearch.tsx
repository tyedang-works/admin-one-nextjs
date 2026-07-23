"use client";

import { TextField } from "@mui/material";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}
export default function ProductSearch({ value, onChange }: ProductSearchProps) {
  return (
    <TextField
      fullWidth
      placeholder="Search products..."
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
