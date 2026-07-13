"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function QueryProvider({ children }: Props) {
  return <>{children}</>;
}