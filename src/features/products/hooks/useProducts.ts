import { useQuery } from "@tanstack/react-query";

import { getProduct, getProducts } from "@/features/products/services/product.service";
import { Product } from "@/features/products/types/product.types";

export const useProducts = (keyword: string) => {
  return useQuery<Product[]>({
    queryKey: ["products", keyword],
    queryFn: () => getProducts(keyword),
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  })
}
