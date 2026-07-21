"use client";

import { Stack, Typography } from "@mui/material";
import { useProduct } from "../hooks/useProducts";

interface Props {
  id: number;
}

export default function ProductDetail(props: Props) {
  const { id } = props;
  console.log(id, ":id")
  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography color="error">Error loading product.</Typography>;
  }

  if (!product) {
    return <>No product found.</>;
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
