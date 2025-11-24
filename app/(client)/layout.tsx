import { Header } from '@/components/client/layout/header';
import { Footer } from '@/components/client/layout/footer';
import { StoreProvider } from '@/stores/store-provider';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </StoreProvider>
  );
}
