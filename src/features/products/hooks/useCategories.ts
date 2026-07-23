import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/product.service";
import { CategoryListResponse } from "../types/category.types";

export const useCategories = () => {
  return useQuery<CategoryListResponse>({
    queryKey: ["categories"],
    queryFn: getCategories,
  })
};