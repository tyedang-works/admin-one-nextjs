import {
    Card,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const SKELETON_ROWS = 10;

export default function OrderSkeleton() {
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
            {Array.from({ length: SKELETON_ROWS }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton variant="text" width={40} />
                </TableCell>

                <TableCell>
                  <Skeleton variant="text" width={140} />
                  <Skeleton variant="text" width={180} />
                </TableCell>

                <TableCell align="right">
                  <Skeleton variant="text" width={30} sx={{ ml: "auto" }} />
                </TableCell>

                <TableCell align="right">
                  <Skeleton variant="text" width={30} sx={{ ml: "auto" }} />
                </TableCell>

                <TableCell align="right">
                  <Skeleton variant="text" width={80} sx={{ ml: "auto" }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
