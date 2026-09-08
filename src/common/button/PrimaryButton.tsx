"use client";

import BaseButton from "./BaseButton";
import { PrimaryButtonProps } from "./button.types";

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <BaseButton
      {...props}
      variant="contained"
      color="primary"
    />
  );
}
