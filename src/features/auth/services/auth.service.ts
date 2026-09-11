import { axiosClient } from "@/services/axios/axiosClient";
import {
    LoginApiResponse,
    LoginRequest,
    LoginResponse,
} from "../types/auth.types";

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosClient.post<LoginApiResponse>(
    "/auth/login",
    request,
  );

  const { data } = response;
  return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    user: {
      id: data.id,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      image: data.image,
    },
  };
};
