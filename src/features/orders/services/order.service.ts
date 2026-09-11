import { axiosClient } from "@/services/axios/axiosClient";
import { Order, OrderListResponse } from "../types/order.types";

interface CartProductResponse {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface CartResponse {
  id: number;
  products: CartProductResponse[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface CartListResponse {
  carts: CartResponse[];
  total: number;
}

interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserListResponse {
  users: UserResponse[];
  total: number;
}

export const getOrders = async (): Promise<OrderListResponse> => {
  const [cartsResponse, usersResponse] = await Promise.all([
    axiosClient.get<CartListResponse>("/carts", {
      params: {
        limit: 0,
      },
    }),
    axiosClient.get<UserListResponse>("/users", {
      params: {
        limit: 0,
      },
    }),
  ]);

  const carts = cartsResponse.data.carts;
  const users = usersResponse.data.users;

  const userMap = new Map(
    users.map((user) => [
      user.id,
      {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
      },
    ]),
  );

  const orders: Order[] = carts.map((cart) => {
    const customer = userMap.get(cart.userId);

    return {
      id: cart.id,
      userId: cart.userId,
      customerName: customer?.name ?? "Unknown customer",
      customerEmail: customer?.email ?? "",
      products: cart.products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
        total: product.total,
        discountPercentage: product.discountPercentage,
        discountedTotal: product.discountedTotal,
        thumbnail: product.thumbnail,
      })),
      total: cart.total,
      discountedTotal: cart.discountedTotal,
      totalProducts: cart.totalProducts,
      totalQuantity: cart.totalQuantity,
    };
  });

  return {
    orders,
    total: cartsResponse.data.total,
  };
};

export const getOrder = async (id: number): Promise<Order> => {
  const cartResponse = await axiosClient.get<CartResponse>(`/carts/${id}`);

  const cart = cartResponse.data;

  const userResponse = await axiosClient.get<UserResponse>(
    `/users/${cart.userId}`,
  );

  const user = userResponse.data;

  return {
    id: cart.id,
    userId: cart.userId,
    customerName: `${user.firstName} ${user.lastName}`,
    customerEmail: user.email,
    products: cart.products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      total: product.total,
      discountPercentage: product.discountPercentage,
      discountedTotal: product.discountedTotal,
      thumbnail: product.thumbnail,
    })),
    total: cart.total,
    discountedTotal: cart.discountedTotal,
    totalProducts: cart.totalProducts,
    totalQuantity: cart.totalQuantity,
  };
};
