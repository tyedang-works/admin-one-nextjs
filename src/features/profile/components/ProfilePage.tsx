"use client";

import InfoCard from "@/components/ui/InfoCard";
import InfoRow from "@/components/ui/InfoRow";
import BusinessOutlined from "@mui/icons-material/BusinessOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import { Alert, Stack, Typography } from "@mui/material";
import { useProfile } from "../hooks/useProfile";
import ProfileHeader from "./ProfileHeader";
import ProfileSkeleton from "./ProfileSkeleton";

export default function ProfilePage() {
  const { data, isLoading, isError } = useProfile();

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (isError || !data) {
    return <Alert severity="error">Failed to load profile.</Alert>;
  }

  return (
    <Stack sx={{ gap: 4 }}>
      <Stack sx={{ gap: 0.5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Profile
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Manage your personal information.
        </Typography>
      </Stack>

      <ProfileHeader user={data} />

      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "repeat(2, minmax(0, 1fr))",
          },
          gap: 2,
          alignItems: "start",
        }}
      >
        <InfoCard
          icon={<PersonOutlined />}
          title="Personal Information"
          description="Basic information about your account."
        >
          <InfoRow
            label="Full name"
            value={`${data.firstName} ${data.lastName}`}
          />

          <InfoRow label="Username" value={`@${data.username}`} />

          <InfoRow label="Email" value={data.email} />

          <InfoRow label="Phone" value={data.phone} />

          <InfoRow label="Gender" value={data.gender} />

          <InfoRow label="Date of birth" value={data.birthDate} />
        </InfoCard>

        <InfoCard
          icon={<BusinessOutlined />}
          title="Company"
          description="Your current company information."
        >
          <InfoRow label="Company" value={data.company.name} />

          <InfoRow label="Department" value={data.company.department} />

          <InfoRow label="Job title" value={data.company.title} />
        </InfoCard>
      </Stack>
    </Stack>
  );
}
