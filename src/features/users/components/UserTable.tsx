import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import Link from "next/link";
import { User } from "../types/user.types";

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
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
              <TableCell>Phone</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Typography
                    component={Link}
                    href={`/users/${user.id}`}
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
                    {user.firstName} {user.lastName}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    @{user.username}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body2">{user.email}</Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body2">{user.phone}</Typography>
                </TableCell>

                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    {user.role}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {user.company.name}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {user.company.title}
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
