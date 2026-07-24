"use client";

import EmptyState from "@/common/components/EmptyState/EmptyState";
import ErrorState from "@/common/components/ErrorState/ErrorState";
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
import ProductPagination from "./ProductPagination";
import ProductSearch from "./ProductSearch";
import ProductSort from "./ProductSort";

export default function ProductList() {
  const [filters, setFilters] = useState<ProductFilters>({
    keyword: "",
    category: "",
    page: 1,
    sort: PRODUCT_SORT.DEFAULT,
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

  //sort
  const handleSortChange = (value: ProductSortValue) => {
    setFilters((prev) => ({
      ...prev,
      sort: value,
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

  const { products = [], total = 0, limit = PAGE_SIZE } = data ?? {};
  const totalPages = Math.ceil(total / limit);

  const itemLabel = total === 1 ? "item" : "items";

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  if (isError) {
    return <ErrorState message="Failed to load products." />;
  }

  if (products?.length === 0) {
    return <EmptyState message="No products found." />;
  }

  return (
    <Stack spacing={2} sx={{ px: "20px" }}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
        <Typography variant="h6">Product List</Typography>

        <Typography variant="body2" color="text.secondary">
          • {total} {itemLabel}
        </Typography>
      </Stack>

      <ProductCategoryFilter
        value={filters.category}
        onChange={handleCategoryChange}
      />

      <ProductSort value={filters.sort} onChange={handleSortChange} />
      <ProductSearch value={filters.keyword} onChange={handleKeywordChange} />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ProductPagination
          page={filters.page}
          onChange={handlePageChange}
          totalPages={totalPages}
        />
      </Box>

      <Stack spacing={2} sx={{ paddingBottom: "20px" }}>
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
