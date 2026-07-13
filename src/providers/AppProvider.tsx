"use client";

import { ReactNode } from "react";
import ReduxProvider from "./ReduxProvider";
import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <QueryProvider>{children}</QueryProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}