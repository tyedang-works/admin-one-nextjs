import { Product } from "@/features/products/types/product.types";

export interface DashboardCategorySummary {
  category: string;
  count: number;
  averagePrice: number;
  averageRating: number;
}

export interface DashboardData {
  products: Product[];
  totalProducts: number;
  totalCategories: number;
  averagePrice: number;
  averageRating: number;
  categorySummary: DashboardCategorySummary[];
}
