export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
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
}