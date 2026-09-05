export interface AuthUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
  isHydrated: boolean;
}

export interface RestoreAuthPayload {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginApiResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface PersistedAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
}

export interface LoginErrorResponse {
  message: string;
}
