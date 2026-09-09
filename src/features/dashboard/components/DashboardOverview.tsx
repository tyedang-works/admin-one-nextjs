import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Box, Typography } from "@mui/material";
import DashboardStatCard from "./DashboardStatCard";

interface DashboardOverviewProps {
  totalProducts: number;
  totalCategories: number;
  averagePrice: number;
  averageRating: number;
}

export default function DashboardOverview({
  totalProducts,
  totalCategories,
  averagePrice,
  averageRating,
}: DashboardOverviewProps) {
  const stats = [
    {
      label: "Total Products",
      value: totalProducts.toString(),
      icon: <Inventory2OutlinedIcon />,
    },
    {
      label: "Categories",
      value: totalCategories.toString(),
      icon: <CategoryOutlinedIcon />,
    },
    {
      label: "Average Price",
      value: `$${averagePrice.toFixed(2)}`,
      icon: <AttachMoneyOutlinedIcon />,
    },
    {
      label: "Average Rating",
      value: averageRating.toFixed(2),
      icon: <StarBorderOutlinedIcon />,
    },
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Overview
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {stats.map((stat) => (
          <DashboardStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </Box>
    </Box>
  );
}
