import { getProducts } from "@/features/products/services/product.service";
import { Product } from "@/features/products/types/product.types";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
