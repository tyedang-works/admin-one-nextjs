"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { loginSchema } from "../schemas/login.schema";
import { LoginFormValues } from "../types/auth.types";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();
  console.log(loginMutation.error?.response);
  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
      />

      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      {loginMutation.isError && (
        <Alert severity="error">
          {loginMutation.error.response?.data.message}
        </Alert>
      )}
      <Button type="submit" loading={loginMutation.isPending}>
        Login
      </Button>
    </form>
  );
};
