"use client";

import { Grid, Skeleton, Stack } from "@mui/material";

export default function ProductDetailSkeleton() {
  return (
    <Stack spacing={2} sx={{ py: "20px", px: "20px", minHeight: "468px" }}>
      <Grid container spacing={2}>
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Skeleton variant="rectangular" width={"100%"} height={"468px"} />
        </Grid>
        <Grid
          size={{
            xs: "grow",
            md: 8,
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "468px",
            gap: 1,
          }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton width="60%" key={index} />
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
}
