import HeaderGlobal from "@/components/layouts/GlobalHeader";
import { AuthGuard } from "@/features/auth/components/AuthGuard";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <>
        <HeaderGlobal />
        {children}
      </>
    </AuthGuard>
  );
}
