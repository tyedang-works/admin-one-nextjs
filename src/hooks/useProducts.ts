import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/services/api/product.api";
import { Product } from "@/types/product";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
