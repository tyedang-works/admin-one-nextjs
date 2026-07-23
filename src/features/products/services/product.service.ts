import {
  Product,
  ProductFilters,
  ProductListResponse,
} from "@/features/products/types/product.types";
import { axiosClient } from "@/services/axios/axiosClient";
import { PRODUCT_SORT_MAPPING } from "../constants/product-sort-mapping";
import { CategoryListResponse } from "../types/category.types";

const PAGE_SIZE = 10;
export const getProducts = async (
  filters: ProductFilters,
): Promise<ProductListResponse> => {
  const { keyword, category, sort, page } = filters;

  let endpoint = "/products";
  if (keyword) {
    endpoint = "/products/search";
  } else if (category) {
    endpoint = `/products/category/${category}`;
  }

  const skip = (page - 1) * PAGE_SIZE;

  const sortParams = PRODUCT_SORT_MAPPING[sort];

  const params: {
    limit: number;
    skip: number;
    q?: string;
    sortBy?: "title" | "price";
    order?: "asc" | "desc";
  } = {
    limit: PAGE_SIZE,
    skip,
  };

  if (keyword) {
    params.q = keyword;
  }

  if (sortParams.sortBy) {
    params.sortBy = sortParams.sortBy;
  }

  if (sortParams.order) {
    params.order = sortParams.order;
  }

  const response = await axiosClient.get<ProductListResponse>(endpoint, {
    params,
  });

  return response.data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await axiosClient.get(`/products/${id}`);

  return response.data;
};

export const getCategories = async (): Promise<CategoryListResponse> => {
  const response = await axiosClient.get<CategoryListResponse>(
    "/products/categories",
  );

  return response.data;
};
