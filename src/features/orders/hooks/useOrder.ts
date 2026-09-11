import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../services/order.service";
import { Order } from "../types/order.types";

export const useOrder = (id: number) => {
  return useQuery<Order>({
    queryKey: ["order", id],
    queryFn: () => getOrder(id),
  });
};
