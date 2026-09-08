import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/auth.slice";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };

  return handleLogout;
};
