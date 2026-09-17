"use client";

import { useUser } from "@/features/users/hooks/useUser";
import { useAppSelector } from "@/store/hooks";

export const useProfile = () => {
  const currentUser = useAppSelector((state) => state.auth.user);

  const userQuery = useUser(currentUser?.id ?? 0);

  return {
    ...userQuery,
    currentUser,
  };
};
