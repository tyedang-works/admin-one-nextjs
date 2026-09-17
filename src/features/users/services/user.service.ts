import { axiosClient } from "@/services/axios/axiosClient";
import { User, UserListResponse } from "../types/user.types";

export const getUsers = async (): Promise<UserListResponse> => {
  const response = await axiosClient.get<UserListResponse>("/users", {
    params: {
      limit: 0,
    },
  });

  return response.data;
};

export const getUser = async (id: number): Promise<User> => {
  const response = await axiosClient.get<User>(`/users/${id}`);

  return response.data;
};
