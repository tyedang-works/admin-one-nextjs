"use client";

import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Product } from "../types/product.types";

interface Props {
  product: Product;
}
export default function ProductCard(props: Props) {
  const { product } = props;
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">
            {product.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Price: ${product.price.toFixed(2)}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Category: {product.category}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}