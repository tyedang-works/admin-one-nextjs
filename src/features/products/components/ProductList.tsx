"use client";

import { useProducts } from "@/hooks/useProducts";

export default function ProductList() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <main>Loading...</main>;
  }

  if (error) {
    return <main>Error...</main>;
  }

  if (!data?.length) {
    return <main>No products found.</main>;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}