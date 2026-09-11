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
      <>
        <HeaderGlobal />

        <Box
          component="main"
          sx={{
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
      </>
    </AuthGuard>
  );
}
