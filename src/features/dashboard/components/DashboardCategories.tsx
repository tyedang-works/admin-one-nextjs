import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import { DashboardCategorySummary } from "../types/dashboard.types";

interface DashboardCategoriesProps {
  categories: DashboardCategorySummary[];
}

export default function DashboardCategories({
  categories,
}: DashboardCategoriesProps) {
  const topCategories = categories.slice(0, 5);

  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Top Categories
      </Typography>

      <Stack sx={{ mt: 2 }}>
        {topCategories.map((item, index) => (
          <Box key={item.category}>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1.5,
              }}
            >
              <Typography variant="body2">{item.category}</Typography>

              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {item.count}
              </Typography>
            </Stack>

            {index < topCategories.length - 1 && <Divider />}
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
