"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { restoreAuth, setHydrated } from "@/store/slices/auth.slice";
import type { ReactNode } from "react";
import { useEffect } from "react";
import {
  clearAuthState,
  getAuthState,
  saveAuthState,
} from "../services/auth.storage";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

  // Restore
  useEffect(() => {
    const storedAuth = getAuthState();

    if (storedAuth) {
      dispatch(restoreAuth(storedAuth));
    } else {
      dispatch(setHydrated());
    }
  }, [dispatch]);

  // Persist
  useEffect(() => {
    if (!authState.isHydrated) {
      return;
    }

    if (!authState.accessToken) {
      clearAuthState();
      return;
    }

    saveAuthState({
      accessToken: authState.accessToken,
      refreshToken: authState.refreshToken,
      user: authState.user,
    });
  }, [
    authState.isHydrated,
    authState.accessToken,
    authState.refreshToken,
    authState.user,
  ]);

  return children;
};
