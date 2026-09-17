"use client";

import Pagination from "@/common/components/Pagination";
import { Alert, Button, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserEmptyState from "./UserEmptyState";
import UserSearch from "./UserSearch";
import UserSkeleton from "./UserSkeleton";
import UserTable from "./UserTable";

const USER_PAGE_SIZE = 10;

export default function UserPage() {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, refetch } = useUsers();

  const filteredUsers = useMemo(() => {
    const users = data?.users ?? [];
    const normalizedKeyword = keyword.trim().toLowerCase();

    if (!normalizedKeyword) {
      return users;
    }

    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

      return (
        String(user.id).includes(normalizedKeyword) ||
        fullName.includes(normalizedKeyword) ||
        user.username.toLowerCase().includes(normalizedKeyword) ||
        user.email.toLowerCase().includes(normalizedKeyword)
      );
    });
  }, [data?.users, keyword]);

  const pageCount = Math.ceil(filteredUsers.length / USER_PAGE_SIZE);

  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * USER_PAGE_SIZE;

    return filteredUsers.slice(startIndex, startIndex + USER_PAGE_SIZE);
  }, [filteredUsers, page]);

  const handleSearchChange = (value: string) => {
    setKeyword(value);
    setPage(1);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <UserSkeleton />;
  }

  if (isError) {
    return (
      <Stack sx={{ gap: 2 }}>
        <Alert severity="error">Failed to load users.</Alert>

        <Button
          variant="outlined"
          onClick={() => refetch()}
          sx={{ alignSelf: "flex-start" }}
        >
          Retry
        </Button>
      </Stack>
    );
  }

  if (!data?.users.length) {
    return <UserEmptyState />;
  }

  return (
    <Stack sx={{ gap: 3 }}>
      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Users
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Manage and view user information.
        </Typography>
      </Stack>

      <UserSearch value={keyword} onChange={handleSearchChange} />

      {filteredUsers.length > 0 ? (
        <>
          <UserTable users={paginatedUsers} />

          {pageCount > 1 && (
            <Stack
              sx={{
                alignItems: "center",
              }}
            >
              <Pagination
                page={page}
                totalPages={pageCount}
                onChange={handlePageChange}
              />
            </Stack>
          )}
        </>
      ) : (
        <Alert severity="info">No users found.</Alert>
      )}
    </Stack>
  );
}
