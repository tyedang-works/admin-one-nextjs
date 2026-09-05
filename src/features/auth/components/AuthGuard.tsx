"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

import { useAppSelector } from "@/store/hooks";

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();

  const { accessToken, isHydrated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    if (!accessToken) {
      router.replace("/login");
    }
  }, [isHydrated, accessToken, router]);

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  if (!accessToken) {
    return null;
  }

  return children;
};
