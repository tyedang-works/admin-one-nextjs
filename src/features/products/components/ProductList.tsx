"use client";

import EmptyState from "@/common/components/EmptyState/EmptyState";
import ErrorState from "@/common/components/ErrorState/ErrorState";
import Pagination from "@/common/components/Pagination";
import { PAGE_SIZE } from "@/constants/pagination.constants";
import { useProducts } from "@/features/products/hooks/useProducts";
import { useDebounce } from "@/hooks/useDebounce";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import {
  PRODUCT_SORT,
  ProductSortValue,
} from "../constants/product-sort.constants";
import { ProductFilters } from "../types/product.types";
import ProductCard from "./ProductCard";
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductListSkeleton from "./ProductListSkeleton";
import ProductSearch from "./ProductSearch";
import ProductSort from "./ProductSort";

export default function ProductList() {
  const [filters, setFilters] = useState<ProductFilters>({
    keyword: "",
    category: "",
    page: 1,
    sort: PRODUCT_SORT.DEFAULT,
  });

  const handleKeywordChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      keyword: value,
      category: "",
      page: 1,
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      keyword: "",
      category: value,
      page: 1,
    }));
  };

  const handleSortChange = (value: ProductSortValue) => {
    setFilters((prev) => ({
      ...prev,
      sort: value,
      page: 1,
    }));
  };

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

  const { products = [], total = 0, limit = PAGE_SIZE } = data ?? {};

  const totalPages = Math.ceil(total / limit);

  const itemLabel = total === 1 ? "product" : "products";

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  if (isError) {
    return <ErrorState message="Failed to load products." />;
  }

  if (products.length === 0) {
    return <EmptyState message="No products found." />;
  }

  return (
    <Stack sx={{ gap: 3 }}>
      {/* Filters */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "2fr 1fr 1fr",
          },
          gap: 1.5,
        }}
      >
        <ProductSearch value={filters.keyword} onChange={handleKeywordChange} />

        <ProductCategoryFilter
          value={filters.category}
          onChange={handleCategoryChange}
        />

        <ProductSort value={filters.sort} onChange={handleSortChange} />
      </Box>

      {/* Result count */}
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {total} {itemLabel}
        </Typography>
      </Stack>

      {/* Products */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            style={{
              textDecoration: "none",
              color: "inherit",
              minWidth: 0,
            }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </Box>

      {/* Pagination */}
      {totalPages > 1 && (
        <Stack
          sx={{
            alignItems: "center",
            pt: 1,
            pb: 2,
          }}
        >
          <Pagination
            page={filters.page}
            onChange={handlePageChange}
            totalPages={totalPages}
          />
        </Stack>
      )}
    </Stack>
  );
}
