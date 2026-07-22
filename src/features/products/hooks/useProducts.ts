import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "@/features/products/services/product.service";
import { Product, ProductListResponse } from "@/features/products/types/product.types";

export const useProducts = (keyword: string, page: number = 1) => {
  return useQuery<ProductListResponse>({
    queryKey: ["products", keyword, page],
    queryFn: () => getProducts(keyword, page),
    placeholderData: keepPreviousData,
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  })
}
