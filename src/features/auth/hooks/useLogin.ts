import { useAppDispatch } from "@/store/hooks";
import { loginSuccess } from "@/store/slices/auth.slice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { login } from "../services/auth.service";
import {
  LoginErrorResponse,
  LoginRequest,
  LoginResponse,
} from "../types/auth.types";

type LoginMutationError = AxiosError<LoginErrorResponse>;

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return useMutation<LoginResponse, LoginMutationError, LoginRequest>({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(loginSuccess(data));

      router.push("/products");
    },
  });
};
