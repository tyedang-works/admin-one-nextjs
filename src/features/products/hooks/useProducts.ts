import {
  getProduct,
  getProducts,
} from "@/features/products/services/product.service";
import {
  Product,
  ProductFilters,
  ProductListResponse,
} from "@/features/products/types/product.types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useProducts = (filters: ProductFilters) => {
  return useQuery<ProductListResponse>({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
    placeholderData: keepPreviousData,
  });
};

export const useProduct = (id: number) => {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
};
