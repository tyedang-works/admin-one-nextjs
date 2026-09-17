import GlobalFooter from "@/components/layouts/GlobalFooter";
import HeaderGlobal from "@/components/layouts/GlobalHeader";
import { AuthGuard } from "@/features/auth/components/AuthGuard";
import { Box } from "@mui/material";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderGlobal />

        <Box
          component="main"
          sx={{
            flex: 1,
            px: {
              xs: 2,
              sm: 3,
              lg: 4,
            },
            py: {
              xs: 3,
              sm: 4,
            },
          }}
        >
          {children}
        </Box>

        <GlobalFooter />
      </Box>
    </AuthGuard>
  );
}
