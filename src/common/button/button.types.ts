import { ButtonProps } from "@mui/material";

export interface BaseButtonProps extends ButtonProps {
  loading?: boolean;
}

export type PrimaryButtonProps = Omit<
  BaseButtonProps,
  "variant" | "color"
>;