import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/order.service";
import { OrderListResponse } from "../types/order.types";

export const useOrders = () => {
  return useQuery<OrderListResponse>({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
};
