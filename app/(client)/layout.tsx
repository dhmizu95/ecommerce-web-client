import Link from "next/link";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold">
              Exom
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/products" className="hover:text-zinc-600 dark:hover:text-zinc-300">
                Products
              </Link>
              <Link href="/cart" className="hover:text-zinc-600 dark:hover:text-zinc-300">
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-zinc-500">
          © 2025 Exom. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
