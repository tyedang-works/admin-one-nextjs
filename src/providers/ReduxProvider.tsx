"use client";

import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function ReduxProvider({ children }: Props) {
  return <>{children}</>;
}