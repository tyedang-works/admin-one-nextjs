import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user.service";
import { User } from "../types/user.types";

export const useUser = (id: number) => {
  return useQuery<User>({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: id > 0,
  });
};
