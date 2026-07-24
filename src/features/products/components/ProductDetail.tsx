"use client";

import EmptyState from "@/common/components/EmptyState/EmptyState";
import ErrorState from "@/common/components/ErrorState/ErrorState";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useProduct } from "../hooks/useProducts";
import ProductDetailSkeleton from "./ProductDetailSkeleton";

interface Props {
  id: number;
}

export default function ProductDetail(props: Props) {
  const { id } = props;
  const { data: product, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return <ProductDetailSkeleton />
  }

  if (isError) {
    return <ErrorState message="Failed to load products." />;
  }

  if (!product) {
    return <EmptyState message="No products found." />;
  }

  return (
    <Stack spacing={2} sx={{ py: "20px", px: "20px" }}>
      <Grid container spacing={2}>
        {product.images?.[0] &&
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <Image
              src={product.images[0]}
              alt={product.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 420,
                objectFit: "contain",
              }}
            />
          </Grid>}

        <Grid
          size={{
            xs: "grow",
            md: 8,
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 1,
          }}>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body1">Price: {product.price}</Typography>
          <Typography variant="body1">Category: {product.category}</Typography>
          <Typography variant="body2">{product.description}</Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
