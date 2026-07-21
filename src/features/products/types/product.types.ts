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

export interface CreateProductRequest {
  title: string;
  price: number;
}