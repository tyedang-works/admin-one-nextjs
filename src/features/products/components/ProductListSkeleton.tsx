"use client";

import { PAGE_SIZE } from "@/constants/pagination.constants";
import { Card, CardContent, Skeleton, Stack } from "@mui/material";

export default function ProductListSkeleton() {
  return (
    <Stack spacing={2} sx={{ px: "20px" }}>
      {Array.from({ length: PAGE_SIZE }).map((_, index) => (
        <Card key={index}>
          <CardContent>
            <Stack spacing={1}>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
