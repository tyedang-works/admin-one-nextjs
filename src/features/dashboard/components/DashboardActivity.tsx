import { Box, Card, Stack, Typography } from "@mui/material";
import { DashboardCategorySummary } from "../types/dashboard.types";

interface DashboardActivityProps {
  categories: DashboardCategorySummary[];
}

export default function DashboardActivity({
  categories,
}: DashboardActivityProps) {
  const topCategories = categories.slice(0, 5);

  const maxCount = topCategories[0]?.count ?? 1;

  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Product activity
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        Products by category
      </Typography>

      <Stack sx={{ gap: 2, mt: 3 }}>
        {topCategories.map((item) => {
          const percentage = (item.count / maxCount) * 100;

          return (
            <Stack key={item.category} sx={{ gap: 1 }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 500,
                  }}
                >
                  {item.category}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.count}
                </Typography>
              </Stack>

              <Box
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: "action.hover",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${percentage}%`,
                    height: "100%",
                    bgcolor: "primary.main",
                    borderRadius: 4,
                  }}
                />
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Card>
  );
}
