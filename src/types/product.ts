export interface Product {
  id: number;
  title: string;
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