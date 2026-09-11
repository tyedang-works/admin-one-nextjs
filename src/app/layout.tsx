import AppProvider from "@/providers/AppProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin One",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppProvider>{children}</AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
