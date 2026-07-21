"use client";

import { Stack, Typography } from "@mui/material";

import { useProducts } from "@/features/products/hooks/useProducts";
import ProductCard from "./ProductCard";
import Link from "next/link";
import ProductSearch from "./ProductSearch";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function ProductList() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);
  const { data: products, isLoading, isError } = useProducts(debouncedKeyword);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography color="error">Error loading products.</Typography>;
  }

  if (!products?.length) {
    return <Typography>No products found.</Typography>;
  }

  const totalItems = products.length;
  const itemLabel = totalItems === 1 ? "item" : "items";

  return (
    <Stack spacing={2} sx={{ px: "20px" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
        <Typography variant="h6">Product List</Typography>

        <Typography variant="body2" color="text.secondary">
          • {totalItems} {itemLabel}
        </Typography>
      </Stack>

      <Stack spacing={2} sx={{ paddingBottom: "20px" }}>
        <ProductSearch value={keyword} onChange={setKeyword} />
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
