"use client";

import { TextField } from "@mui/material";

interface UserSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function UserSearch({ value, onChange }: UserSearchProps) {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder="Search users..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
