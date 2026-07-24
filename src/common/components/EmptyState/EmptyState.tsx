import { Box, Typography } from "@mui/material";

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
      }}
    >
      <Typography color="text.secondary">{message}</Typography>
    </Box>
  );
}
