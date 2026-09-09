import { ProductSortValue } from "../constants/product-sort.constants";
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  rating: number;
  thumbnail: string;
  stock: number;
}
export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export interface ProductFilters {
  keyword: string;
  category: string;
  page: number;
  sort: ProductSortValue;
}