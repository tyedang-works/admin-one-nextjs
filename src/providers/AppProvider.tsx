"use client";

import { ReactNode } from "react";
import ReduxProvider from "./ReduxProvider";
import QueryProvider from "./QueryProvider";
import ThemeProvider from "./ThemeProvider";
import { AuthProvider } from "@/features/auth/providers/AuthProvider";
interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
