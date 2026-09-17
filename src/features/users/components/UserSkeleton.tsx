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

export default function UserSkeleton() {
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
              <TableCell>User</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Company</TableCell>
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
