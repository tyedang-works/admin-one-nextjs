import { GuestGuard } from "@/features/auth/components/GuestGuard";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GuestGuard>{children}</GuestGuard>;
}