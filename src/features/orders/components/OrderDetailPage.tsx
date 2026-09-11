"use client";

import {
    Alert,
    Button,
    Card,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { useOrder } from "../hooks/useOrder";
import OrderProductTable from "./OrderProductTable";

interface OrderDetailPageProps {
  id: number;
}

export default function OrderDetailPage({ id }: OrderDetailPageProps) {
  const { data, isLoading, isError } = useOrder(id);

  if (isLoading) {
    return <Typography>Loading order...</Typography>;
  }

  if (isError || !data) {
    return (
      <Stack sx={{ gap: 2 }}>
        <Alert severity="error">Failed to load order.</Alert>

        <Button
          component={Link}
          href="/orders"
          variant="outlined"
          sx={{
            alignSelf: "flex-start",
          }}
        >
          Back to Orders
        </Button>
      </Stack>
    );
  }

  return (
    <Stack sx={{ gap: 4 }}>
      <Stack sx={{ gap: 1.5 }}>
        <Button
          component={Link}
          href="/orders"
          variant="text"
          sx={{
            alignSelf: "flex-start",
          }}
        >
          Back to Orders
        </Button>

        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Order #{data.id}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Order details and customer information
          </Typography>
        </Stack>
      </Stack>

      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Stack sx={{ gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Customer
            </Typography>

            <Stack sx={{ gap: 0.5 }}>
              <Typography variant="body2">{data.customerName}</Typography>

              <Typography variant="body2" color="text.secondary">
                {data.customerEmail}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Stack sx={{ gap: 1.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Products
        </Typography>

        <OrderProductTable products={data.products} />
      </Stack>

      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Stack sx={{ gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Order Summary
            </Typography>

            <Stack sx={{ gap: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Products
                </Typography>

                <Typography variant="body2">{data.totalProducts}</Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Quantity
                </Typography>

                <Typography variant="body2">{data.totalQuantity}</Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Total
                </Typography>

                <Typography variant="body2">
                  ${data.total.toFixed(2)}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Discounted Total
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  ${data.discountedTotal.toFixed(2)}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
