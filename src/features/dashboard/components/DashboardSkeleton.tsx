import { Box, Card, Skeleton, Stack } from "@mui/material";

export default function DashboardSkeleton() {
  return (
    <Stack sx={{ gap: 3 }}>
      <Skeleton variant="text" width={240} height={48} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} variant="outlined" sx={{ p: 3 }}>
            <Stack sx={{ gap: 1 }}>
              <Skeleton width={100} />
              <Skeleton width={120} height={40} />
            </Stack>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "2fr 1fr",
          },
          gap: 2,
        }}
      >
        <Card variant="outlined" sx={{ p: 3 }}>
          <Skeleton width={160} />
          <Skeleton variant="rectangular" height={220} sx={{ mt: 2 }} />
        </Card>

        <Card variant="outlined" sx={{ p: 3 }}>
          <Skeleton width={160} />
          <Stack sx={{ gap: 2, mt: 2 }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} height={32} />
            ))}
          </Stack>
        </Card>
      </Box>

      <Card variant="outlined" sx={{ p: 3 }}>
        <Skeleton width={120} />
        <Stack sx={{ gap: 2, mt: 2 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} height={48} />
          ))}
        </Stack>
      </Card>
    </Stack>
  );
}
