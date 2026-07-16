"use client";

import TextField from "@mui/material/TextField";
import { BaseTextFieldProps } from "./input.types";

const defaultStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
  },
};

export default function BaseTextField({
  sx,
  ...props
}: BaseTextFieldProps) {
  return (
    <TextField
      {...props}
      fullWidth
      variant="outlined"
      sx={{
        ...defaultStyles,
        ...sx,
      }}
    />
  );
}