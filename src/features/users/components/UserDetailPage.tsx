"use client";

import { Alert, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useUser } from "../hooks/useUser";
import UserInfoCard from "./UserInfoCard";

interface UserDetailPageProps {
  id: number;
}

export default function UserDetailPage({ id }: UserDetailPageProps) {
  const { data, isLoading, isError } = useUser(id);

  if (isLoading) {
    return <Typography>Loading user...</Typography>;
  }

  if (isError || !data) {
    return (
      <Stack sx={{ gap: 2 }}>
        <Alert severity="error">Failed to load user.</Alert>

        <Button
          component={Link}
          href="/users"
          variant="outlined"
          sx={{ alignSelf: "flex-start" }}
        >
          Back to Users
        </Button>
      </Stack>
    );
  }

  return (
    <Stack sx={{ gap: 4 }}>
      <Stack sx={{ gap: 1.5 }}>
        <Button
          component={Link}
          href="/users"
          variant="text"
          sx={{ alignSelf: "flex-start" }}
        >
          Back to Users
        </Button>

        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {data.firstName} {data.lastName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            User profile and account information
          </Typography>
        </Stack>
      </Stack>

      <UserInfoCard user={data} />
    </Stack>
  );
}
