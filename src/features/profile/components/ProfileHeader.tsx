import { User } from "@/features/users/types/user.types";
import { Avatar, Stack, Typography } from "@mui/material";

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: {
          xs: "flex-start",
          sm: "center",
        },
        gap: 2,
      }}
    >
      <Avatar
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        sx={{
          width: 64,
          height: 64,
        }}
      />

      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {user.firstName} {user.lastName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          @{user.username}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </Stack>
    </Stack>
  );
}
