"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  LockOutlined,
  PersonOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { loginSchema } from "../schemas/login.schema";
import { LoginFormValues } from "../types/auth.types";

export const LoginForm = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  const colors = {
    heading: isDark
      ? "rgb(245, 245, 245)"
      : "rgb(25, 28, 35)",
    body: isDark
      ? "rgb(155, 160, 175)"
      : "rgb(100, 105, 115)",
    muted: isDark
      ? "rgb(125, 130, 145)"
      : "rgb(140, 145, 155)",
    inputText: isDark
      ? "rgb(230, 232, 238)"
      : "rgb(40, 43, 50)",
    inputIcon: isDark
      ? "rgb(145, 150, 165)"
      : "rgb(120, 125, 135)",
    inputBackground: isDark
      ? "rgba(255, 255, 255, 0.04)"
      : "rgb(255, 255, 255)",
    inputBorder: isDark
      ? "rgba(255, 255, 255, 0.14)"
      : "rgb(210, 214, 222)",
    inputHoverBorder: isDark
      ? "rgba(255, 255, 255, 0.25)"
      : "rgb(175, 182, 192)",
    divider: isDark
      ? "rgba(255, 255, 255, 0.12)"
      : "rgb(225, 228, 233)",
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      bgcolor: colors.inputBackground,

      "& fieldset": {
        borderColor: colors.inputBorder,
      },

      "&:hover fieldset": {
        borderColor: colors.inputHoverBorder,
      },

      "&.Mui-focused fieldset": {
        borderColor: "rgb(33, 150, 243)",
      },
    },

    "& .MuiInputBase-input": {
      color: colors.inputText,
    },

    "& .MuiInputBase-input::placeholder": {
      color: colors.muted,
      opacity: 1,
    },

    "& .MuiInputAdornment-root": {
      color: colors.inputIcon,
    },
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        gap: 2.25,
      }}
    >
      {/* Header */}
      <Stack
        sx={{
          alignItems: "center",
          textAlign: "center",
          gap: 0.75,
          mb: 1,
        }}
      >
        <Stack
          sx={{
            width: 56,
            height: 56,
            alignItems: "center",
            justifyContent: "center",
            mb: 1.25,
            borderRadius: "50%",
            color: "rgb(33, 150, 243)",
            border: "1px solid",
            borderColor: isDark
              ? "rgba(33, 150, 243, 0.4)"
              : "rgb(160, 210, 255)",
            bgcolor: isDark
              ? "rgba(33, 150, 243, 0.08)"
              : "rgb(240, 248, 255)",
          }}
        >
          <LockOutlined />
        </Stack>

        <Typography
          variant="h4"
          sx={{
            color: colors.heading,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Sign in
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: colors.body,
          }}
        >
          Please enter your details to sign in.
        </Typography>
      </Stack>

      {/* Fields */}
      <Stack sx={{ gap: 1.75 }}>
        <TextField
          fullWidth
          placeholder="Enter your username"
          autoComplete="username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlined fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          sx={inputSx}
        />

        <Stack sx={{ gap: 0.75 }}>
          <TextField
            fullWidth
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      size="small"
                      onClick={() =>
                        setShowPassword((value) => !value)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      sx={{
                        color: colors.inputIcon,
                      }}
                    >
                      {showPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={inputSx}
          />

          <Stack
            sx={{
              alignItems: "flex-end",
            }}
          >
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "rgb(33, 150, 243)",
                fontSize: "0.75rem",
              }}
            >
              Forgot Password?
            </Link>
          </Stack>
        </Stack>
      </Stack>

      {/* Remember me */}
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={(event) =>
              setRememberMe(event.target.checked)
            }
            size="small"
            sx={{
              color: colors.inputIcon,
              "&.Mui-checked": {
                color: "rgb(33, 150, 243)",
              },
            }}
          />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              color: colors.body,
            }}
          >
            Remember me
          </Typography>
        }
        sx={{
          alignSelf: "flex-start",
          m: 0,
        }}
      />

      {/* Error */}
      {loginMutation.isError && (
        <Alert severity="error">
          {loginMutation.error.response?.data.message ??
            "Unable to sign in. Please try again."}
        </Alert>
      )}

      {/* Sign in */}
      <Button
        type="submit"
        variant="contained"
        size="large"
        loading={loginMutation.isPending}
        fullWidth
        sx={{
          minHeight: 50,
          borderRadius: 1.5,
          bgcolor: "rgb(33, 150, 243)",
          color: "rgb(255, 255, 255)",
          fontWeight: 600,
          textTransform: "none",
          boxShadow:
            "0 8px 24px rgba(33, 150, 243, 0.18)",
          "&:hover": {
            bgcolor: "rgb(30, 136, 229)",
            boxShadow:
              "0 10px 28px rgba(33, 150, 243, 0.25)",
          },
        }}
      >
        Sign in
      </Button>

      {/* Divider */}
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: 1.5,
          my: 0.5,
        }}
      >
        <Stack
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: colors.divider,
          }}
        />

        <Typography
          variant="caption"
          sx={{
            color: colors.muted,
          }}
        >
          OR
        </Typography>

        <Stack
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: colors.divider,
          }}
        />
      </Stack>

      {/* Google */}
      <Button
        variant="outlined"
        size="large"
        fullWidth
        disabled
        sx={{
          minHeight: 50,
          borderRadius: 1.5,
          color: colors.body,
          borderColor: colors.inputBorder,
          textTransform: "none",
          fontWeight: 500,

          "&.Mui-disabled": {
            color: colors.muted,
            borderColor: colors.inputBorder,
          },
        }}
      >
        Continue with Google
      </Button>

      {/* Sign up */}
      <Typography
        variant="body2"
        sx={{
          color: colors.body,
          textAlign: "center",
          mt: 0.5,
        }}
      >
        Don&apos;t have an account?{" "}
        <Link
          href="#"
          underline="hover"
          sx={{
            color: "rgb(33, 150, 243)",
            fontWeight: 500,
          }}
        >
          Sign up
        </Link>
      </Typography>
    </Stack>
  );
};