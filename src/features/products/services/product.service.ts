import { axiosClient } from "@/services/axios/axiosClient";
import { Product, ProductListResponse } from "@/features/products/types/product.types";

const PAGE_SIZE = 10;
export const getProducts = async (
  keyword: string, 
  page: number,
): Promise<ProductListResponse> => {
  const endpoint = keyword ? "/products/search" : "/products";
  const skip = (page - 1) * PAGE_SIZE;
  const response = await axiosClient.get(endpoint, {
    params: {
      ...(keyword && {q: keyword}),
      limit: PAGE_SIZE,
      skip,
    },
  });

  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await axiosClient.get(`/products/${id}`);

  return response.data;
};
