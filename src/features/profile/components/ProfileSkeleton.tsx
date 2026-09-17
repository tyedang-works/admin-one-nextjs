import { Card, Skeleton, Stack } from "@mui/material";

export default function ProfileSkeleton() {
  return (
    <Stack sx={{ gap: 4 }}>
      <Stack sx={{ gap: 0.75 }}>
        <Skeleton variant="text" width={120} height={48} />

        <Skeleton variant="text" width={280} height={24} />
      </Stack>

      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          gap: 2,
        }}
      >
        <Skeleton variant="circular" width={64} height={64} />

        <Stack sx={{ gap: 0.5 }}>
          <Skeleton variant="text" width={220} height={36} />

          <Skeleton variant="text" width={140} height={24} />

          <Skeleton variant="text" width={240} height={24} />
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "repeat(2, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        <ProfileCardSkeleton />
        <ProfileCardSkeleton />
      </Stack>
    </Stack>
  );
}

function ProfileCardSkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
      }}
    >
      <Stack sx={{ gap: 2.5, p: 3 }}>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 1.5,
          }}
        >
          <Skeleton variant="circular" width={24} height={24} />

          <Stack sx={{ gap: 0.5 }}>
            <Skeleton variant="text" width={180} height={30} />

            <Skeleton variant="text" width={220} height={20} />
          </Stack>
        </Stack>

        <Stack sx={{ gap: 0 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Stack
              key={index}
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 2,
                py: 1.25,
              }}
            >
              <Skeleton variant="text" width={80} />

              <Skeleton variant="text" width={140} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
