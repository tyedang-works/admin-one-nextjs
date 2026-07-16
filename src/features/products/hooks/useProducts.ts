import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/features/products/services/product.service";
import { Product } from "@/features/products/types/product.types";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
