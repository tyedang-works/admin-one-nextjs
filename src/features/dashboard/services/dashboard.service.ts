import { CategoryListResponse } from "@/features/products/types/category.types";
import { ProductListResponse } from "@/features/products/types/product.types";
import { axiosClient } from "@/services/axios/axiosClient";
import {
  DashboardCategorySummary,
  DashboardData,
} from "../types/dashboard.types";

export const getDashboardData = async (): Promise<DashboardData> => {
  const [productsResponse, categoriesResponse] = await Promise.all([
    axiosClient.get<ProductListResponse>("/products", {
      params: {
        limit: 0,
      },
    }),
    axiosClient.get<CategoryListResponse>("/products/categories"),
  ]);

  const products = productsResponse.data.products;

  const totalProducts = productsResponse.data.total;
  const totalCategories = categoriesResponse.data.length;

  const averagePrice =
    products.length > 0
      ? products.reduce((sum, product) => sum + product.price, 0) /
        products.length
      : 0;

  const averageRating =
    products.length > 0
      ? products.reduce((sum, product) => sum + product.rating, 0) /
        products.length
      : 0;

  const categoryMap = products.reduce<
    Record<
      string,
      {
        count: number;
        totalPrice: number;
        totalRating: number;
      }
    >
  >((accumulator, product) => {
    const current = accumulator[product.category];

    if (current) {
      current.count += 1;
      current.totalPrice += product.price;
      current.totalRating += product.rating;
    } else {
      accumulator[product.category] = {
        count: 1,
        totalPrice: product.price,
        totalRating: product.rating,
      };
    }

    return accumulator;
  }, {});

  const categorySummary: DashboardCategorySummary[] = Object.entries(
    categoryMap,
  )
    .map(([category, summary]) => ({
      category,
      count: summary.count,
      averagePrice: summary.totalPrice / summary.count,
      averageRating: summary.totalRating / summary.count,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    products,
    totalProducts,
    totalCategories,
    averagePrice,
    averageRating,
    categorySummary,
  };
};
