"use client";

import {
  CloseOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  MenuOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useState } from "react";

import { useLogout } from "@/features/auth/hooks/useLogout";
import { useAppSelector } from "@/store/hooks";
import NavigationItems from "./NavigationItems";

export default function GlobalHeader() {
  const { mode, setMode } = useColorScheme();
  const user = useAppSelector((state) => state.auth.user);
  const handleLogout = useLogout();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  if (!mode || !user) {
    return null;
  }

  const open = Boolean(anchorEl);

  const handleToggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleCloseUserMenu();
    handleLogout();
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 64, md: 72 },
          px: { xs: 2, md: 3 },
          gap: { xs: 1, md: 3 },
        }}
      >
        {/* icon menu mobile */}
        <IconButton
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation"
          sx={{
            display: { xs: "flex", md: "none" },
            width: 40,
            height: 40,
          }}
        >
          <MenuOutlined fontSize="small" />
        </IconButton>

        {/* Brand */}
        <Stack
          sx={{
            gap: 1.5,
            flex: { xs: 1, md: "initial" },
            flexShrink: 0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2.5,
              bgcolor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              A
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Admin One
          </Typography>
        </Stack>

        {/* Navigation */}
        <Stack
          component="nav"
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 0.5,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <NavigationItems />
        </Stack>

        {/* Actions */}
        <Stack
          sx={{
            gap: 0.5,
            flexShrink: 0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Theme */}
          <IconButton
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            sx={{
              width: 40,
              height: 40,
            }}
          >
            {mode === "light" ? (
              <DarkModeOutlined fontSize="small" />
            ) : (
              <LightModeOutlined fontSize="small" />
            )}
          </IconButton>

          {/* Notifications */}
          <IconButton
            aria-label="Notifications"
            sx={{
              width: 40,
              height: 40,
            }}
          >
            <NotificationsNoneOutlined fontSize="small" />
          </IconButton>

          {/* User */}
          <IconButton
            onClick={handleOpenUserMenu}
            aria-label="Open user menu"
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{
              ml: 1,
              p: 0.5,
              borderRadius: 2,
            }}
          >
            <Stack
              sx={{
                gap: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 14,
                }}
              >
                {user.firstName[0]}
              </Avatar>

              <Box
                sx={{
                  display: { xs: "none", lg: "block" },
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {user.firstName}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "text.secondary",
                    lineHeight: 1.3,
                  }}
                >
                  {user.email}
                </Typography>
              </Box>
            </Stack>
          </IconButton>

          {/* User menu */}
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseUserMenu}
            slotProps={{
              paper: {
                sx: {
                  mt: 1,
                  minWidth: 200,
                  borderRadius: 2,
                },
              },
            }}
          >
            <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>

            <MenuItem onClick={handleCloseUserMenu}>Settings</MenuItem>

            <Divider />

            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>
        </Stack>
      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Drawer Header */}
          <Stack
            sx={{
              minHeight: 72,
              px: 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
              }}
            >
              Admin One
            </Typography>

            <IconButton
              onClick={handleCloseMobileMenu}
              aria-label="Close navigation"
            >
              <CloseOutlined fontSize="small" />
            </IconButton>
          </Stack>

          <Divider />

          {/* Navigation */}
          <Stack
            component="nav"
            sx={{
              gap: 0.5,
              p: 1.5,
            }}
          >
            <NavigationItems onNavigate={handleCloseMobileMenu} />
          </Stack>

          <Box sx={{ mt: "auto" }}>
            <Divider />

            <Box
              sx={{
                p: 1.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 44,
                  px: 1.5,
                  borderRadius: 2,
                  color: "text.secondary",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Settings
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
