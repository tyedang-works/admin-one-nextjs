"use client";

import { Box, Stack, Typography } from "@mui/material";

import { useProducts } from "@/features/products/hooks/useProducts";
import { useDebounce } from "@/hooks/useDebounce";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";
import ProductSearch from "./ProductSearch";

export default function ProductList() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const debouncedKeyword = useDebounce(keyword);

  const { data, isLoading, isError } = useProducts(debouncedKeyword, page);

  const products = data?.products ?? [];

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography color="error">Error loading products.</Typography>;
  }

  if (!products?.length) {
    return <Typography>No products found.</Typography>;
  }

  const total = data?.total ?? 0;
  const limit = data?.limit ?? 10;
  const totalPages = Math.ceil(total / limit);
  const itemLabel = total === 1 ? "item" : "items";

  const handleKeywordChange = (value: string) => {
    setPage(1);
    setKeyword(value);
  };

  return (
    <Stack spacing={2} sx={{ px: "20px" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
        <Typography variant="h6">Product List</Typography>

        <Typography variant="body2" color="text.secondary">
          • {total} {itemLabel}
        </Typography>
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ProductPagination page={page} onChange={setPage} totalPages={totalPages} />
      </Box>

      <Stack spacing={2} sx={{ paddingBottom: "20px" }}>
        <ProductSearch value={keyword} onChange={handleKeywordChange} />
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
