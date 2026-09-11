"use client";

import { Stack } from "@mui/material";
import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";

export default function ProductPage() {
  return (
    <Stack spacing={2}>
      <ProductHeader />
      <ProductList />
    </Stack>
  );
}
