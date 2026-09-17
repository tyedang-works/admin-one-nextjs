import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function InfoCard({
  icon,
  title,
  description,
  children,
}: InfoCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Stack sx={{ gap: 2.5 }}>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "text.secondary",
                mt: 0.25,
              }}
            >
              {icon}
            </Box>

            <Stack sx={{ gap: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Stack>
          </Stack>

          <Stack sx={{ gap: 0 }}>{children}</Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
