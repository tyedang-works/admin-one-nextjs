import OrderDetailPage from "@/features/orders/components/OrderDetailPage";

interface OrderDetailRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: OrderDetailRouteProps) {
  const { id } = await params;
  return <OrderDetailPage id={Number(id)} />;
}
