"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

import { useAppSelector } from "@/store/hooks";

interface GuestGuardProps {
  children: ReactNode;
}

export const GuestGuard = ({ children }: GuestGuardProps) => {
  const router = useRouter();

  const { accessToken, isHydrated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    if (accessToken) {
      router.replace("/products");
    }
  }, [isHydrated, accessToken, router]);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  if (accessToken) {
    return null;
  }

  return children;
};
