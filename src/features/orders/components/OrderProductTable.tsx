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
import { OrderProduct } from "../types/order.types";

interface OrderProductTableProps {
  products: OrderProduct[];
}

export default function OrderProductTable({
  products,
}: OrderProductTableProps) {
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
              <TableCell>Product</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {product.title}
                  </Typography>
                </TableCell>

                <TableCell align="right">{product.quantity}</TableCell>

                <TableCell align="right">${product.price.toFixed(2)}</TableCell>

                <TableCell align="right">
                  {product.discountPercentage.toFixed(2)}%
                </TableCell>

                <TableCell align="right">
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    ${product.discountedTotal.toFixed(2)}
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
