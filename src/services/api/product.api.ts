import { axiosClient } from "@/services/axios/axiosClient";
import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosClient.get("/products");

  return response.data.products;
};
