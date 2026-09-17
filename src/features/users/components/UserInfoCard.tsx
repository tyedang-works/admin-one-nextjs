import InfoCard from "@/components/ui/InfoCard";
import InfoRow from "@/components/ui/InfoRow";
import {
  BusinessOutlined,
  LocationOnOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { User } from "../types/user.types";

interface UserInfoCardProps {
  user: User;
}

export default function UserInfoCard({ user }: UserInfoCardProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "repeat(3, minmax(0, 1fr))",
        },
        gap: 2,
        alignItems: "start",
      }}
    >
      <InfoCard
        icon={<PersonOutlined />}
        title="Personal Information"
        description="Basic information about the user."
      >
        <InfoRow
          label="Full name"
          value={`${user.firstName} ${user.lastName}`}
        />
        <InfoRow label="Username" value={`@${user.username}`} />
        <InfoRow label="Email" value={user.email} />
        <InfoRow label="Phone" value={user.phone} />
        <InfoRow label="Gender" value={user.gender} />
        <InfoRow label="Date of birth" value={user.birthDate} />
        <InfoRow label="Age" value={String(user.age)} />
      </InfoCard>

      <InfoCard
        icon={<LocationOnOutlined />}
        title="Address"
        description="User's address information."
      >
        <InfoRow label="Address" value={user.address.address} />
        <InfoRow label="City" value={user.address.city} />
        <InfoRow label="State" value={user.address.state} />
        <InfoRow label="Country" value={user.address.country} />
        <InfoRow label="Postal code" value={user.address.postalCode} />
      </InfoCard>

      <InfoCard
        icon={<BusinessOutlined />}
        title="Company"
        description="User's company information."
      >
        <InfoRow label="Company" value={user.company.name} />
        <InfoRow label="Department" value={user.company.department} />
        <InfoRow label="Job title" value={user.company.title} />
      </InfoCard>
    </Box>
  );
}
