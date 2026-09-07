"use client";

import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Orders",
    href: "/orders",
  },
];

interface NavigationItemsProps {
  onNavigate?: () => void;
}

export default function NavigationItems({ onNavigate }: NavigationItemsProps) {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Box
            key={item.href}
            component={Link}
            href={item.href}
            onClick={onNavigate}
            sx={{
              display: "flex",
              alignItems: "center",
              minHeight: 40,
              px: 1.75,
              borderRadius: 2.5,
              color: isActive ? "primary.main" : "text.secondary",
              bgcolor: isActive ? "action.selected" : "transparent",
              fontSize: 14,
              fontWeight: isActive ? 600 : 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: "action.hover",
                color: "text.primary",
              },
            }}
          >
            {item.label}
          </Box>
        );
      })}
    </>
  );
}
