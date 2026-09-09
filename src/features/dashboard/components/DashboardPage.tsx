"use client";

import { Alert, Box, Button, Stack } from "@mui/material";
import { useDashboard } from "../hooks/useDashboard";
import DashboardActivity from "./DashboardActivity";
import DashboardCategories from "./DashboardCategories";
import DashboardEmptyState from "./DashboardEmptyState";
import DashboardHeader from "./DashboardHeader";
import DashboardOverview from "./DashboardOverview";
import DashboardProducts from "./DashboardProducts";
import DashboardSkeleton from "./DashboardSkeleton";

export default function DashboardPage() {
  const { data, isLoading, isError, refetch } = useDashboard();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError) {
    return (
      <Stack sx={{ gap: 4 }}>
        <DashboardHeader />

        <Alert
          severity="error"
          action={
            <Button size="small" onClick={() => refetch()}>
              Retry
            </Button>
          }
        >
          Failed to load dashboard data.
        </Alert>
      </Stack>
    );
  }

  if (!data || data.totalProducts === 0) {
    return (
      <Stack sx={{ gap: 4 }}>
        <DashboardHeader />

        <DashboardEmptyState />
      </Stack>
    );
  }

  return (
    <Stack sx={{ gap: 4 }}>
      <DashboardHeader />

      <DashboardOverview
        totalProducts={data.totalProducts}
        totalCategories={data.totalCategories}
        averagePrice={data.averagePrice}
        averageRating={data.averageRating}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "2fr 1fr",
          },
          gap: 2,
          alignItems: "start",
        }}
      >
        <DashboardActivity categories={data.categorySummary} />

        <DashboardCategories categories={data.categorySummary} />
      </Box>

      <DashboardProducts products={data.products} />
    </Stack>
  );
}
