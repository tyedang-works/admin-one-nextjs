import { axiosClient } from "@/services/axios/axiosClient";
import { Product, ProductFilters, ProductListResponse } from "@/features/products/types/product.types";
import { CategoryListResponse } from "../types/category.types";

const PAGE_SIZE = 10;
export const getProducts = async (filters: ProductFilters): Promise<ProductListResponse> => {
  const { keyword, category, page } = filters;

  let endpoint = "/products";
  if(keyword) {
    endpoint = "/products/search"
  } else if(category) {
    endpoint = `/products/category/${category}`
  }
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

export const getCategories = async (): Promise<CategoryListResponse> => {
  const response = await axiosClient.get<CategoryListResponse>("/products/categories");

  return response.data;
}
