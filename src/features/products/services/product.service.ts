import { axiosClient } from "@/services/axios/axiosClient";
import { Product } from "@/features/products/types/product.types";

export const getProducts = async (keyword: string): Promise<Product[]> => {
  const response = await axiosClient.get("/products", {
    params: {
      search: keyword,
    },
  });

  return response.data.products;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await axiosClient.get(`/products/${id}`);

  return response.data;
};
