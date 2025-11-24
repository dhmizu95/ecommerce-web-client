import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 p-4">
        <Link href="/admin" className="text-xl font-bold block mb-8">
          Exom Admin
        </Link>
        <nav className="space-y-2">
          <Link
            href="/admin"
            className="block px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="block px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Products
          </Link>
          <Link
            href="/admin/orders"
            className="block px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Orders
          </Link>
          <Link
            href="/admin/customers"
            className="block px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Customers
          </Link>
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
