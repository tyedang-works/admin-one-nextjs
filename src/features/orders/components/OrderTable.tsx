import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Order } from "../types/order.types";

interface OrderTableProps {
  orders: Order[];
}

export default function OrderTable({ orders }: OrderTableProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Products</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} hover>
                <TableCell>
                  <Typography
                    component={Link}
                    href={`/orders/${order.id}`}
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
                    #{order.id}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {order.customerName}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {order.customerEmail}
                  </Typography>
                </TableCell>

                <TableCell align="right">{order.totalProducts}</TableCell>

                <TableCell align="right">{order.totalQuantity}</TableCell>

                <TableCell align="right">
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    ${order.discountedTotal.toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
