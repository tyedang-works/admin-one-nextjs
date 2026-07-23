"use client";

import EmptyState from "@/common/components/EmptyState/EmptyState";
import ErrorState from "@/common/components/ErrorState/ErrorState";
import { Stack, Typography } from "@mui/material";
import { useProduct } from "../hooks/useProducts";

interface Props {
  id: number;
}

export default function ProductDetail(props: Props) {
  const { id } = props;
  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <ErrorState message="Failed to load products." />;
  }

  if (!product) {
    return <EmptyState message="No products found." />;
  }

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h6">{product.title}</Typography>

        <Typography variant="h6">Price: {product.price}</Typography>

        <Typography variant="h6">Category: {product.category}</Typography>

        <Typography variant="h6">{product.description}</Typography>
      </Stack>
    </>
  );
}
