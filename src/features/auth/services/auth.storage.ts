import { AUTH_STORAGE_KEY } from "../constants/auth.constants";
import { PersistedAuthState } from "../types/auth.types";

export const saveAuthState = (authState: PersistedAuthState) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState));
};

export const getAuthState = (): PersistedAuthState | null => {
  const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedAuth) {
    return null;
  }

  return JSON.parse(storedAuth);
};

export const clearAuthState = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};
