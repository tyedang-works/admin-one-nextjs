import { Product } from "@/features/products/types/product.types";
import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface DashboardProductsProps {
  products: Product[];
}

export default function DashboardProducts({
  products,
}: DashboardProductsProps) {
  const displayedProducts = products.slice(0, 6);

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Products
        </Typography>

        <Typography
          component={Link}
          href="/products"
          variant="body2"
          color="primary"
          sx={{
            fontWeight: 500,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          View all
        </Typography>
      </Stack>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: "50%",
                }}
              >
                Product
              </TableCell>

              <TableCell
                sx={{
                  width: "20%",
                }}
              >
                Category
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  width: "10%",
                }}
              >
                Price
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  width: "10%",
                }}
              >
                Rating
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  width: "10%",
                }}
              >
                Stock
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {displayedProducts.map((product) => (
              <TableRow key={product.id} hover>
                <TableCell>
                  <Stack
                    component={Link}
                    href={`/products/${product.id}`}
                    sx={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                      minWidth: 220,
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover .product-title": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={product.thumbnail}
                      alt={product.title}
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 1,
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      className="product-title"
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                      }}
                    >
                      {product.title}
                    </Typography>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {product.category}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                </TableCell>

                <TableCell align="right">{product.rating.toFixed(1)}</TableCell>

                <TableCell align="right">{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
