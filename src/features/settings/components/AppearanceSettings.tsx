"use client";

import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function AppearanceSettings() {
  const { mode, setMode } = useColorScheme();

  return (
    <FormControl>
      <RadioGroup
        value={mode}
        onChange={(event) => {
          setMode(event.target.value as "light" | "dark");
        }}
      >
        <FormControlLabel value="light" control={<Radio />} label="Light" />

        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>
    </FormControl>
  );
}
