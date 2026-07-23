"use client";

import { useProducts } from "@/features/products/hooks/useProducts";
import { useDebounce } from "@/hooks/useDebounce";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { ProductFilters } from "../types/product.types";
import ProductCard from "./ProductCard";
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductPagination from "./ProductPagination";
import ProductSearch from "./ProductSearch";

export default function ProductList() {
  const [filters, setFilters] = useState<ProductFilters>({
    keyword: "",
    category: "",
    page: 1,
  });

  //keyword
  const handleKeywordChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      keyword: value,
      category: "",
      page: 1,
    }));
  };

  //category
  const handleCategoryChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      keyword: "",
      category: value,
      page: 1,
    }));
  };

  //pagination
  const handlePageChange = (page: number) => {
    setFilters((prev) => ({
      ...prev,
      page,
    }));
  };

  const debouncedKeyword = useDebounce(filters.keyword);
  const queryFilters = {
    ...filters,
    keyword: debouncedKeyword,
  };

  const { data, isLoading, isError } = useProducts(queryFilters);

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

  return (
    <Stack spacing={2} sx={{ px: "20px" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
        <Typography variant="h6">Product List</Typography>

        <Typography variant="body2" color="text.secondary">
          • {total} {itemLabel}
        </Typography>
      </Stack>

      <Box sx={{}}>
        <ProductCategoryFilter
          value={filters.category}
          onChange={handleCategoryChange}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ProductPagination
          page={filters.page}
          onChange={handlePageChange}
          totalPages={totalPages} />
      </Box>

      <Stack spacing={2} sx={{ paddingBottom: "20px" }}>
        <ProductSearch
          value={filters.keyword}
          onChange={handleKeywordChange}
        />
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
