"use client";

import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider
      theme={theme}
      defaultMode="light"
      disableTransitionOnChange
    >
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
