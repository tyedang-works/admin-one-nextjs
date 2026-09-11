"use client";

import Pagination from "@/common/components/Pagination";
import { Alert, Button, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { ORDER_PAGE_SIZE } from "../constants/order.constants";
import { useOrders } from "../hooks/useOrders";
import OrderEmptyState from "./OrderEmptyState";
import OrderSearch from "./OrderSearch";
import OrderSkeleton from "./OrderSkeleton";
import OrderTable from "./OrderTable";

export default function OrderPage() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, refetch } = useOrders();

  const filteredOrders = useMemo(() => {
    if (!data) {
      return [];
    }

    const normalizedKeyword = keyword.trim().toLowerCase();

    if (!normalizedKeyword) {
      return data.orders;
    }

    return data.orders.filter((order) => {
      return (
        order.id.toString().includes(normalizedKeyword) ||
        order.customerName.toLowerCase().includes(normalizedKeyword) ||
        order.customerEmail.toLowerCase().includes(normalizedKeyword)
      );
    });
  }, [data, keyword]);

  const pageCount = Math.ceil(filteredOrders.length / ORDER_PAGE_SIZE);

  const paginatedOrders = useMemo(() => {
    const startIndex = (page - 1) * ORDER_PAGE_SIZE;
    const endIndex = startIndex + ORDER_PAGE_SIZE;

    return filteredOrders.slice(startIndex, endIndex);
  }, [filteredOrders, page]);

  const handleSearchChange = (value: string) => {
    setKeyword(value);
    setPage(1);
  };

  if (isLoading) {
    return <OrderSkeleton />;
  }

  if (isError || !data) {
    return (
      <Stack sx={{ gap: 2 }}>
        <Alert severity="error">Failed to load orders.</Alert>

        <Button
          variant="outlined"
          onClick={() => refetch()}
          sx={{
            alignSelf: "flex-start",
          }}
        >
          Retry
        </Button>
      </Stack>
    );
  }

  return (
    <Stack sx={{ gap: 4 }}>
      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Orders
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Manage and review your orders
        </Typography>
      </Stack>

      {data.orders.length === 0 ? (
        <OrderEmptyState />
      ) : (
        <>
          <OrderSearch value={keyword} onChange={handleSearchChange} />

          {filteredOrders.length > 0 ? (
            <>
              <OrderTable orders={paginatedOrders} />

              {pageCount > 1 && (
                <Stack
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Pagination
                    page={page}
                    totalPages={pageCount}
                    onChange={setPage}
                  />
                </Stack>
              )}
            </>
          ) : (
            <Alert severity="info">No orders found.</Alert>
          )}
        </>
      )}
    </Stack>
  );
}
