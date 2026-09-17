import { Box, Container, Typography } from "@mui/material";

export default function GlobalFooter() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        mt: "auto",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 2,
            sm: 3,
            lg: 4,
          },
          py: 2,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "center",
          }}
        >
          © 2026 Admin One. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
