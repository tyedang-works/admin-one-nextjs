import UserDetailPage from "@/features/users/components/UserDetailPage";

interface UserDetailRouteProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: UserDetailRouteProps) {
  const { id } = await params;

  return <UserDetailPage id={Number(id)} />;
}
