import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/user.service";
import { UserListResponse } from "../types/user.types";

export const useUsers = () => {
  return useQuery<UserListResponse>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
