"use client";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect } from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    setMode("dark");
  }, [setMode]);

  const isDark = mode === "dark";

  const handleToggleMode = () => {
    setMode(isDark ? "light" : "dark");
  };

  return (
    <Stack
      sx={{
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        px: {
          xs: 2,
          sm: 3,
        },
        py: {
          xs: 3,
          sm: 4,
        },
        bgcolor: "rgb(5, 6, 10)",
      }}
    >
      {/* Background glow */}
      <Stack
        sx={{
          position: "absolute",
          top: "-25%",
          right: "-5%",
          width: {
            xs: 400,
            sm: 600,
            md: 800,
          },
          height: {
            xs: 400,
            sm: 600,
            md: 800,
          },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(33, 150, 243, 0.12) 0%, rgba(33, 150, 243, 0.04) 35%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Brand */}
      <Stack
        sx={{
          position: "absolute",
          top: {
            xs: 24,
            sm: 32,
          },
          left: {
            xs: 24,
            sm: 40,
          },
          flexDirection: "row",
          alignItems: "center",
          gap: 1.5,
          zIndex: 1,
        }}
      >
        <Stack
          sx={{
            width: 48,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1.5,
            bgcolor: "rgb(33, 150, 243)",
            color: "white",
            boxShadow: "0 8px 30px rgba(33, 150, 243, 0.2)",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            A
          </Typography>
        </Stack>

        <Typography
          variant="h6"
          sx={{
            color: "rgb(245, 245, 245)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Admin One
        </Typography>
      </Stack>

      {/* Theme toggle */}
      <IconButton
        onClick={handleToggleMode}
        aria-label="Toggle color mode"
        sx={{
          position: "absolute",
          top: {
            xs: 24,
            sm: 32,
          },
          right: {
            xs: 24,
            sm: 40,
          },
          width: 48,
          height: 48,
          color: "rgb(180, 185, 195)",
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.12)",
          bgcolor: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(12px)",
          "&:hover": {
            bgcolor: "rgba(255, 255, 255, 0.08)",
          },
        }}
      >
        {isDark ? (
          <LightModeOutlined fontSize="small" />
        ) : (
          <DarkModeOutlined fontSize="small" />
        )}
      </IconButton>

      {/* Login card */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 440,
          p: {
            xs: 3,
            sm: 4,
          },
          borderRadius: 4,
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.16)",
          bgcolor: "rgba(20, 22, 29, 0.72)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.45)",
        }}
      >
        <LoginForm />
      </Stack>

      {/* Footer */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: {
            xs: 20,
            sm: 28,
          },
          color: "rgb(120, 125, 140)",
          fontSize: "0.75rem",
          letterSpacing: "0.02em",
        }}
      >
        © 2026 Admin One. Built with Next.js and MUI.
      </Typography>
    </Stack>
  );
}
